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
  youtubeUrl?: string;
  youtubeId?: string;
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
  mediumUrl?: string;
}

export const PERSONAL_DATA = {
  name: "Niraj Paul",
  title: "Senior iOS Developer",
  roleTagline: "Specializing in OTT Streaming, SwiftUI, tvOS & High-Performance Apple Architectures",
  experienceYears: "11+",
  location: "Bangalore, India",
  email: "nirajpaul.ios@gmail.com",
  github: "https://github.com/Nirajpaul2",
  linkedin: "https://www.linkedin.com/in/niraj-paul-8782ab143",
  mediumUrl: "https://medium.com/@nirajpaul2",
  resumeUrl: "https://drive.google.com/file/d/1jn_iu_X9TBHHMoi4lULB-JAtrZWYdJom/view?usp=sharing",
  shortIntro: "I build high-performance iOS and Apple TV applications used by millions of users worldwide. I specialize in OTT Streaming, SwiftUI, scalable architectures, and premium user experiences.",
  detailedBio: `With over 11 years of engineering excellence in the Apple ecosystem, I architect and build enterprise-scale iOS and tvOS applications. Having delivered core video playback engines and high-traffic streaming features for major media platforms like SonyLIV and Tegna, as well as high-conversion e-commerce apps for Fabindia and Purplle, I bridge deep low-level AVFoundation/HLS video pipeline optimization with elegant SwiftUI visual design.`,
  companies: [
    { name: "Tegna Inc. (Wipro)", role: "Senior iOS Developer (Contract)", description: "US News & OTT Broadcasting Platform (KING 5, WBIR, 9News)" },
    { name: "Sony Pictures Network (SonyLIV)", role: "Senior iOS Developer", description: "Enterprise OTT Video Streaming Platform" },
    { name: "Purplle.com", role: "Senior iOS Developer", description: "Beauty E-Commerce App serving millions" },
    { name: "Fabindia", role: "Senior iOS Developer", description: "Flagship Retail & Lifestyle Mobile App" },
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
    youtubeUrl: "https://www.youtube.com/watch?v=g71VOFjvJhk",
    youtubeId: "g71VOFjvJhk",
    tech: ["Flutter", "FastAPI", "Supabase", "Firebase", "Razorpay", "Docker", "N8N"],
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
    image: "/images/ai_downloader_screenshot.jpg",
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
    role: "Senior iOS Developer"
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
    role: "Senior iOS Developer"
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
      { name: "Git", level: 95, highlight: false, category: "DevOps" },
      { name: "XCTest", level: 88, highlight: true, category: "DevOps" }
    ]
  }
];

