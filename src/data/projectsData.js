export const projectsData = [
  {
    id: "thinkmate",
    displayId: "PROJECT_01",
    title: "ThinkMate",
    status: "Complete",
    category: "AI Learning Systems",
    subtitle: "Offline AI study companion powered by local document understanding.",
    problem: "Students rely on cloud-based AI tools that require internet access and expose study materials to third-party services, making private and offline learning difficult.",
    approach: "Built an entirely on-device AI learning system combining local PDF indexing, retrieval-augmented document grounding, speech-to-text, text-to-speech, and LLM inference without requiring external APIs.",
    result: "Created a privacy-first study companion capable of generating explanations, quizzes, and voice-based interactions directly from uploaded learning materials while operating completely offline.",
    tags: ["Flutter", "AI", "RAG", "On-device ML"],
    demoUrl: "https://youtube.com/embed/G3_gMm9wz_8",
    demoDescription: "A privacy-first AI study companion capable of understanding PDFs, generating quizzes, and answering questions entirely on-device.",
    technicalSnapshot: [
      "On-Device Inference",
      "Retrieval-Augmented Generation",
      "Speech Processing"
    ],
    primaryAction: { label: "GitHub Repository", url: "https://github.com/omhujband/ThinkMate" },
    secondaryAction: { label: "Download APK", url: "https://github.com/omhujband/ThinkMate/releases/download/v1.0.0/ThinkMate.apk" }
  },
  {
    id: "aeronav",
    displayId: "PROJECT_02",
    title: "AeroNav",
    status: "Experimental",
    category: "Human Computer Interaction",
    subtitle: "Touchless Android navigation using real-time hand gestures.",
    problem: "Modern smartphones depend almost entirely on touch input, limiting accessibility and preventing seamless interaction when physical contact is inconvenient.",
    approach: "Developed a real-time computer vision pipeline that tracks hand landmarks through the device camera and translates gestures into cursor movement, clicks, scrolling, and navigation actions.",
    result: "Produced a fully functional touchless navigation system that enables users to interact with Android applications using only hand movements and gestures.",
    tags: ["Computer Vision", "Kotlin", "Android", "HCI"],
    demoUrl: "https://youtube.com/embed/md4_aT_MG1M",
    demoDescription: "A touchless Android navigation system powered by real-time hand tracking and gesture recognition.",
    technicalSnapshot: [
      "Gesture Recognition",
      "Real-Time Tracking",
      "Accessibility Interfaces"
    ],
    primaryAction: { label: "GitHub Repository", url: "https://github.com/omhujband/Aeronav" },
    secondaryAction: { label: "Download APK", url: "https://github.com/omhujband/Aeronav/releases/download/v1.0.0/AeroNav.apk" }
  },
  {
    id: "zerotrace",
    displayId: "PROJECT_03",
    title: "ZeroTrace",
    status: "Complete",
    category: "Security Engineering",
    subtitle: "Privacy-focused secure file destruction for Android devices.",
    problem: "Standard file deletion removes references to data but often leaves recoverable information on storage media, creating privacy and security risks.",
    approach: "Implemented multiple secure overwrite strategies, including cryptographically secure random passes and DoD-inspired multi-pass wiping, using Flutter, Kotlin platform channels, and low-level filesystem operations.",
    result: "Built an offline-first utility capable of permanently destroying sensitive files while generating verifiable PDF certificates documenting wipe operations and integrity metadata.",
    tags: ["Flutter", "Kotlin", "Security", "File Shredding", "File Systems"],
    // demoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
    demoDescription: "An offline-first utility that securely overwrites and permanently destroys sensitive files on Android.",
    technicalSnapshot: [
      "Secure File Destruction",
      "Filesystem Operations",
      "Data Privacy"
    ],
    primaryAction: { label: "GitHub Repository", url: "https://github.com/omhujband/Zerotrace" },
    secondaryAction: { label: "Download APK", url: "https://github.com/omhujband/ZeroTrace/releases/download/v2.2.0/ZeroTrace.apk" }
  },
  {
    id: "pollpulse",
    displayId: "PROJECT_04",
    title: "PollPulse",
    status: "Complete",
    category: "Real-Time Systems",
    subtitle: "Real-time polling platform for audience engagement and live feedback.",
    problem: "Traditional polling systems often lack instant synchronization, making it difficult to collect and visualize live audience feedback during events, classrooms, or discussions.",
    approach: "Built a Firebase-powered polling platform using Provider-based state management, real-time Firestore synchronization, authentication workflows, and live chart-based visualizations.",
    result: "Delivered a cross-platform polling experience enabling users to create, share, manage, and monitor live polls with real-time result updates and administrative controls.",
    tags: ["Flutter", "Firebase", "Realtime system", "State Management"],
    // demoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
    demoDescription: "A real-time polling platform with instant synchronization and chart visualizations.",
    technicalSnapshot: [
      "Real-Time Synchronization",
      "State Management",
      "Live Visualizations"
    ],
    primaryAction: { label: "GitHub Repository", url: "https://github.com/omhujband/PollPulse" },
    secondaryAction: { label: "Download APK", url: "https://github.com/omhujband/PollPulse/releases/download/v1.0.0/PollPulse.apk" }
  },
  {
    id: "solar-folio",
    displayId: "PROJECT_05",
    title: "Solar-folio",
    status: "Complete",
    category: "Creative Engineering",
    subtitle: "Interactive 3D portfolio presented as an explorable solar system.",
    problem: "Most portfolios are static collections of information that fail to communicate personality, curiosity, or the journey behind professional growth.",
    approach: "Designed a narrative-driven 3D experience using React, Three.js, React Three Fiber, and GSAP, transforming portfolio sections into navigable celestial bodies within a simulated solar system.",
    result: "Created an immersive portfolio experience that blends technical execution, scientific visualization, and storytelling while encouraging exploration rather than passive browsing.",
    tags: ["React", "Three.js", "3D Graphics", "Creative Engineering"],
    featured: true,
    // demoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
    demoDescription: "An interactive 3D portfolio experience built with Three.js and React.",
    technicalSnapshot: [
      "3D Scene Rendering",
      "WebGL Shaders",
      "Interactive Animations"
    ],
    primaryAction: { label: "GitHub Repository", url: "https://github.com/omhujband/Solar-folio" },
    secondaryAction: { label: "Launch Live Demo", url: "https://omhujband.github.io/Solar-folio/" }
  }
];
