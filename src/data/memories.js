// ✏️ THE ONLY FILE you need to edit for photos & videos.
// - Put photos in public/media/photos, videos in public/media/videos, posters in public/media/posters
// - Add / remove / reorder entries freely. Photos + videos combined: MAX 80.
// - `ratio` is optional ("portrait" | "landscape" | "square") and only shapes the demo placeholder.
// Missing files automatically show a pretty placeholder (never a broken icon).

export const MAX_MEDIA = 80

const raw = [
  // ---------- PHOTOS ----------
  { id: 1, type: 'image', src: '/media/photos/IMG-20260523-WA0077.jpg', title: 'Love', date: 'Our Memories' },
  { id: 2, type: 'image', src: '/media/photos/IMG-20260523-WA0146.jpg', title: 'Sunshine', date: 'Our Memories' },
  { id: 3, type: 'image', src: '/media/photos/IMG-20260611-WA0032.jpg', title: 'Adventure', date: 'Our Memories' },
  { id: 4, type: 'image', src: '/media/photos/IMG-20260612-WA0056.jpg', title: 'Bond', date: 'Our Memories' },
  { id: 5, type: 'image', src: '/media/photos/IMG-20260612-WA0061.jpg', title: 'Sweetness', date: 'Our Memories' },
  { id: 6, type: 'image', src: '/media/photos/IMG-20260612-WA0081.jpg', title: 'Giggles', date: 'Our Memories' },
  { id: 7, type: 'image', src: '/media/photos/IMG-20260612-WA0100.jpg', title: 'Laughter', date: 'Our Memories' },
  { id: 8, type: 'image', src: '/media/photos/IMG-20260612-WA0108.jpg', title: 'Bloom', date: 'Our Memories' },
  { id: 9, type: 'image', src: '/media/photos/IMG-20260612-WA0117.jpg', title: 'Magic', date: 'Our Memories' },
  { id: 10, type: 'image', src: '/media/photos/IMG-20260612-WA0133.jpg', title: 'Joy', date: 'Our Memories' },
  { id: 11, type: 'image', src: '/media/photos/IMG-20260612-WA0141.jpg', title: 'Cozy', date: 'Our Memories' },
  { id: 12, type: 'image', src: '/media/photos/IMG-20260612-WA0176.jpg', title: 'Forever', date: 'Our Memories' },
  { id: 13, type: 'image', src: '/media/photos/IMG-20260818-WA0032.jpg', title: 'Glow', date: 'Our Memories' },
  { id: 14, type: 'image', src: '/media/photos/IMG-20261101-WA0007.jpg', title: 'Memories', date: 'Our Memories' },
  { id: 15, type: 'image', src: '/media/photos/IMG-20261101-WA0008.jpg', title: 'Together', date: 'Our Memories' },
  { id: 16, type: 'image', src: '/media/photos/IMG-20261101-WA0009.jpg', title: 'Smile', date: 'Our Memories' },
  { id: 17, type: 'image', src: '/media/photos/IMG-20261101-WA0010.jpg', title: 'Delight', date: 'Our Memories' },
  { id: 18, type: 'image', src: '/media/photos/IMG-20261101-WA0011.jpg', title: 'Happiness', date: 'Our Memories' },
  { id: 19, type: 'image', src: '/media/photos/IMG-20261101-WA0013.jpg', title: 'Magic', date: 'Our Memories' },
  { id: 20, type: 'image', src: '/media/photos/IMG-20261101-WA0015.jpg', title: 'Sisterhood', date: 'Our Memories' },
  { id: 21, type: 'image', src: '/media/photos/IMG-20261101-WA0016.jpg', title: 'Precious', date: 'Our Memories' },
  { id: 22, type: 'image', src: '/media/photos/IMG-20261101-WA0017.jpg', title: 'Sparkle', date: 'Our Memories' },
  { id: 23, type: 'image', src: '/media/photos/IMG-20261101-WA0018.jpg', title: 'Rainbow', date: 'Our Memories' },
  { id: 24, type: 'image', src: '/media/photos/IMG-20261101-WA0019.jpg', title: 'Love', date: 'Our Memories' },
  { id: 25, type: 'image', src: '/media/photos/IMG-20261101-WA0020.jpg', title: 'Story', date: 'Our Memories' },
  { id: 26, type: 'image', src: '/media/photos/IMG20260818110247.jpg', title: 'Shine', date: 'Our Memories' },
  { id: 27, type: 'image', src: '/media/photos/IMG-20260505-WA0013.jpg', title: 'Sisterhood', date: 'Our Memories' },
  { id: 28, type: 'image', src: '/media/photos/IMG-20260523-WA0097.jpg', title: 'Together', date: 'Our Memories' },
  { id: 29, type: 'image', src: '/media/photos/IMG-20260611-WA0142.jpg', title: 'Bloom', date: 'Our Memories' },
  { id: 30, type: 'image', src: '/media/photos/IMG-20260611-WA0155.jpg', title: 'Joy', date: 'Our Memories' },
  { id: 31, type: 'image', src: '/media/photos/IMG-20260612-WA0045.jpg', title: 'Happiness', date: 'Our Memories' },
  { id: 32, type: 'image', src: '/media/photos/IMG-20260612-WA0182.jpg', title: 'Forever', date: 'Our Memories' },
  { id: 33, type: 'image', src: '/media/photos/IMG20250302123845.jpg', title: 'Precious', date: 'Our Memories' },
  { id: 34, type: 'image', src: '/media/photos/IMG20250412175101.jpg', title: 'Delight', date: 'Our Memories' },
  { id: 35, type: 'image', src: '/media/photos/IMG20250414081825.jpg', title: 'Sunshine', date: 'Our Memories' },
  { id: 36, type: 'image', src: '/media/photos/IMG20250817092956.jpg', title: 'Happiness', date: 'Our Memories' },
  { id: 37, type: 'image', src: '/media/photos/IMG20250817115846.jpg', title: 'Sisterhood', date: 'Our Memories' },
  { id: 38, type: 'image', src: '/media/photos/IMG20250817115848.jpg', title: 'Smiles', date: 'Our Memories' },
  { id: 39, type: 'image', src: '/media/photos/IMG_20251109_191209_484.webp', title: 'Precious', date: 'Our Memories' },
  { id: 40, type: 'image', src: '/media/photos/InShot_20251106_153617227.jpg', title: 'Love', date: 'Our Memories' },

  // ---------- VIDEOS ----------
  { id: 101, type: 'video', src: '/media/videos/InShot_20251107_001636835.mp4', poster: '', title: 'Dance' },
  { id: 102, type: 'video', src: '/media/videos/Snapchat-1005033226.mp4', poster: '', title: 'Forever' },
  { id: 103, type: 'video', src: '/media/videos/Snapchat-1054403523.mp4', poster: '', title: 'Joy' },
  { id: 104, type: 'video', src: '/media/videos/Snapchat-1067525494.mp4', poster: '', title: 'Delight' },
  { id: 105, type: 'video', src: '/media/videos/Snapchat-1159648481.mp4', poster: '', title: 'Laughter' },
  { id: 106, type: 'video', src: '/media/videos/Snapchat-1202053001.mp4', poster: '', title: 'Magic' },
  { id: 107, type: 'video', src: '/media/videos/Snapchat-1310523331.mp4', poster: '', title: 'Cuddles' },
  { id: 108, type: 'video', src: '/media/videos/Snapchat-1382456041.mp4', poster: '', title: 'Stars' },
  { id: 109, type: 'video', src: '/media/videos/Snapchat-1392808456.mp4', poster: '', title: 'Treats' },
  { id: 110, type: 'video', src: '/media/videos/Snapchat-1396003403.mp4', poster: '', title: 'Giggles' },
  { id: 111, type: 'video', src: '/media/videos/Snapchat-1414832647.mp4', poster: '', title: 'Wonder' },
  { id: 112, type: 'video', src: '/media/videos/Snapchat-1462789257.mp4', poster: '', title: 'Playful' },
  { id: 113, type: 'video', src: '/media/videos/Snapchat-1638347763.mp4', poster: '', title: 'Love' },
  { id: 114, type: 'video', src: '/media/videos/Snapchat-1698366099.mp4', poster: '', title: 'Sparkle' },
  { id: 115, type: 'video', src: '/media/videos/Snapchat-17510065.mp4', poster: '', title: 'Giggles' },
  { id: 116, type: 'video', src: '/media/videos/Snapchat-1818105347.mp4', poster: '', title: 'Fun' },
  { id: 117, type: 'video', src: '/media/videos/Snapchat-1876081825.mp4', poster: '', title: 'Besties' },
  { id: 119, type: 'video', src: '/media/videos/Snapchat-1908408594.mp4', poster: '', title: 'Sisterhood' },
  { id: 120, type: 'video', src: '/media/videos/Snapchat-1990670189.mp4', poster: '', title: 'Joy' },
  { id: 121, type: 'video', src: '/media/videos/Snapchat-238752834.mp4', poster: '', title: 'Together' },
  { id: 122, type: 'video', src: '/media/videos/Snapchat-417177815.mp4', poster: '', title: 'Giggles' },
  { id: 123, type: 'video', src: '/media/videos/Snapchat-44204437.mp4', poster: '', title: 'Smile' },
  { id: 124, type: 'video', src: '/media/videos/Snapchat-584401658.mp4', poster: '', title: 'Summer' },
  { id: 125, type: 'video', src: '/media/videos/Snapchat-66839444.mp4', poster: '', title: 'Adventure' },
  { id: 126, type: 'video', src: '/media/videos/Snapchat-724687359.mp4', poster: '', title: 'Sisterhood' },
  { id: 127, type: 'video', src: '/media/videos/Snapchat-725621918.mp4', poster: '', title: 'Laughter' },
  { id: 128, type: 'video', src: '/media/videos/Snapchat-83082315.mp4', poster: '', title: 'Sunshine' },
  { id: 129, type: 'video', src: '/media/videos/VID-20260224-WA0007.mp4', poster: '', title: 'Joy' },
  { id: 130, type: 'video', src: '/media/videos/VID-20260411-WA0073.mp4', poster: '', title: 'Treasure' },
  { id: 131, type: 'video', src: '/media/videos/Snapchat-1198221205.mp4', poster: '', title: 'Memories' },
  { id: 132, type: 'video', src: '/media/videos/Snapchat-1394910810.mp4', poster: '', title: 'Together' },
  { id: 133, type: 'video', src: '/media/videos/VID-20261105-WA0028.mp4', poster: '', title: 'Happiness' },
]

const clean = raw.filter((m) => m && m.src && (m.type === 'image' || m.type === 'video'))
if (clean.length > MAX_MEDIA) {
  console.warn(`[memories.js] ${clean.length} entries found. Only the first ${MAX_MEDIA} are shown. Please remove ${clean.length - MAX_MEDIA}.`)
}
export const memories = clean.slice(0, MAX_MEDIA)
export const photos = memories.filter((m) => m.type === 'image')
export const videos = memories.filter((m) => m.type === 'video')
