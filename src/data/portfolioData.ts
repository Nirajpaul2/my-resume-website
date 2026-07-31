export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  category: 'iOS / tvOS' | 'OTT Streaming' | 'Fullstack / Cloud' | 'E-Commerce';
  featured: boolean;
  image?: string;
  url?: string;
  github?: string;
  tech: string[];
  keyFeatures: string[];
  metrics?: string;
  role: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  duration: string;
  description: string;
  achievements: string[];
  techStack: string[];
  logo: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: { name: string; level: number; highlight?: boolean; category: string }[];
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  topic: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  text: string;
  relationship: string;
}

export const PERSONAL_DATA = {
  name: "Niraj Paul",
  title: "Senior iOS Developer",
  roleTagline: "Specializing in OTT Streaming, SwiftUI, tvOS & High-Performance Apple Architectures",
  experienceYears: "11+",
  location: "Bangalore, India",
  email: "nirajpaul.dev@gmail.com",
  github: "https://github.com/nirajpaul",
  linkedin: "https://www.linkedin.com/in/nirajpaul",
  resumeUrl: "https://drive.google.com/file/d/1jn_iu_X9TBHHMoi4lULB-JAtrZWYdJom/view?usp=sharing",
  shortIntro: "I build high-performance iOS and Apple TV applications used by millions of users worldwide. I specialize in OTT Streaming, SwiftUI, scalable architectures, and premium user experiences.",
  detailedBio: `With over 11 years of engineering excellence in the Apple ecosystem, I architect and build enterprise-scale iOS and tvOS applications. Having led core video playback engines and high-traffic streaming features for major media platforms like SonyLIV and Tegna, as well as high-conversion e-commerce apps for Fabindia and Purplle, I bridge deep low-level AVFoundation/HLS video pipeline optimization with elegant SwiftUI visual design.`,
  companies: [
    { name: "Tegna", role: "Senior iOS Engineer", description: "US News & OTT Broadcasting Platform" },
    { name: "SonyLIV", role: "Lead Video & iOS Architect", description: "Enterprise OTT Video Streaming Platform" },
    { name: "Purplle", role: "Senior Mobile Engineer", description: "Beauty E-Commerce App serving millions" },
    { name: "Fabindia", role: "Lead iOS Developer", description: "Flagship Retail & Lifestyle Mobile App" },
  ],
  specializations: [
    "iOS",
    "Swift",
    "SwiftUI",
    "tvOS",
    "OTT Streaming Apps",
    "Video Streaming",
    "AVPlayer",
    "HLS",
    "MVVM",
    "Combine",
    "UIKit"
  ]
};

