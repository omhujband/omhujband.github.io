export const projectsData = [
  {
    id: "autonomous-drone",
    title: "Autonomous Drone Navigation",
    subtitle: "A low-latency visual SLAM implementation for indoor environments.",
    problem: "Navigating complex, GPS-denied warehouses required a system capable of real-time mapping and obstacle avoidance with strictly limited edge compute resources.",
    approach: "Implemented a custom C++ ROS node utilizing ORB-SLAM3, heavily optimized for an Nvidia Jetson Nano, prioritizing critical path execution.",
    result: "Achieved 30fps localization accuracy within 5cm, reducing collision incidents by 94% in simulated environments.",
    tags: ["C++", "ROS", "Computer Vision"]
  },
  {
    id: "distributed-kv",
    title: "Distributed Key-Value Store",
    subtitle: "A highly available, partition-tolerant database built from scratch.",
    problem: "Existing solutions were too heavyweight for a specific micro-services cluster that required rapid read times and high fault tolerance across erratic network conditions.",
    approach: "Developed in Go using the Raft consensus algorithm for leader election and log replication, coupled with an LSM-tree storage engine.",
    result: "Demonstrated 99.9% uptime during chaotic network partitioning tests, sustaining 10k reads/sec with sub-millisecond latency.",
    tags: ["Go", "Distributed Systems", "Raft"]
  },
  {
    id: "trading-engine",
    title: "Low-Latency Trading Engine",
    subtitle: "An experimental matching engine designed for minimal jitter.",
    problem: "Standard garbage-collected languages introduced unpredictable pauses, disrupting order execution critical for high-frequency strategies.",
    approach: "Built entirely in Rust to guarantee memory safety without GC overhead. Utilized lock-free data structures and kernel bypass networking (DPDK).",
    result: "Consistently processed limit orders with a median latency of 12 microseconds, eliminating latency spikes above 50 microseconds entirely.",
    tags: ["Rust", "Networking", "Concurrency"],
    featured: true // To span 2 cols like in HTML
  }
];
