export const projectsData = [
  {
    id: "thinkmate",
    title: "ThinkMate",
    subtitle: "Offline AI study companion powered by local document understanding.",
    problem: "Students rely on cloud-based AI tools that require internet access and expose study materials to third-party services, making private and offline learning difficult.",
    approach: "Built an entirely on-device AI learning system combining local PDF indexing, retrieval-augmented document grounding, speech-to-text, text-to-speech, and LLM inference without requiring external APIs..",
    result: "Created a privacy-first study companion capable of generating explanations, quizzes, and voice-based interactions directly from uploaded learning materials while operating completely offline.",
    tags: ["Flutter", "AI", "RAG", "On-device ML"]
  },
  {
    id: "aeronav",
    title: "AeroNav",
    subtitle: "Touchless Android navigation using real-time hand gestures.",
    problem: "Modern smartphones depend almost entirely on touch input, limiting accessibility and preventing seamless interaction when physical contact is inconvenient.",
    approach: "Developed a real-time computer vision pipeline that tracks hand landmarks through the device camera and translates gestures into cursor movement, clicks, scrolling, and navigation actions.",
    result: "Produced a fully functional touchless navigation system that enables users to interact with Android applications using only hand movements and gestures.",
    tags: ["Computer Vision", "Kotlin", "Android", "HCL"]
  },
  {
    id: "zerotrace",
    title: "ZeroTrace",
    subtitle: "Privacy-focused secure file destruction for Android devices.",
    problem: "Standard file deletion removes references to data but often leaves recoverable information on storage media, creating privacy and security risks.",
    approach: "Implemented multiple secure overwrite strategies, including cryptographically secure random passes and DoD-inspired multi-pass wiping, using Flutter, Kotlin platform channels, and low-level filesystem operations.",
    result: "Built an offline-first utility capable of permanently destroying sensitive files while generating verifiable PDF certificates documenting wipe operations and integrity metadata.",
    tags: ["Flutter", "Kotlin", "Security", "File Shredding", "File Systems"]
  },
  {
    id: "pollpulse",
    title: "PollPulse",
    subtitle: "Real-time polling platform for audience engagement and live feedback.",
    problem: "Traditional polling systems often lack instant synchronization, making it difficult to collect and visualize live audience feedback during events, classrooms, or discussions.",
    approach: "Built a Firebase-powered polling platform using Provider-based state management, real-time Firestore synchronization, authentication workflows, and live chart-based visualizations.",
    result: "Delivered a cross-platform polling experience enabling users to create, share, manage, and monitor live polls with real-time result updates and administrative controls.",
    tags: ["Flutter", "Firebase", "Realtime system", "State Management"]
  },
  {
    id: "solar-folio",
    title: "Solar-folio",
    subtitle: "Interactive 3D portfolio presented as an explorable solar system.",
    problem: "Most portfolios are static collections of information that fail to communicate personality, curiosity, or the journey behind professional growth.",
    approach: "Designed a narrative-driven 3D experience using React, Three.js, React Three Fiber, and GSAP, transforming portfolio sections into navigable celestial bodies within a simulated solar system.",
    result: "Created an immersive portfolio experience that blends technical execution, scientific visualization, and storytelling while encouraging exploration rather than passive browsing.",
    tags: ["React", "Three.js", "3D Graphics", "Creative Engineering"],
    featured: true
  }
];