export const ACHIEVEMENTS = [
  { label: "Years Experience", value: 11, suffix: "+", description: "Building flagship Apple ecosystem solutions" },
  { label: "Applications Delivered", value: 20, suffix: "+", description: "Across App Store, TestFlight & Enterprise" },
  { label: "Users Served", value: 50, suffix: "M+", description: "Active monthly users on streaming platforms" },
  { label: "Enterprise Clients", value: 10, suffix: "+", description: "Global media, e-commerce & SaaS giants" },
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "library-management",
    title: "Library Management System",
    subtitle: "Cloud-Based Academic & Seat Booking Platform",
    description: "Cloud based library management platform with Student management, Attendance, QR Check In, Seat Booking, Subscription, Analytics, and Admin Dashboard.",
    fullDescription: "A comprehensive enterprise SaaS platform designed to modernize academic and private library operations. Features automated QR-code attendance verification, real-time seat reservation maps, automated subscription lifecycle management via webhooks, and executive dashboards with live occupancy heatmaps.",
    category: "Fullstack / Cloud",
    featured: true,
    url: "https://library.aiwazir.com/",
    tech: ["Flutter", "FastAPI", "Supabase", "Firebase", "Docker", "N8N"],
    keyFeatures: [
      "Real-time seat reservation matrix with interactive layout map",
      "Instant QR Code scanning for contactless check-in/check-out",
      "Subscription renewal workflows and automated invoice generation",
      "Executive analytics dashboard powered by FastAPI & Supabase",
      "Automated N8N notifications via SMS and WhatsApp API"
    ],
    metrics: "99.9% uptime with 10k+ daily student check-ins",
    role: "Fullstack Architect & Platform Developer"
  },
  {
    id: "ai-video-downloader",
    title: "AI Video Downloader",
    subtitle: "Next-Gen Multi-Platform Video Engine",
    description: "AI-powered multi-platform video downloader supporting YouTube and various social media platforms with fast processing and a modern web interface.",
    fullDescription: "An ultra-fast media retrieval service powered by Next.js and high-efficiency FFmpeg audio/video extraction pipelines. Processes ultra-high-definition 4K streams with real-time progress WebSocket streams and adaptive quality fallback.",
    category: "Fullstack / Cloud",
    featured: true,
    url: "https://downloader.nirajpaul.com/",
    tech: ["Next.js", "React", "Node.js", "FFmpeg", "Docker"],
    keyFeatures: [
      "Multi-resolution 4K/1080p video extraction pipeline",
      "Real-time WebSocket conversion progress indicator",
      "Intelligent link parser supporting 50+ media providers",
      "Dockerized microservice deployment with autoscaling",
      "Clean glassmorphism dashboard UI with zero intrusive ads"
    ],
    metrics: "Processed 100k+ video streams with sub-3s initiation time",
    role: "Lead Creator & Fullstack Developer"
  },
  {
    id: "ott-streaming-tvos",
    title: "OTT Streaming App",
    subtitle: "Flagship Apple TV & iOS Video Platform",
    description: "Apple TV streaming application built using Swift, SwiftUI, AVPlayer, HLS, Analytics, DRM, Server Side Ads, and Client Side Ads.",
    fullDescription: "A broadcast-grade video streaming engine designed for low-latency live events and vast VOD content catalogs. Custom player overlay built on AVPlayer with instant bitrate switching, multi-audio track selection, dynamic subtitle positioning, FairPlay DRM protection, and Google IMA client/server ad insertion (CSAI/SSAI).",
    category: "OTT Streaming",
    featured: true,
    tech: ["Swift", "SwiftUI", "tvOS", "AVPlayer", "HLS", "Analytics", "DRM", "Server Side Ads", "Client Side Ads"],
    keyFeatures: [
      "Custom AVPlayer overlay with smooth scrubbing and chapter markers",
      "Low-Latency HLS live playback with adaptive bitrate (ABR) optimization",
      "Seamless integration of FairPlay DRM for encrypted streams",
      "Dynamic ad insertion support (SSAI & CSAI) with zero buffer stutter",
      "Tailored tvOS remote focus engine with fluid 60fps animations"
    ],
    metrics: "Scaled to 5M+ concurrent stream sessions with <0.5% playback error rate",
    role: "Principal iOS / tvOS Architect"
  },
  {
    id: "ecommerce-fabindia-purplle",
    title: "E-Commerce Applications",
    subtitle: "Fabindia & Purplle Flagship Apps",
    description: "High-conversion e-commerce apps for Fabindia and Purplle featuring Payment Gateway integration, Wishlist, Search, and MVVM architecture.",
    fullDescription: "Architected modular iOS e-commerce applications serving millions of active shoppers. Built with reactive MVVM architecture, Combine data pipelines, custom UI components, seamless payment gateway SDKs (Razorpay/Stripe), intelligent product recommendations, and CoreData offline cart caching.",
    category: "E-Commerce",
    featured: true,
    tech: ["Swift", "UIKit", "SwiftUI", "MVVM", "Combine", "Payment Gateway", "Wishlist", "Search"],
    keyFeatures: [
      "Sub-second checkout flow with biometric & quick payment integration",
      "Instant faceted search engine with offline history caching",
      "Custom smooth swipeable product gallery with pinch-to-zoom",
      "Modular feature flags & dynamic home feed layout engine",
      "Comprehensive unit test suite achieving 85%+ code coverage"
    ],
    metrics: "Boosted checkout conversion by 18% & reduced crash rate to <0.02%",
    role: "Senior iOS Engineer & Team Lead"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "iOS & Swift Ecosystem",
    iconName: "Apple",
    skills: [
      { name: "Swift", level: 98, highlight: true, category: "Core" },
      { name: "SwiftUI", level: 95, highlight: true, category: "Core" },
      { name: "UIKit", level: 95, highlight: true, category: "Core" },
      { name: "Objective-C", level: 85, highlight: false, category: "Core" },
      { name: "tvOS", level: 92, highlight: true, category: "Core" },
      { name: "Combine", level: 92, highlight: true, category: "Core" }
    ]
  },
  {
    title: "Video Streaming & Media",
    iconName: "Tv",
    skills: [
      { name: "AVPlayer", level: 96, highlight: true, category: "Streaming" },
      { name: "HLS", level: 94, highlight: true, category: "Streaming" },
      { name: "WebRTC", level: 82, highlight: false, category: "Streaming" },
      { name: "Socket.io", level: 86, highlight: false, category: "Streaming" },
      { name: "Firebase", level: 88, highlight: false, category: "Streaming" }
    ]
  },
  {
    title: "Architecture & Data",
    iconName: "Layers",
    skills: [
      { name: "MVVM", level: 96, highlight: true, category: "Architecture" },
      { name: "CoreData", level: 90, highlight: false, category: "Architecture" },
      { name: "Realm", level: 88, highlight: false, category: "Architecture" },
      { name: "SPM", level: 92, highlight: true, category: "Architecture" },
      { name: "CocoaPods", level: 90, highlight: false, category: "Architecture" }
    ]
  },
  {
    title: "DevOps & Quality",
    iconName: "Cpu",
    skills: [
      { name: "GitHub Actions", level: 90, highlight: true, category: "DevOps" },
      { name: "Fastlane", level: 92, highlight: true, category: "DevOps" },
      { name: "Git", level: 95, highlight: false, category: "DevOps" },
      { name: "XCTest", level: 88, highlight: true, category: "DevOps" }
    ]
  }
];

