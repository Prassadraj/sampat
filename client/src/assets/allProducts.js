const allProduct = [
  {
    id: 1,
    name: "Apple AirPods Pro",
    features: `The speakers inside the EarPods have been engineered to maximise sound output, which means you get high-quality audio.
    The EarPods (USB-C) also include a built-in remote that lets you adjust the volume, control the playback of music and video, and answer or end calls with a press of the remote.
    Designed by Apple
    Deeper, richer bass tones
    Greater protection from sweat and water`,
    img: [
      "https://m.media-amazon.com/images/I/61SUj2aKoEL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/61sRKTAfrhL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/51emillNpWL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/51+vJkbGtJL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/51aHwMRyg7L._SX679_.jpg",
    ],
    same: "airpod",
  },
  {
    id: 2,
    name: "Apple 2024 MacBook Air 15",
    features: `Supercharged by M3 — The blazing-fast MacBook Air with the M3 chip is a super-portable laptop that sails through work and play.
    PORTABLE DESIGN — Lightweight and just over 1 cm thin, so you can take MacBook Air anywhere you go.
    GET MORE DONE FASTER — The powerful 8-core CPU and 10-core GPU of the Apple M3 chip keep things running smoothly.`,
    img: [
      "https://m.media-amazon.com/images/I/71zbUS9KpQL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/61vxmI39VnL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/612JGmBkmQL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/6194n0YSBXL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/917EcYA4FIL._SX679_.jpg",
    ],
    same: "lap",
  },

  {
    id: 3,
    name: "Fire-Boltt Ninja Call Pro Plus ",
    features: `【1.83" HD Display Smart Watch】- The 46.48mm (1.83-inch) HD display makes the display clear and true-to-life, with vivid colours ensuring smooth readability and keeping the watch as exquisite to look at as when you first lay your eyes on it. The watch has a 280 NITS Peak Brightness
    This fashion smart watch will work on a single charge for about 8 days (without Bluetooth calling) and about 5 Days with Bluetooth calling.
    Charging Specs - The watch needs to be charged for 2 hours to reach 100%. The charger should be a 3.7V to 5V adapter or any laptop output. For a bare minimum of 20% charge the watch needs to be charged for about 30-40 mins`,
    img: [
      "https://m.media-amazon.com/images/I/41-zB3M31dL._SX300_SY300_QL70_FMwebp_.jpg",
      "https://m.media-amazon.com/images/I/81DEzbJ9ERL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71tOBelnDYL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71U-rEX7y5L._SX679_.jpg",
    ],
    same: "watch",
  },
  {
    id: 4,
    name: "Samsung Galaxy M15 5G",
    features: `DISPLAY - 16.39 Centimeters (6.5"Inch) Super AMOLED Display with 19.5:9 Aspect Ratio, FHD+ Resolution with 1080 x 2340 Pixels , 399 PPI with 16M Colors and 90Hz Refresh Rate
    CAMERA - 50MP (F1.8) Main Wide Angle Camera + 5MP (F2.2) Ultra Wide Angle Camera + 2MP (F2.4) Macro Angle Camera | 13MP (F2.0) Front Camera | Video Maximum Resolution of Full HD (1920 x 1080) @30fps
    INTERFACE & PROCESSOR - Latest Android 14 Operating System having One UI 6.1 platform with MediaTek Dimensity 6100+ Processor | 2.2GHz, 2GHz Clock Speed with Octa-Core Processor`,
    img: [
      "https://m.media-amazon.com/images/I/71YgibyExCL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/81+Md+CbJmL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/81rxJGhteqL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/61M0xBs9kRL._SX679_.jpg",
    ],
    same: "phone",
  },
  {
    id: 5,
    name: "Apple iPhone 13",
    features: `15 cm (6.1-inch) Super Retina XDR display
    Cinematic mode adds shallow depth of field and shifts focus automatically in your videos
    Advanced dual-camera system with 12MP Wide and Ultra Wide cameras; Photographic Styles, Smart HDR 4, Night mode, 4K Dolby Vision HDR recording
    12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording
    A15 Bionic chip for lightning-fast performance`,
    img: [
      "https://m.media-amazon.com/images/I/61-r9zOKBCL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/61J9KUops4L._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71e6luY333L._SX679_.jpg",
      "https://m.media-amazon.com/images/I/61W4nsX-yZL._SX679_.jpg",
    ],
    same: "phone",
  },
  {
    id: 6,
    name: "boAt Airdopes 141",
    features: `Playback- Enjoy an extended break on weekends with your favourite episodes on stream, virtue of a playback time of up to 42 hours including the 6 hours nonstop playtime for earbuds.
    Low Latency- Our BEAST mode makes Airdopes 141 a partner in entertainment with real-time audio and low latency experience. These tws earbuds are your companion for a perfect gaming experience.
    Clear Voice Calls- It dons built-in mic on each earbud along with our ENx Environmental Noise Cancellation tech that ensures a smooth delivery of your voice via voice calls
    boAt Signature Sound- Delve into your cherished boAt Immersive auditory time with Airdopes 141`,
    img: [
      "https://m.media-amazon.com/images/I/61KNJav3S9L._SX679_.jpg",
      "https://m.media-amazon.com/images/I/61mEqp7RZXL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71LIlNW980L._SX679_.jpg",
      "https://m.media-amazon.com/images/I/61vBE3t4x1L._SX679_.jpg",
      "https://m.media-amazon.com/images/I/61F5lcvJHLL._SX679_.jpg",
    ],
    same: "airpod",
  },
  {
    id: 7,
    name: "boAt Airdopes Atom 81",
    features: `Playback- Airdopes Atom 81 offer a total playtime of up to 50HRS, including up to 10HRS of playtime per earbud.
    Clear Voice Calls- Be heard clear across voice calls without those usual interruptions, with the Quad Mics ENx Tech enabled Airdopes Atom 81, that cancels out unwanted background noises during calls.
    Drivers- Delve into the boAt immersive auditory experience on Airdopes Atom 81 TWS earbuds courtesy its 13mm audio drivers. Frequency - 20Hz-20KHz`,
    img: [
      "https://m.media-amazon.com/images/I/41cU0ptdpWL._SX300_SY300_QL70_FMwebp_.jpg",
      "https://m.media-amazon.com/images/I/61OOrL6oh6L._SX679_.jpg",
      "https://m.media-amazon.com/images/I/61aaos19uXL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/61SrzBqUteL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/61gAcTx3SbL._SX679_.jpg",
    ],
    same: "airpod",
  },
  {
    id: 8,
    name: "Samsung Galaxy Book3 ",
    features: `Processor: 13th Generation Intel Core i5-1340P processor (1.9 GHz up to 4.6 GHz 12 MB L3 Cache) | Memory: 16 GB LPDDR5 Memory | Storage: 512 GB NVMe SSD | Intel Iris Xe Graphics
    Operating System: Windows 11 Home | Pre-Installed Software: MS Office Home & Student 2021, Galaxy Ecosystem Apps
    Display: 14" (35.56 cm), Dynamic AMOLED 2X, 3K WQXGA+ (2880 x 1800) resolution | 16:10 Aspect Ratio | 120Hz | 500nits HDR |Design: Aluminum body with 11.3mm thinness and 1.17kg`,
    img: [
      "https://m.media-amazon.com/images/I/71Dh450OVpL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/718zhO0N94L._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71y8LecDWqL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71FDmtTBVyL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/81YWUkcl3iL._SX679_.jpg",
    ],
    same: "lap",
  },
  {
    id: 9,
    name: "Samsung Galaxy Book4",
    features: `Processor: Intel Core i7 Processor 1355U (1.7 GHz Up to 5.0 GHz 12 MB Smart Cache) | Memory: 16 GB LPDDR4X Memory | Storage: 512GB SSD| Intel Iris XE Graphics
    Operating System: Windows 11 Home | Pre-Installed Software: MS Office Home & Student 2021, Galaxy Ecosystem Apps
    Display: 15.6" Inch (39.6cm) Full HD, (1920 x 1080) Resolution | 16:9 Aspect Ratio | 300 Nits Brightness | 60Hz Refresh Rate
    Ports: 2 USB Type-C, 2 USB 3.2 Type-A, 1 HDMI, 1 MicroSD Card Reader, 1 RJ45 LAN Port | Wi-Fi 6 | Without CD-drive |Battery: 54 Watt Hours, Charger: 45W USB Type-C Adapter
    Camera: 1MP with 720p| Dolby Atmos | Microphone: 1 Headphone out/Mic-in Combo | FingerPrint Reader`,
    img: [
      "https://m.media-amazon.com/images/I/71fjCdvBVUL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/6160lICVkhL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/61+Xpl1rD0L._SX679_.jpg",
      "https://m.media-amazon.com/images/I/51pLA+hA5XL._SX679_.jpg",
    ],
    same: "lap",
  },

  {
    id: 10,
    features: `Screen Size- Crisp image quality, and colors that pop, the 1.69 Inches HD Square display makes everything look larger than life.Always on Display-No, Peak Brightness-550 Nits
    boAt Coins- Get vouchers/coupons that can be redeemed on our boAt Crest App basis your workouts!
    Battery Time- Feature loaded Watch comes with upto 7 days battery life. Never miss out on the fun with ultimate battery life. *Battery life is dependent on usage of the watch.
    Health Ecosystem- Create your own health and wellness ecosystem on the Crest App with Custom fitness plans, wellness crew, energy scores, sleep scores & more.`,
    name: "boAt Wave Style Smart Watch",
    img: [
      "https://m.media-amazon.com/images/I/618fpS1lonL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/719iIRtXlJL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71fWgwtP52L._SX679_.jpg",
      "https://m.media-amazon.com/images/I/612gDhVLm-L._SX679_.jpg",
    ],
    same: "watch",
  },
  {
    id: 11,
    name: "Apple Watch Ultra",
    features: `WHY APPLE WATCH ULTRA — Rugged and capable, built to meet the demands of endurance athletes, outdoor adventurers and water sports enthusiasts — with a specialised strap for each. Up to 36 hours of battery life, plus all the Apple Watch features that help you stay healthy, safe and connected.
    EXTREMELY RUGGED, INCREDIBLY CAPABLE — 49-millimetre corrosion-resistant titanium case. Larger Digital Crown and more accessible buttons. 100-metre water resistance. Customisable Action button for instant physical control over a variety of functions.`,
    img: [
      "https://m.media-amazon.com/images/I/91z5KuonXrL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/81LNgb-7FnL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/91g08EO6xoL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/81mik1zN55L._SX679_.jpg",
    ],
    same: "watch",
  },
  {
    id: 12,
    name: "Apple iPhone 15 (128 GB)",
    features: `DYNAMIC ISLAND COMES TO IPHONE 15 — Dynamic Island bubbles up alerts and Live Activities — so you don’t miss them while you’re doing something else. You can see who’s calling, track your next ride, check your flight status, and so much more.
    INNOVATIVE DESIGN — iPhone 15 features a durable color-infused glass and aluminum design. It’s splash, water, and dust resistant. The Ceramic Shield front is tougher than any smartphone glass. And the 6.1" Super Retina XDR display is up to 2x brighter in the sun compared to iPhone 14.`,
    img: [
      "https://m.media-amazon.com/images/I/71v2jVh6nIL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/516IO6TPGIL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/712CBkmhLhL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/61f4dTush1L._SX679_.jpg",
    ],
    same: "phone",
  },
];
export default allProduct;
