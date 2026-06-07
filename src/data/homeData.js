export const homeData = {
  hero: {
    headline: "Curiosity is usually where my projects begin.",
    subHeadline: "Turning unusual ideas into working products.",
    description: "Engineering student focused on building products, experiments, and thoughtful software solutions through engineering-first thinking.",
  },
  featuredWork: [
    {
      id: "neural-linker",
      title: "Neural Linker",
      summary: "Real-time semantic graph visualization tool.",
      tags: ["React", "WebGL", "Python"],
      problem: "Visualizing 100k+ nodes in browser caused extreme lag and memory leaks during data manipulation.",
      approach: "Implemented custom WebGL shaders and an off-screen worker for physics calculations to offload main thread.",
      result: "Smooth 60fps rendering up to 250k nodes with a 40% reduction in baseline memory usage.",
    },
    {
      id: "echo-protocol",
      title: "Echo Protocol",
      summary: "Decentralized peer-to-peer syncing engine.",
      tags: ["Rust", "WebRTC", "CRDTs"],
      problem: "Standard conflict resolution in collaborative text editing was failing under high-latency network conditions.",
      approach: "Built a custom Conflict-free Replicated Data Type (CRDT) engine in Rust, compiled to WebAssembly for client-side speed.",
      result: "Zero data loss guarantees with perceived latency reduced to near-instant local execution times.",
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
      description: "OpenCV / PyTorch / Real-time tracking",
      cols: 2,
    },
    {
      id: "hci",
      title: "Human-Computer Interaction",
      icon: "touch_app",
      description: "Bridging the gap between physical intent and digital execution.",
      cols: 3,
    }
  ],
  contact: {
    title: "Have an interesting idea?",
    subtitle: "Let's build it.",
    description: "Currently open for internships and collaborative experiments. If you're working on something difficult, I'd love to hear about it.",
    email: "hello@thoughtfulengineer.dev",
    socials: [
      { id: "github", icon: "code", url: "#", name: "GitHub" },
      { id: "linkedin", icon: "work", url: "#", name: "LinkedIn" },
      { id: "instagram", icon: "photo_camera", url: "#", name: "Instagram" },
    ]
  }
};