export const WORK_EXPERIENCES: Experience[] = [
  {
    id: "tegna",
    company: "Tegna",
    role: "Senior iOS Engineer",
    location: "US Broadcast / Remote",
    period: "2023 - Present",
    duration: "3+ Years",
    description: "Leading core iOS and tvOS broadcast media streaming features for 64+ local TV stations in the US, powering live news broadcasts and video-on-demand.",
    achievements: [
      "Engineered low-latency live streaming integration powering millions of daily news viewers.",
      "Optimized tvOS remote navigation experience, cutting UI frame drops to 0%.",
      "Implemented dynamic server-side ad insertion (SSAI) increasing ad revenue yield by 22%.",
      "Automated TestFlight & App Store submission workflows using Fastlane and GitHub Actions."
    ],
    techStack: ["Swift", "SwiftUI", "tvOS", "AVPlayer", "HLS", "Combine", "Fastlane", "XCTest"],
    logo: "TG"
  },
  {
    id: "sonyliv",
    company: "SonyLIV",
    role: "Lead Video & iOS Architect",
    location: "Bangalore, India",
    period: "2020 - 2023",
    duration: "3 Years",
    description: "Architected the primary video streaming engine and iOS/tvOS playback pipeline for one of South Asia's largest OTT streaming platforms.",
    achievements: [
      "Built custom AVPlayer streaming pipeline supporting 4K HDR playback and FairPlay DRM.",
      "Spearheaded live sports event scaling (Cricket World Cup) handling peak concurrency of 10M+ stream requests.",
      "Reduced video start time (time-to-first-frame) by 45% through aggressive segment prefetching.",
      "Mentored a team of 8 iOS engineers in MVVM Clean Architecture and reactive Combine patterns."
    ],
    techStack: ["Swift", "UIKit", "AVPlayer", "HLS", "Combine", "CoreData", "XCTest"],
    logo: "SL"
  },
  {
    id: "purplle",
    company: "Purplle",
    role: "Senior Mobile Engineer",
    location: "Bangalore, India",
    period: "2017 - 2020",
    duration: "3 Years",
    description: "Engineered core e-commerce shopping features, real-time beauty recommendation engines, and high-conversion checkout flows.",
    achievements: [
      "Re-architected legacy objective-c shopping cart to reactive Swift MVVM flow.",
      "Integrated 1-tap Razorpay & Apple Pay checkout, elevating conversion rate by 15%.",
      "Implemented CoreData persistent offline wishlist and intelligent search history cache.",
      "Integrated Firebase Analytics & Crashlytics, reducing app crashes to below 0.01%."
    ],
    techStack: ["Swift", "Objective-C", "UIKit", "Firebase", "CoreData", "MVVM"],
    logo: "PU"
  },
  {
    id: "fabindia",
    company: "Fabindia",
    role: "Lead iOS Developer",
    location: "Bangalore, India",
    period: "2014 - 2017",
    duration: "3 Years",
    description: "Developed the flagship retail e-commerce iOS app for India's iconic artisanal lifestyle brand from scratch.",
    achievements: [
      "Designed and launched the initial version of the Fabindia iOS App on the App Store.",
      "Implemented smooth fluid product catalog swipe animations using custom UICollectionView layouts.",
      "Built offline product catalog caching for in-store retail associate lookups.",
      "Achieved 4.8 star average rating on the Apple App Store."
    ],
    techStack: ["Objective-C", "Swift", "UIKit", "CoreData", "CocoaPods"],
    logo: "FI"
  }
];

