import { spawnSync } from 'node:child_process'
import { existsSync, mkdirSync, readdirSync, renameSync, rmSync, statSync } from 'node:fs'
import path from 'node:path'
import ffmpegPath from 'ffmpeg-static'

const publicDir = path.resolve('public')
const distDir = path.resolve('dist')

function findVideos(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const filePath = path.join(directory, entry.name)
    if (entry.isDirectory()) return findVideos(filePath)
    return /\.mp4$/i.test(entry.name) ? [filePath] : []
  })
}

if (!ffmpegPath || !existsSync(ffmpegPath)) {
  throw new Error('FFmpeg is required to create browser-compatible video files.')
}

const videos = findVideos(path.join(publicDir, 'media'))
if (videos.length === 0) throw new Error('No MP4 files were found in public/media.')
const posterNames = new Set()

for (const source of videos) {
  const relativePath = path.relative(publicDir, source)
  const output = path.join(distDir, relativePath)
  const temporaryOutput = `${output}.encoding.mp4`
  const posterName = `${path.parse(source).name}.jpg`
  const posterPath = path.join(distDir, 'media', 'posters', posterName)
  const temporaryPoster = `${posterPath}.encoding.jpg`

  if (posterNames.has(posterName)) throw new Error(`Video poster filename is not unique: ${posterName}`)
  posterNames.add(posterName)
  if (!existsSync(output)) throw new Error(`Vite did not copy video asset: ${relativePath}`)
  mkdirSync(path.dirname(output), { recursive: true })
  mkdirSync(path.dirname(posterPath), { recursive: true })

  const result = spawnSync(ffmpegPath, [
    '-hide_banner', '-loglevel', 'error', '-y',
    '-i', source,
    '-map', '0:v:0', '-map', '0:a?',
    '-vf', 'scale=trunc(iw/2)*2:trunc(ih/2)*2',
    '-c:v', 'libx264', '-preset', 'fast', '-crf', '23', '-pix_fmt', 'yuv420p',
    '-c:a', 'aac', '-b:a', '128k',
    '-movflags', '+faststart',
    temporaryOutput,
  ], { stdio: 'inherit' })

  if (result.error || result.status !== 0 || !existsSync(temporaryOutput) || statSync(temporaryOutput).size === 0) {
    rmSync(temporaryOutput, { force: true })
    throw result.error || new Error(`Could not create a playable copy of ${relativePath} (FFmpeg exit ${result.status}).`)
  }

  renameSync(temporaryOutput, output)
  const posterResult = spawnSync(ffmpegPath, [
    '-hide_banner', '-loglevel', 'error', '-y',
    '-ss', '0.1', '-i', output,
    '-frames:v', '1', '-vf', 'scale=960:-2:force_original_aspect_ratio=decrease',
    '-q:v', '5', '-update', '1',
    temporaryPoster,
  ], { stdio: 'inherit' })

  if (posterResult.error || posterResult.status !== 0 || !existsSync(temporaryPoster) || statSync(temporaryPoster).size === 0) {
    rmSync(temporaryPoster, { force: true })
    throw posterResult.error || new Error(`Could not create a poster for ${relativePath} (FFmpeg exit ${posterResult.status}).`)
  }

  renameSync(temporaryPoster, posterPath)
  console.log(`Prepared ${relativePath}`)
}

console.log(`Prepared ${videos.length} H.264/AAC videos and posters; original uploads in public/ were not modified.`)
