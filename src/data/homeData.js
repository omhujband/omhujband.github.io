export const homeData = {
  hero: {
    headline: "Curiosity is usually where my projects begin.",
    subHeadline: "Turning unusual ideas into working products.",
    description: "Engineering student focused on building products, experiments, and thoughtful software solutions through engineering-first thinking.",
  },
  featuredWork: [
    {
      id: "thinkmate",
      title: "ThinkMate",
      summary: "Offline AI study companion.",
      tags: ["Flutter", "AI", "RAG", "On-device ML"],
      problem: "Students rely on cloud-based AI tools that require internet access and expose study materials to third-party services, making private and offline learning difficult.",
      approach: "Built an entirely on-device AI learning system combining local PDF indexing, retrieval-augmented document grounding, speech-to-text, text-to-speech, and LLM inference without requiring external APIs.",
      result: "Created a privacy-first study companion capable of generating explanations, quizzes, and voice-based interactions directly from uploaded learning materials while operating completely offline.",
    },
    {
      id: "aeronav",
      title: "AeroNav",
      summary: "Touchless Android navigation using real-time hand gestures.",
      tags: ["Computer Vision", "Kotlin", "Android", "HCI"],
      problem: "Modern smartphones depend almost entirely on touch input, limiting accessibility and preventing seamless interaction when physical contact is inconvenient.",
      approach: "Developed a real-time computer vision pipeline that tracks hand landmarks through the device camera and translates gestures into cursor movement, clicks, scrolling, and navigation actions.",
      result: "Produced a fully functional touchless navigation system that enables users to interact with Android applications using only hand movements and gestures.",
    }
  ],
  interests: [
    {
      id: "systems-thinking",
      title: "Systems Thinking",
      icon: "psychology",
      description: "Architecture & Scale",
      cols: 1,
    },
    {
      id: "computer-vision",
      title: "Computer Vision",
      icon: "visibility",
      description: "Real-time tracking / Gesture Recognition",
      cols: 2,
    },
    {
      id: "hci",
      title: "Human-Computer Interaction",
      icon: "touch_app",
      description: "Bridging the gap between physical intent and digital execution.",
      cols: 2,
    },
    {
      id: "rag",
      title: "Natural Language Processing",
      icon: "flowchart",
      description: "Retrieval-Augmented Generation (RAG) / Large Language Models (LLMs)",
      cols: 1,
    }
  ],
  contact: {
    title: "Have an interesting idea?",
    subtitle: "Let's build it.",
    description: "Currently open for internships and collaborative experiments. If you're working on something difficult, I'd love to hear about it.",
    email: "omhujband292@gmail.com",
    socials: [
      {
        id: "github",
        iconHtml: `<span style="display: inline-flex; align-items: center; justify-content: center; color: white; padding: 4px; border-radius: 7px;"><svg viewBox="0 0 24 24" style="width: 24px; height: 24px; fill: currentColor;"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg></span>`,
        url: "https://github.com/omhujband",
        name: "GitHub"
      },
      {
        id: "linkedin",
        iconHtml: `<span style="color: white; font-family: sans-serif; font-weight: bold; padding: 2px 6px; border-radius: 3px; font-size: 20px;">in</span>`,
        url: "https://www.linkedin.com/in/om-hujband-54b4b6279/",
        name: "LinkedIn"
      },
      {
        id: "instagram",
        iconHtml: `<span style="display: inline-flex; align-items: center; justify-content: center; color: white; padding: 4px; border-radius: 3px;"><svg viewBox="0 0 24 24" style="width: 24px; height: 24px; fill: currentColor;"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg></span>`,
        url: "https://www.instagram.com/_om9306_",
        name: "Instagram"
      }
    ]
  }
};