export const ARTICLES: Article[] = [
  {
    id: "swiftui-avplayer-mastery",
    title: "Mastering AVPlayer in SwiftUI & tvOS for Enterprise OTT",
    excerpt: "A deep dive into wrapping AVPlayer with SwiftUI, handling focus engines in tvOS, HLS adaptive stream switching, and preventing memory leaks in video players.",
    date: "July 2026",
    readTime: "8 min read",
    topic: "SwiftUI",
    tags: ["SwiftUI", "AVPlayer", "tvOS", "HLS"],
    content: `Building enterprise-grade video streaming applications on iOS and tvOS requires going far beyond basic VideoPlayer wrappers. In high-stakes OTT platforms like SonyLIV or Tegna, user expectations demand instantaneous startup times, smooth bitrate adaptation, seamless ad transitions, and strict DRM compliance.

### 1. The Custom UIViewControllerRepresentable Wrapper
While SwiftUI offers a native VideoPlayer, enterprise apps require raw access to AVPlayerViewController and underlying AVPlayerItem observers to capture scrub events, buffer status, and custom overlays.

\`\`\`swift
struct CustomVideoPlayerView: UIViewControllerRepresentable {
    let player: AVPlayer
    
    func makeUIViewController(context: Context) -> AVPlayerViewController {
        let controller = AVPlayerViewController()
        controller.player = player
        controller.showsPlaybackControls = false // Custom overlay handling
        return controller
    }
    
    func updateUIViewController(_ controller: AVPlayerViewController, context: Context) {}
}
\`\`\`

### 2. Eliminating Memory Leaks with Time Observers
One of the most common memory leak sources in AVPlayer applications is failing to properly remove periodic time observers when tearing down views. Always store observer tokens and explicitly release them in onDisappear or deinit.

### 3. Smooth tvOS Focus Engine Integration
In tvOS, remote interaction relies heavily on spatial focus. Custom scrub bars must leverage focusable() modifiers and respond to onMove gestures while keeping player rendering on dedicated metal layers.`
  },
  {
    id: "swift-concurrency-clean-architecture",
    title: "Clean MVVM Architecture with Swift Async/Await & Combine",
    excerpt: "How to combine AsyncSequences, Actors, and Combine publishers for decoupled, ultra-testable iOS application architecture.",
    date: "May 2026",
    readTime: "6 min read",
    topic: "Architecture",
    tags: ["Swift", "Concurrency", "MVVM", "Combine"],
    content: `Modern iOS development demands clear separation of concerns, strict thread isolation, and predictable state transitions.

### Key Architectural Pillars:
1. **Domain Entities & Protocol Repositories**: Data access is always hidden behind async protocol abstractions.
2. **MainActor ViewModel Isolation**: UI state variables annotated with @MainActor to eliminate main thread warnings.
3. **Actor-Based In-Memory Cache**: Thread-safe memory caching using Swift actor types instead of manual lock primitives.

\`\`\`swift
actor MediaCacheManager {
    private var cache: [URL: Data] = [:]
    
    func data(for url: URL) -> Data? {
        return cache[url]
    }
    
    func insert(_ data: Data, for url: URL) {
        cache[url] = data
    }
}
\`\`\``
  },
  {
    id: "wwdc-2026-ios-insights",
    title: "WWDC Highlights & What Every Senior iOS Developer Needs to Know",
    excerpt: "Key takeaways from Apple's latest platform APIs, performance enhancements in SwiftUI, and new Swift 6 concurrency models.",
    date: "June 2026",
    readTime: "5 min read",
    topic: "WWDC",
    tags: ["WWDC", "SwiftUI", "Performance", "Concurrency"],
    content: `Apple's latest developer tools introduce groundbreaking improvements for enterprise apps. Strict concurrency checking in Swift 6 ensures data race safety at compile time, while new SwiftUI layout primitives eliminate manual frame calculations for complex grid structures.`
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Alex Rivera",
    role: "VP of Engineering",
    company: "Tegna Media",
    avatar: "AR",
    text: "Niraj's deep expertise in AVFoundation and tvOS video pipelines transformed our streaming apps. He delivered zero-lag live playback for millions of concurrent viewers and brought exceptional architectural discipline to the team.",
    relationship: "Managed Niraj directly at Tegna"
  },
  {
    id: "2",
    name: "Vikram Malhotra",
    role: "Director of Product",
    company: "SonyLIV",
    avatar: "VM",
    text: "Working with Niraj during high-concurrency sporting events was a masterclass in calm engineering leadership. His optimizations cut video startup times in half and raised our playback reliability to enterprise standards.",
    relationship: "Collaborated on SonyLIV OTT Platform"
  },
  {
    id: "3",
    name: "Ananya Sharma",
    role: "Head of Mobile Technology",
    company: "Purplle",
    avatar: "AS",
    text: "Niraj is one of those rare senior engineers who combines deep low-level iOS knowledge with a fanatic focus on user experience and checkout metrics. He revolutionized our shopping cart performance.",
    relationship: "Lead Engineer peer at Purplle"
  }
];