export const WORK_EXPERIENCES: Experience[] = [
  {
    id: "tegna",
    company: "Wipro Limited (Client: Tegna Inc.)",
    role: "Senior iOS Developer (Contract)",
    location: "US Broadcast / Remote / Bangalore",
    period: "May 2025 – March 2026",
    duration: "10 Months",
    description: "Architected and developed high-performance iOS and AppleTV (tvOS) OTT media streaming applications from scratch using Swift and SwiftUI, delivering content to millions of active viewers (KING 5 NEWS, WBIR, 9News).",
    achievements: [
      "Architected and developed high-performance iOS and tvOS OTT streaming news apps from scratch.",
      "Successfully launched three major regional news streaming apps: KING 5 NEWS, WBIR, and 9News.",
      "Integrated and optimized AVPlayer with HTTP Live Streaming (HLS) supporting client-side and server-side DAI.",
      "Implemented analytics and compliance SDKs including NPAW, Comscore, RudderStack, and OneTrust."
    ],
    techStack: ["Swift", "SwiftUI", "tvOS", "AVPlayer", "HLS", "Combine", "XCTest"],
    logo: "TG"
  },
  {
    id: "neosoft",
    company: "NeoSoft Technology",
    role: "Senior iOS Developer",
    location: "Bangalore, India",
    period: "June 2021 – April 2025",
    duration: "3 Yrs 11 Mos",
    description: "Worked as a Senior Developer collaborating with key clients (Sony Pictures Network / SonyLIV, purplle.com, Fabindia) to build and scale flagship iOS and tvOS apps.",
    achievements: [
      "Sony Pictures Network: Built and maintained SonyLIV AppleTV app in Swift and SwiftUI, reducing content load time by 20%.",
      "purplle.com: Enhanced shopping and checkout flows with Juspay payment SDK, reducing cart abandonment by 30%.",
      "Fabindia: Architected core retail features using MVVM and Combine for catalog updates, search, and wishlists.",
      "Shipped modular reusable components, decreasing feature cycle time by 30% and hardening application security."
    ],
    techStack: ["Swift", "SwiftUI", "UIKit", "tvOS", "AVPlayer", "HLS", "Combine", "CoreData"],
    logo: "NS"
  },
  {
    id: "sakha-global",
    company: "Sakha Global (Client: Spectra Logic)",
    role: "Senior iOS Developer",
    location: "Bangalore, India",
    period: "October 2020 – June 2021",
    duration: "9 Months",
    description: "Engineered the SpectraLogix application, building custom UI components, advanced animations, and conducting feasibility reviews.",
    achievements: [
      "Engineered SpectraLogix app with custom UI components and advanced fluid layout animations.",
      "Decreased customer UI complaints by conducting UX/UI feasibility reviews.",
      "Implemented XCTest unit tests, resolved memory leaks, and optimized CPU usage with Xcode Instruments."
    ],
    techStack: ["Swift", "UIKit", "XCTest", "Instruments", "MVVM"],
    logo: "SG"
  },
  {
    id: "aquarious",
    company: "Aquarious Technology",
    role: "Senior iOS Developer",
    location: "Bangalore, India",
    period: "June 2017 – July 2020",
    duration: "3 Yrs 2 Mos",
    description: "Led delivery of 5 distinct crowdsourced geofencing apps (See it, Say it, Send it, The Pet Detective, ToDone, Take Stock in Children, S3 Law Enforcement).",
    achievements: [
      "Integrated CoreLocation-based geofencing to trigger real-time dispatch of emergency media to police centers.",
      "Implemented Face ID / Touch ID biometric authentication and secure Keychain storage across 5 apps.",
      "Mentored junior developers and introduced code review pipelines, consistently delivering ahead of schedule."
    ],
    techStack: ["Swift", "UIKit", "CoreLocation", "Face ID", "Keychain"],
    logo: "AT"
  },
  {
    id: "unified-infotech",
    company: "Unified Infotech",
    role: "iOS Developer",
    location: "Bangalore, India",
    period: "December 2016 – April 2017",
    duration: "5 Months",
    description: "Built and maintained customer-facing iOS applications using Swift and UIKit with adaptive Auto Layout interfaces.",
    achievements: [
      "Built and maintained customer-facing iOS applications using Swift and UIKit.",
      "Designed responsive, adaptive interfaces using Auto Layout and Size Classes across all device orientations."
    ],
    techStack: ["Swift", "UIKit", "Auto Layout"],
    logo: "UI"
  },
  {
    id: "brainium",
    company: "Brainium Information Technologies",
    role: "iOS Developer",
    location: "Bangalore, India",
    period: "January 2016 – December 2016",
    duration: "1 Year",
    description: "Developed and optimized consumer applications utilizing Swift, Objective-C, and UIKit.",
    achievements: [
      "Developed consumer applications using Swift, Objective-C, and UIKit.",
      "Worked on UI design execution, REST API integration, and debugging complex multithreading issues."
    ],
    techStack: ["Swift", "Objective-C", "UIKit", "REST API"],
    logo: "BI"
  },
  {
    id: "webtech",
    company: "WebTech Software Solution",
    role: "Junior iOS Developer",
    location: "Bangalore, India",
    period: "November 2014 – December 2015",
    duration: "1 Yr 2 Mos",
    description: "Programmed custom user interfaces programmatically and integrated REST APIs using Objective-C.",
    achievements: [
      "Programmed custom user interfaces programmatically using Objective-C.",
      "Maintained legacy applications, resolving memory leaks and updating layouts for newer iOS versions."
    ],
    techStack: ["Objective-C", "UIKit", "REST API"],
    logo: "WT"
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
    mediumUrl: "https://medium.com/@nirajpaul2",
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
    mediumUrl: "https://medium.com/@nirajpaul2",
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
    mediumUrl: "https://medium.com/@nirajpaul2",
    content: `Apple's latest developer tools introduce groundbreaking improvements for enterprise apps. Strict concurrency checking in Swift 6 ensures data race safety at compile time, while new SwiftUI layout primitives eliminate manual frame calculations for complex grid structures.`
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
  • DevOps/Tools: GitHub Actions, Git, XCTest, SPM, CocoaPods`,
  experience: `Work Timeline:
  [May 2025 - Mar 2026] Wipro (Tegna Inc. Client) - Senior iOS Developer (10 Months)
  [Jun 2021 - Apr 2025] NeoSoft (SonyLIV, Purplle, Fabindia) - Senior iOS Developer
  [Oct 2020 - Jun 2021] Sakha Global (Spectra Logic) - Senior iOS Developer
  [Jun 2017 - Jul 2020] Aquarious Technology - Senior iOS Developer`,
  projects: `Featured Projects:
  1. Library Management System (https://library.aiwazir.com/)
  2. AI Video Downloader (https://downloader.nirajpaul.com/)
  3. Enterprise OTT Streaming App (Apple TV & iOS)
  4. Fabindia & Purplle E-Commerce Apps`,
  contact: `Contact Channels:
  Email: nirajpaul.ios@gmail.com
  LinkedIn: https://www.linkedin.com/in/niraj-paul-8782ab143
  GitHub: https://github.com/Nirajpaul2
  Location: Bangalore, India`
};
