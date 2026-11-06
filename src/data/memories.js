// ✏️ THE ONLY FILE you need to edit for photos & videos.
// - Put photos in public/media/photos, videos in public/media/videos, posters in public/media/posters
// - Add / remove / reorder entries freely. Photos + videos combined: MAX 80.
// - `ratio` is optional ("portrait" | "landscape" | "square") and only shapes the demo placeholder.
// Missing files automatically show a pretty placeholder (never a broken icon).

export const MAX_MEDIA = 80

const raw = [
  // ---------- PHOTOS ----------
  { id: 1, type: 'image', src: '/media/photos/IMG-20260523-WA0077.jpg', title: 'My Favourite Human 💗', caption: 'Still the best part of every day.', date: 'Our Memories' },
  { id: 2, type: 'image', src: '/media/photos/IMG-20260523-WA0146.jpg', title: 'Sunbeam Smile ☀️', caption: 'Your joy makes the whole day brighter.', date: 'Our Memories' },
  { id: 3, type: 'image', src: '/media/photos/IMG-20260611-WA0032.jpg', title: 'Little Adventure Buddy 🧭', caption: 'Every outing feels better with you beside me.', date: 'Our Memories' },
  { id: 4, type: 'image', src: '/media/photos/IMG-20260612-WA0056.jpg', title: 'Bestie Energy ✨', caption: 'This is the kind of bond that never fades.', date: 'Our Memories' },
  { id: 5, type: 'image', src: '/media/photos/IMG-20260612-WA0061.jpg', title: 'Sweetest Memories 🍓', caption: 'The little moments are the best ones.', date: 'Our Memories' },
  { id: 6, type: 'image', src: '/media/photos/IMG-20260612-WA0081.jpg', title: 'Tiny Giggles & Big Joy 😂', caption: 'Laughter really is our superpower.', date: 'Our Memories' },
  { id: 7, type: 'image', src: '/media/photos/IMG-20260612-WA0100.jpg', title: 'Snack Time & Laughs 🍿', caption: 'The tastiest memories always involve you.', date: 'Our Memories' },
  { id: 8, type: 'image', src: '/media/photos/IMG-20260612-WA0108.jpg', title: 'Pretty in Pink 💕', caption: 'You bring colour to every ordinary day.', date: 'Our Memories' },
  { id: 9, type: 'image', src: '/media/photos/IMG-20260612-WA0117.jpg', title: 'Dream Team 🌟', caption: 'We make everything a little more magical.', date: 'Our Memories' },
  { id: 10, type: 'image', src: '/media/photos/IMG-20260612-WA0133.jpg', title: 'Weekend Wonder 🏖️', caption: 'The best plans are the ones with you in them.', date: 'Our Memories' },
  { id: 11, type: 'image', src: '/media/photos/IMG-20260612-WA0141.jpg', title: 'Cozy Vibes 🫶', caption: 'The coziest memories are made with love.', date: 'Our Memories' },
  { id: 12, type: 'image', src: '/media/photos/IMG-20260612-WA0176.jpg', title: 'Forever Sidekick 🐾', caption: 'Always right there through the chaos and joy.', date: 'Our Memories' },
  { id: 13, type: 'image', src: '/media/photos/IMG-20260818-WA0032.jpg', title: 'Golden Hour Glow 🌅', caption: 'The light is prettier when you are in it.', date: 'Our Memories' },
  { id: 14, type: 'image', src: '/media/photos/IMG-20261101-WA0007.jpg', title: 'Picture-Perfect Chaos 📸', caption: 'Every frame tells a story worth keeping.', date: 'Our Memories' },
  { id: 15, type: 'image', src: '/media/photos/IMG-20261101-WA0008.jpg', title: 'Twin Flame Energy 👯', caption: 'Two peas in a pod, always and forever.', date: 'Our Memories' },
  { id: 16, type: 'image', src: '/media/photos/IMG-20261101-WA0009.jpg', title: 'Smile Mission 😊', caption: 'One smile from you and the whole day changes.', date: 'Our Memories' },
  { id: 17, type: 'image', src: '/media/photos/IMG-20261101-WA0010.jpg', title: 'Goofball Gang 😂', caption: 'The funniest part of my life is you.', date: 'Our Memories' },
  { id: 18, type: 'image', src: '/media/photos/IMG-20261101-WA0011.jpg', title: 'Happy Little Hearts 💞', caption: 'Pure happiness in one perfect frame.', date: 'Our Memories' },
  { id: 19, type: 'image', src: '/media/photos/IMG-20261101-WA0013.jpg', title: 'Making Magic ✨', caption: 'Turning ordinary days into unforgettable ones.', date: 'Our Memories' },
  { id: 20, type: 'image', src: '/media/photos/IMG-20261101-WA0015.jpg', title: 'Soulmate Sister 🫶', caption: 'My built-in best friend and biggest cheerleader.', date: 'Our Memories' },
  { id: 21, type: 'image', src: '/media/photos/IMG-20261101-WA0016.jpg', title: 'Cuteness Overload 🥰', caption: 'Absolutely impossible to resist.', date: 'Our Memories' },
  { id: 22, type: 'image', src: '/media/photos/IMG-20261101-WA0017.jpg', title: 'Sparkle & Sass ✨', caption: 'You bring the fun to every room.', date: 'Our Memories' },
  { id: 23, type: 'image', src: '/media/photos/IMG-20261101-WA0018.jpg', title: 'Mood Booster 🌈', caption: 'A single look from you makes everything better.', date: 'Our Memories' },
  { id: 24, type: 'image', src: '/media/photos/IMG-20261101-WA0019.jpg', title: 'Love in Full Frame 💗', caption: 'Capturing the beautiful, messy, perfect moments.', date: 'Our Memories' },
  { id: 25, type: 'image', src: '/media/photos/IMG-20261101-WA0020.jpg', title: 'Our Story in Pictures 📖', caption: 'Every memory matters when it is with you.', date: 'Our Memories' },
  { id: 26, type: 'image', src: '/media/photos/IMG20260818110247.jpg', title: 'When We Shine ✨', caption: 'The best kind of memories are the ones we share.', date: 'Our Memories' },
  { id: 27, type: 'image', src: '/media/photos/IMG-20260505-WA0013.jpg', title: 'Sweet Sister Moment 💗', caption: 'A beautiful memory to keep forever.', date: 'Our Memories' },
  { id: 28, type: 'image', src: '/media/photos/IMG-20260523-WA0097.jpg', title: 'Happy Together ✨', caption: 'Every moment with you is special.', date: 'Our Memories' },
  { id: 29, type: 'image', src: '/media/photos/IMG-20260611-WA0142.jpg', title: 'Beautiful Day 🌸', caption: 'Smiles, memories and lots of love.', date: 'Our Memories' },
  { id: 30, type: 'image', src: '/media/photos/IMG-20260611-WA0155.jpg', title: 'Best Day Ever 💕', caption: 'Another perfect memory with you.', date: 'Our Memories' },
  { id: 31, type: 'image', src: '/media/photos/IMG-20260612-WA0045.jpg', title: 'Little Joys 😊', caption: 'The moments we treasure most.', date: 'Our Memories' },
  { id: 32, type: 'image', src: '/media/photos/IMG-20260612-WA0182.jpg', title: 'Forever Memories 🫶', caption: 'Together is always my favourite place.', date: 'Our Memories' },
  { id: 33, type: 'image', src: '/media/photos/IMG20250302123845.jpg', title: 'A Special Memory 📸', caption: 'A moment worth remembering.', date: 'Our Memories' },
  { id: 34, type: 'image', src: '/media/photos/IMG20250412175101.jpg', title: 'Lovely Little Moment 💖', caption: 'Holding on to the happy days.', date: 'Our Memories' },
  { id: 35, type: 'image', src: '/media/photos/IMG20250414081825.jpg', title: 'Sunshine Memories ☀️', caption: 'You make every day brighter.', date: 'Our Memories' },
  { id: 36, type: 'image', src: '/media/photos/IMG20250817092956.jpg', title: 'Pure Happiness 🌈', caption: 'A memory filled with love and laughter.', date: 'Our Memories' },
  { id: 37, type: 'image', src: '/media/photos/IMG20250817115846.jpg', title: 'Beautiful Bond 💞', caption: 'Sisters, best friends, always.', date: 'Our Memories' },
  { id: 38, type: 'image', src: '/media/photos/IMG20250817115848.jpg', title: 'Smiles For Days 😄', caption: 'The best memories are made together.', date: 'Our Memories' },
  { id: 39, type: 'image', src: '/media/photos/IMG_20251109_191209_484.webp', title: 'One More Favourite 💗', caption: 'A precious moment with my favourite person.', date: 'Our Memories' },
  { id: 40, type: 'image', src: '/media/photos/InShot_20251106_153617227.jpg', title: 'Captured With Love ✨', caption: 'A special memory made just for us.', date: 'Our Memories' },

  // ---------- VIDEOS ----------
  { id: 101, type: 'video', src: '/media/videos/InShot_20251107_001636835.mp4', poster: '', title: 'Dance Party Time 💃', caption: 'The kind of joy that never stops.' },
  { id: 102, type: 'video', src: '/media/videos/Snapchat-1005033226.mp4', poster: '', title: 'Best Moments on Replay 🔁', caption: 'I would watch this forever.' },
  { id: 103, type: 'video', src: '/media/videos/Snapchat-1054403523.mp4', poster: '', title: 'Us Being Us 🎊', caption: 'Some memories are just too good to leave behind.' },
  { id: 104, type: 'video', src: '/media/videos/Snapchat-1067525494.mp4', poster: '', title: 'Happy Dance Alert 🕺', caption: 'The soundtrack to the best kind of fun.' },
  { id: 105, type: 'video', src: '/media/videos/Snapchat-1159648481.mp4', poster: '', title: 'Random Laughs 😆', caption: 'Half the time we do not even know why we are laughing.' },
  { id: 106, type: 'video', src: '/media/videos/Snapchat-1202053001.mp4', poster: '', title: 'A Little Bit of Magic ✨', caption: 'Some moments feel like pure sparkle.' },
  { id: 107, type: 'video', src: '/media/videos/Snapchat-1310523331.mp4', poster: '', title: 'Quick Cuddle Break 💞', caption: 'The sweetest little pause in the day.' },
  { id: 108, type: 'video', src: '/media/videos/Snapchat-1382456041.mp4', poster: '', title: 'The Real Stars 🌟', caption: 'The best scenes are always the ones with us.' },
  { id: 109, type: 'video', src: '/media/videos/Snapchat-1392808456.mp4', poster: '', title: 'Snack Break Squad 🍿', caption: 'Fuelled by laughter and emotional support.' },
  { id: 110, type: 'video', src: '/media/videos/Snapchat-1396003403.mp4', poster: '', title: 'Hysterical Moments 😂', caption: 'I am still laughing just thinking about this.' },
  { id: 111, type: 'video', src: '/media/videos/Snapchat-1414832647.mp4', poster: '', title: 'Wild & Wonderful 🐾', caption: 'Always a little chaos, always a lot of love.' },
  { id: 112, type: 'video', src: '/media/videos/Snapchat-1462789257.mp4', poster: '', title: 'Keep It Weird 😜', caption: 'Because normal is overrated, and we know it.' },
  { id: 113, type: 'video', src: '/media/videos/Snapchat-1638347763.mp4', poster: '', title: 'Pure Chaos, Pure Love 😄', caption: 'The funniest kind of unforgettable.' },
  { id: 114, type: 'video', src: '/media/videos/Snapchat-1698366099.mp4', poster: '', title: 'Sassy Little Star ⭐', caption: 'The energy is unmatched and so adorable.' },
  { id: 115, type: 'video', src: '/media/videos/Snapchat-17510065.mp4', poster: '', title: 'Tiny Giggles & Big Joy 😂', caption: 'The cutest chaos in the best way.' },
  { id: 116, type: 'video', src: '/media/videos/Snapchat-1818105347.mp4', poster: '', title: 'Our Favorite Shenanigans 🤭', caption: 'The best stories always start like this.' },
  { id: 117, type: 'video', src: '/media/videos/Snapchat-1876081825.mp4', poster: '', title: 'Besties on Repeat 🔁', caption: 'If I could replay this every day, I would.' },
  { id: 119, type: 'video', src: '/media/videos/Snapchat-1908408594.mp4', poster: '', title: 'Classic Sister Energy 💖', caption: 'Never a dull moment with you around.' },
  { id: 120, type: 'video', src: '/media/videos/Snapchat-1990670189.mp4', poster: '', title: 'Endlessly Fun 🥰', caption: 'You make even the random moments feel special.' },
  { id: 121, type: 'video', src: '/media/videos/Snapchat-238752834.mp4', poster: '', title: 'Besties in Motion 🎉', caption: 'Always making the room feel lighter.' },
  { id: 122, type: 'video', src: '/media/videos/Snapchat-417177815.mp4', poster: '', title: 'Cute Chaos Unleashed 😄', caption: 'We never really know what is coming next.' },
  { id: 123, type: 'video', src: '/media/videos/Snapchat-44204437.mp4', poster: '', title: 'Goofball Mode 😄', caption: 'One look and the laughter starts.' },
  { id: 124, type: 'video', src: '/media/videos/Snapchat-584401658.mp4', poster: '', title: 'Summer Vibes & Screams 🏖️', caption: 'The energy is loud, the memories are louder.' },
  { id: 125, type: 'video', src: '/media/videos/Snapchat-66839444.mp4', poster: '', title: 'Road Trip Anthem 🚗', caption: 'Songs, snacks, and nonstop smiles.' },
  { id: 126, type: 'video', src: '/media/videos/Snapchat-724687359.mp4', poster: '', title: 'Pure Sister Energy 🫶', caption: 'The kind of bond that is impossible to fake.' },
  { id: 127, type: 'video', src: '/media/videos/Snapchat-725621918.mp4', poster: '', title: 'Big Feelings, Bigger Laughs 💖', caption: 'This one still makes me grin instantly.' },
  { id: 128, type: 'video', src: '/media/videos/Snapchat-83082315.mp4', poster: '', title: 'Mood Booster Mode ✨', caption: 'Pure sunshine in video form.' },
  { id: 129, type: 'video', src: '/media/videos/VID-20260224-WA0007.mp4', poster: '', title: 'BFF Reels 🎬', caption: 'Candid, funny, and absolutely iconic.' },
  { id: 130, type: 'video', src: '/media/videos/VID-20260411-WA0073.mp4', poster: '', title: 'The Good Stuff ✨', caption: 'Every second feels like a little treasure.' },
  { id: 131, type: 'video', src: '/media/videos/Snapchat-1198221205.mp4', poster: '', title: 'Another Favorite Memory 🎬', caption: 'The kind of moment we can watch again and again.' },
  { id: 132, type: 'video', src: '/media/videos/Snapchat-1394910810.mp4', poster: '', title: 'More Fun Together 💃', caption: 'One more happy memory to keep close.' },
  { id: 133, type: 'video', src: '/media/videos/VID-20261105-WA0028.mp4', poster: '', title: 'Our Newest Memory 💗', caption: 'A brand-new memory made with love.' },
]

const clean = raw.filter((m) => m && m.src && (m.type === 'image' || m.type === 'video'))
if (clean.length > MAX_MEDIA) {
  console.warn(`[memories.js] ${clean.length} entries found. Only the first ${MAX_MEDIA} are shown. Please remove ${clean.length - MAX_MEDIA}.`)
}
export const memories = clean.slice(0, MAX_MEDIA)
export const photos = memories.filter((m) => m.type === 'image')
export const videos = memories.filter((m) => m.type === 'video')