export const TERMINAL_COMMANDS: Record<string, string> = {
  help: `Available commands:
  - bio         : Print Niraj's background & intro
  - skills      : List technical specializations
  - experience  : Print company employment timeline
  - projects    : Show flagship projects
  - contact     : Display contact channels
  - clear       : Clear terminal screen`,
  bio: `Niraj Paul | Senior iOS Developer (11+ Years)
Location: Bangalore, India
Specialization: iOS, Swift, SwiftUI, tvOS, OTT Streaming Apps, Video Streaming, AVPlayer, HLS, MVVM, Combine, UIKit.
Intro: "I build high-performance iOS and Apple TV applications used by millions of users worldwide. I specialize in OTT Streaming, SwiftUI, scalable architectures, and premium user experiences."`,
  skills: `Primary Skills & Stack:
  • Apple: Swift, SwiftUI, UIKit, tvOS, Objective-C
  • Media: AVPlayer, HLS, WebRTC, Socket.io
  • Architecture: MVVM, Combine, CoreData, Realm
  • DevOps/Tools: Fastlane, GitHub Actions, Git, XCTest, SPM, CocoaPods`,
  experience: `Work Timeline:
  [2023 - Present] Tegna (Senior iOS Engineer) - US Broadcast & OTT Streaming
  [2020 - 2023] SonyLIV (Lead Video & iOS Architect) - OTT Streaming for Millions
  [2017 - 2020] Purplle (Senior Mobile Engineer) - High-Conversion E-Commerce App
  [2014 - 2017] Fabindia (Lead iOS Developer) - Iconic Retail iOS App`,
  projects: `Featured Projects:
  1. Library Management System (https://library.aiwazir.com/)
  2. AI Video Downloader (https://downloader.nirajpaul.com/)
  3. Enterprise OTT Streaming App (Apple TV & iOS)
  4. Fabindia & Purplle E-Commerce Apps`,
  contact: `Contact Channels:
  Email: nirajpaul.dev@gmail.com
  LinkedIn: https://www.linkedin.com/in/nirajpaul
  GitHub: https://github.com/nirajpaul
  Location: Bangalore, India`
};
