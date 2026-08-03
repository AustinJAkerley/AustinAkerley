export type Experience = {
  company: string;
  team: string;
  role: string;
  start: string;
  end: string;
  product: string;
  bullets: { label: string; text: string }[];
};

export type Project = {
  number: number;
  name: string;
  tagline: string;
  description: string;
  // Tech stack tags shown on the project card.
  tags?: string[];
  // External link (e.g. a live site or repo). Optional when the project links
  // to a dedicated in-site page instead.
  url?: string;
  urlLabel?: string;
  // Additional external link, e.g. a store listing alongside the source repo.
  storeUrl?: string;
  storeUrlLabel?: string;
  // Hash route to a dedicated project page within this site.
  pageHash?: string;
  // Placeholder thumbnail shown on the timeline card.
  thumbnail?: string;
  // When true, the thumbnail is a portrait image shown to the right of the text.
  thumbnailPortrait?: boolean;
};

export type SpecCard = {
  category: string;
  name: string;
  detail: string;
  // TODO: replace placeholder with real product imagery when available.
  image?: string;
};

export type BuildStep = {
  step: string;
  title: string;
  text: string;
};

export type GalleryItem = {
  caption: string;
  // TODO: swap placeholder for a real photo (see /public/pc-build).
  image?: string;
};

export type PcBuild = {
  hash: string;
  name: string;
  tagline: string;
  intro: string;
  overview: {
    lead: string;
    reasons: { label: string; text: string }[];
    goals: string[];
  };
  hardware: SpecCard[];
  hardwareNote: string;
  buildProcess: BuildStep[];
  lessons: { label: string; text: string }[];
  gallery: GalleryItem[];
  highlights: string[];
  futureUpgrades: { label: string; text: string }[];
};

export type Education = {
  school: string;
  degree: string;
  field: string;
  note?: string;
  extras?: string[];
};

export const profile = {
  name: "Austin Akerley",
  title: "Builder, Student, & Dad",
  location: "Bellevue, WA",
  email: "austin.akerley+website@outlook.com",
  linkedin: "https://linkedin.com/in/AustinAkerley",
  linkedinLabel: "linkedin.com/in/AustinAkerley",
  tagline:
    "Cryptographer and systems builder. I make the machinery that guards the frontier and refuses to go down.",
  about:
    "I work on the hard, unglamorous parts of security: the cryptography, the " +
    "key infrastructure, the distributed systems that have to hold a thousand servers together without blinking. " +
    "Right now I design and scale Public Key Infrastructure on Microsoft's PKI team. Before that I wired Hardware " +
    "Security Modules into cloud key management, stood up secure cloud regions, and cut FPGA cyber components for " +
    "fighter jets at Microsoft, Oracle, and Lockheed Martin. The work I love is the same every time. Take a " +
    "complex, tangled problem, simplify it, and leave behind something automated, reliable, and honest.",
};

export const experiences: Experience[] = [
  {
    company: "Microsoft",
    team: "PKI Team",
    role: "Senior Software Engineer",
    start: "May 2025",
    end: "Current",
    product:
      "Tier-4 datacenters, the fortified backcountry that hosts Microsoft's Public Key Infrastructure (MSPKI), CodeSign, and Malware Scanning services.",
    bullets: [
      {
        label: "Primary Role",
        text: "I design and scale the PKI behind our core security services, and I harden the cryptography by rooting trust in TPMs instead of hope.",
      },
      {
        label: "Secondary Role",
        text: "Datacenter buildout, security, and upkeep. I ride herd on more than 1000 physical servers across three datacenters for the customers who can least afford a breach.",
      },
    ],
  },
  {
    company: "Oracle Cloud (OCI)",
    team: "KMS",
    role: "Software Engineer II",
    start: "Feb 2022",
    end: "May 2025",
    product:
      "Key Management Service (KMS), the cloud vault that guards the encryption keys everything else depends on.",
    bullets: [
      {
        label: "Primary Role",
        text: "I was the Hardware Security Module hand, writing the C and C++ that fused vendor HSM cards into the bedrock of trust under KMS. I led the orchestration of HSM changes across 500 bare-metal hosts without dropping a key.",
      },
      {
        label: "Secondary Role",
        text: "I implemented cryptographic algorithms for the KMS APIs in Java for a small-footprint dedicated cloud offering.",
      },
      {
        label: "Smaller Projects",
        text: "I built a Python tool that validates OCI alarm infrastructure. It is now a required step for standing up any new OCI cloud service.",
      },
    ],
  },
  {
    company: "Microsoft O365",
    team: "Teams",
    role: "Site Reliability Engineer II",
    start: "Nov 2020",
    end: "Feb 2022",
    product: "A dedicated government Azure cloud region, walled off from the rest of the world.",
    bullets: [
      {
        label: "Primary Role",
        text: "As an SRE I deployed the infrastructure and the application for MS Teams into two dedicated cloud regions, all of it by infrastructure as code and automation rather than by hand.",
      },
      {
        label: "Secondary Role",
        text: "I stood up the infrastructure and application for Azure DevOps pipelines inside the secure regions, and automated the repetitive work with Powershell and Python.",
      },
      {
        label: "Smaller Projects",
        text: "I debugged app and infrastructure fires across 73 micro-services and 15 teams, shipped region-specific fixes, and wrote the operational and onboarding docs that let the next person find their way.",
      },
    ],
  },
  {
    company: "Lockheed Martin Space",
    team: "Cyber",
    role: "Software Engineer",
    start: "May 2019",
    end: "Nov 2020",
    product:
      "A custom Network Interface Device (NID) built on a Xilinx System on Chip FPGA for the F-35 fighter jet.",
    bullets: [
      {
        label: "Primary Role",
        text: "I wrote the SystemVerilog for our primary FPGA cyber components, down at the level where the logic is the hardware.",
      },
      {
        label: "Secondary Role",
        text: "I built major features for our SoC kernel modules in C++.",
      },
    ],
  },
];

export const projectsChallenge = {
  title: "30 Projects in 45 Days",
  intro:
    "A private dare I made to myself: design, build, and ship 30 projects in 45 days. " +
    "There is one rule and it is unforgiving. Every project has to be published. Nothing counts " +
    "if it dies on localhost. Each one has to live out in the open on the internet, or exist as a " +
    "real, physical thing I can hold in my hands.",
  rule: "No localhost. Every project ships out into the open, on the internet or in the physical world.",
};

export const projects: Project[] = [
  {
    number: 1,
    name: "AustinAkerley.com",
    tagline: "This very website",
    description:
      "The site you are standing in. A responsive personal portfolio built with React, TypeScript, and Vite, " +
      "and published live on Azure Static Web Apps.",
    url: "https://austinakerley.com",
    urlLabel: "austinakerley.com",
  },
  {
    number: 2,
    name: "PDFDiff",
    tagline: "Chrome & browser extension",
    description:
      "A browser extension that lays two PDFs side by side and shows you exactly what changed, so you " +
      "never have to squint through two versions by hand again. Published and live as a browser extension.",
    url: "https://github.com/AustinJAkerley/PDFDiff",
    urlLabel: "github.com/AustinJAkerley/PDFDiff",
    storeUrl:
      "https://chromewebstore.google.com/detail/pdf-diff/pdcoegjagkinbanonmgcgmhefgjipjko",
    storeUrlLabel: "Chrome Web Store",
  },
  {
    number: 3,
    name: "Custom AMD Workstation & Gaming PC",
    tagline: "A physical, hand-built machine",
    description:
      "I designed and assembled a high-performance workstation from bare parts, tuned for software " +
      "engineering, AI tinkering, Linux and Windows development, video editing, and 4K gaming. A real " +
      "machine, not a diagram. Something you can put your hands on.",
    thumbnail: "/pc/IMG_4215.jpeg",
    thumbnailPortrait: true,
    pageHash: "#/projects/custom-pc",
  },
  {
    number: 4,
    name: "StatelessVault",
    tagline: "Stateless encryption API",
    description:
      "A public crypto API that derives a key with Argon2id, encrypts with AES-256-GCM, and hands back a " +
      "self-contained ciphertext bundle you can stash anywhere. No database, no sessions, no key vault. " +
      "The server is a pure function and remembers nothing.",
    tags: ["Python", "Azure Functions", "AES-256-GCM", "Argon2id", "GitHub Actions"],
    pageHash: "#/projects/stateless-vault",
  },
  {
    number: 5,
    name: "SeeHandshake",
    tagline: "Live TLS handshake viewer",
    description:
      "A terminal app that watches TLS handshakes happen in real time. It sniffs packets on your network " +
      "interface, reassembles the TLS records, and lays each connection out in a three-pane view that breaks " +
      "the ClientHello and ServerHello down field by field. Written in Rust, published to crates.io and as " +
      "prebuilt binaries and Debian packages for Linux, macOS, and Windows.",
    tags: ["Rust", "Ratatui TUI", "libpcap", "TLS 1.3", "crates.io"],
    thumbnail: "/seehandshake/Screenshot.png",
    pageHash: "#/projects/see-handshake",
  },
  {
    number: 6,
    name: "TyrantEspresso",
    tagline: "Smartcard-gated espresso machine",
    description:
      "An espresso machine that refuses to pour until you present a smartcard it cryptographically trusts. " +
      "A hardware build meets applied PKI, now standing guard in the Microsoft kitchen.",
    tags: ["Smartcards", "SLE4442", "C / ioctl", "Hardware", "PKI"],
    thumbnail: "/TyrantEspresso/TyrantEspresso.jpeg",
    pageHash: "#/projects/tyrant-espresso",
  },
  {
    number: 7,
    name: "Speedometer No Ads",
    tagline: "GPS speedometer · iOS App Store",
    description:
      "A clean, ad-free GPS speedometer for golf carts, e-scooters, and e-bikes, built with React Native and " +
      "Expo. Born from real speeding tickets in my Texas neighborhood, now live on the iOS App Store.",
    tags: ["Expo", "React Native", "expo-location", "EAS Build", "TypeScript"],
    thumbnail: "/speedometer/Speedometer.jpeg",
    thumbnailPortrait: true,
    pageHash: "#/projects/speedometer",
  },
  {
    number: 8,
    name: "DaysTill",
    tagline: "Offline countdown app · iOS App Store",
    description:
      "A clean, ad-free countdown app built for my newborn's due date, made with React Native and Expo. " +
      "Live on the iOS App Store, with the Android build in public testing.",
    tags: ["Expo", "React Native", "AsyncStorage", "EAS Build", "TypeScript"],
    thumbnail: "/daystill/DaysTillBaby.jpeg",
    thumbnailPortrait: true,
    pageHash: "#/projects/daystill",
  },
  {
    number: 9,
    name: "AutoSkipYT",
    tagline: "Screen-watching automation · PyPI",
    description:
      "A cross-platform Python package that keeps an eye on a corner of your screen, spots a button you " +
      "taught it with OpenCV template matching, clicks it, and slips your cursor back where it was. Visual " +
      "desktop automation with a Typer CLI, published to PyPI for Windows and Linux.",
    tags: ["Python", "OpenCV", "mss", "PyAutoGUI", "Typer", "PyPI"],
    pageHash: "#/projects/autoskip-yt",
  },
];

export const pcBuild: PcBuild = {
  hash: "#/projects/custom-pc",
  name: "Custom AMD Workstation & Gaming PC",
  tagline: "A machine built from bare parts, not bought in a box",
  intro:
    "This is not a parts list. It is the story of designing, building, and dialing in a high-performance " +
    "AMD workstation for software engineering, AI development, Linux, Windows, and 4K gaming.",
  overview: {
    lead:
      "I built this machine instead of buying a prebuilt because building it yourself is the only way to get " +
      "exactly what you want. A hand-picked build gives you full command of quality, thermals, noise, and, above " +
      "all, the freedom to upgrade for years. Prebuilts cut corners on power delivery, cooling, and proprietary " +
      "parts you can never replace. A custom build makes every component earn its place.",
    reasons: [
      {
        label: "Control",
        text: "Pick every part for quality, silence, and airflow instead of swallowing whatever a prebuilt decides to ship.",
      },
      {
        label: "Value",
        text: "Put the money where it counts, into the GPU, the cooling, and the power supply, not into markup and proprietary boards.",
      },
      {
        label: "Longevity",
        text: "Standard parts on a modern AM5 platform mean I can swap the CPU, RAM, and storage for years without starting over.",
      },
    ],
    goals: [
      "Software engineering & large local builds",
      "AI experimentation and model inference",
      "Linux development on Pop!_OS",
      "Video editing and content creation",
      "4K gaming at high frame rates",
      "Long-term upgradeability on the AM5 platform",
    ],
  },
  hardware: [
    {
      category: "GPU",
      name: "NVIDIA GeForce RTX 5080 Founders Edition",
      detail: "Flagship-class Blackwell GPU for 4K gaming, AI inference, and CUDA workloads.",
    },
    {
      category: "Motherboard",
      name: "MSI MAG B850 Tomahawk MAX WiFi",
      detail: "AM5 board with robust VRMs, PCIe Gen5, dual M.2, and Wi-Fi for future CPU upgrades.",
    },
    {
      category: "Case",
      name: "Fractal North",
      detail: "Warm walnut-and-mesh chassis with excellent airflow and a clean, quiet aesthetic.",
    },
    {
      category: "Power Supply",
      name: "Corsair RM850e",
      detail: "850W 80+ Gold fully-modular PSU with plenty of headroom for the RTX 5080.",
    },
    {
      category: "CPU Cooler",
      name: "Thermalright Phantom Spirit 120 SE",
      detail: "Dual-tower air cooler delivering near-AIO performance with fit-and-forget reliability.",
    },
    {
      category: "Storage",
      name: "Dual NVMe SSD configuration",
      detail: "Two M.2 NVMe drives, one for Windows 11 and one for Pop!_OS, so the two systems never step on each other.",
    },
    {
      category: "OS: Primary",
      name: "Windows 11",
      detail: "Gaming, video editing, and day-to-day productivity.",
    },
    {
      category: "OS: Secondary",
      name: "Pop!_OS (dual boot)",
      detail: "Linux development, AI tooling, and a first-class terminal environment.",
    },
    {
      // TODO: fill in the exact CPU model once finalized.
      category: "CPU",
      name: "AMD Ryzen (AM5): TODO",
      detail: "Placeholder: add the exact Ryzen model, core count, and clocks.",
    },
    {
      // TODO: fill in RAM capacity, speed, and kit details.
      category: "Memory",
      name: "DDR5: TODO",
      detail: "Placeholder: add RAM capacity (e.g. 32GB/64GB), speed, and EXPO profile.",
    },
    {
      // TODO: fill in storage capacities for each NVMe drive.
      category: "Storage capacities",
      name: "NVMe capacities: TODO",
      detail: "Placeholder: add the capacity of each SSD (e.g. 2TB Windows / 2TB Linux).",
    },
    {
      // TODO: add any additional components (fans, monitor, peripherals, etc.).
      category: "More",
      name: "Additional components: TODO",
      detail: "Placeholder: extra case fans, monitors, and peripherals can be listed here.",
    },
  ],
  hardwareNote:
    "TODO: a few cards above are still placeholders. The CPU, RAM, and exact storage capacities get " +
    "filled in as the build is finalized.",
  buildProcess: [
    {
      step: "01",
      title: "Planning the build",
      text: "Set goals (dev, AI, Linux, gaming), a budget, and a target noise/thermal profile before choosing any parts.",
    },
    {
      step: "02",
      title: "Selecting components",
      text: "Chose the AM5 platform for longevity, paired the RTX 5080 with a quiet dual-tower cooler and a roomy, high-airflow case.",
    },
    {
      step: "03",
      title: "Assembly",
      text: "Mounted the CPU, cooler, RAM, and M.2 drives on the board, then seated everything in the Fractal North.",
    },
    {
      step: "04",
      title: "Cable management",
      text: "Routed the modular PSU cables behind the tray for clean airflow and an uncluttered front chamber.",
    },
    {
      step: "05",
      title: "BIOS configuration",
      text: "Updated firmware, enabled the memory EXPO profile, set the boot order, and confirmed drive detection.",
    },
    {
      step: "06",
      title: "Windows installation",
      text: "Installed Windows 11 onto its dedicated NVMe drive to keep the two operating systems fully isolated.",
    },
    {
      step: "07",
      title: "Pop!_OS installation",
      text: "Installed Pop!_OS on the second NVMe drive and configured the dual-boot menu.",
    },
    {
      step: "08",
      title: "Driver setup",
      text: "Installed the latest NVIDIA drivers and chipset packages on both operating systems.",
    },
    {
      step: "09",
      title: "Final testing",
      text: "Ran stress and thermal tests, validated boot reliability, and tuned fan curves. TODO: add benchmark results.",
    },
  ],
  lessons: [
    {
      label: "Installing M.2 SSDs",
      text: "Tiny mounting screws and standoffs are fiddly little things. Seat the drive at an angle first and it goes in far easier.",
    },
    {
      label: "Front-panel connectors",
      text: "The power/reset/LED header pins are unforgiving; the motherboard manual is essential for correct orientation.",
    },
    {
      label: "GPU power connections",
      text: "The RTX 5080 wants its power connector fully seated. A partial click will haunt you with boot and stability gremlins.",
    },
    {
      label: "BIOS configuration",
      text: "A firmware update and enabling the memory profile made a real difference to stability and performance.",
    },
    {
      label: "Dual-boot setup",
      text: "Giving each OS its own physical drive avoids bootloader conflicts and keeps Windows and Linux independent.",
    },
    {
      label: "Airflow optimization",
      text: "Balancing intake and exhaust fans kept temperatures low and the machine impressively quiet.",
    },
    {
      label: "Troubleshooting hardware",
      text: "Methodically reseating components and checking one connection at a time resolved early boot quirks.",
    },
  ],
  gallery: [
    { caption: "The finished build", image: "/pc/IMG_4215.jpeg" },
    { caption: "Another angle of the machine", image: "/pc/IMG_4218.jpeg" },
  ],
  highlights: [
    "Windows 11",
    "Pop!_OS",
    "Linux",
    "NVIDIA",
    "AMD Platform",
    "PCIe Gen5",
    "NVMe Storage",
    "Air Cooling",
    "UEFI/BIOS",
  ],
  futureUpgrades: [
    {
      label: "Additional storage",
      text: "Add more NVMe drives for large datasets, game libraries, and video projects.",
    },
    {
      label: "Memory upgrades",
      text: "Expand DDR5 capacity for heavier AI workloads and virtualization.",
    },
    {
      label: "Performance tuning",
      text: "Fine-tune fan curves, memory timings, and undervolting for efficiency. TODO: document tuning results.",
    },
    {
      label: "Linux tooling",
      text: "Build out a full Pop!_OS development environment with containers and GPU-accelerated workflows.",
    },
    {
      label: "AI benchmarking",
      text: "Benchmark local model inference on the RTX 5080. TODO: add benchmark numbers once collected.",
    },
    {
      label: "Future hardware upgrades",
      text: "The AM5 platform leaves room for a future CPU jump without replacing the motherboard.",
    },
  ],
};

export const education: Education[] = [
  {
    school: "University of Washington",
    degree: "Masters of Science",
    field: "Computer Science",
    note: "Currently enrolled, graduating April 2027",
  },
  {
    school: "Texas A&M University",
    degree: "Bachelors of Science",
    field: "Computer Engineering",
    extras: ["Minor: Cyber Security", "Minor: Mathematics"],
  },
];

export const research = {
  title: "Paid Research Assistant",
  bullets: [
    "Created agricultural software for Noble Research Institute.",
    "Enjoy pecans? Ask me how I may have prevented you from eating a bad one.",
  ],
};

export const skills: string[] = [
  "Cryptography & security specialist",
  "Creating, maintaining, and monitoring highly distributed systems that require high availability",
  "Proficient in state management design",
  "Cloud expert designing cloud-native applications and automation",
  "Debugging with tools such as valgrind & gdb",
  "Customer-facing front end: Expo, Tailwind, Node JS, React Native, and Typescript",
  "Modern back end: Python, Django, T3 GraphQL, JWT OAuth, AWS, OCI, and Azure",
];

export const languages: string[] = [
  "Python",
  "C++ & C",
  "C#",
  "Java",
  "Linux Shell",
  "HDLs",
  "Typescript",
  "IaC/Terraform",
  "HTML/CSS",
];

export type StatelessVault = {
  hash: string;
  name: string;
  tagline: string;
  intro: string;
  whyInteresting: string;
  howItWorks: {
    lead: string;
    steps: { label: string; text: string }[];
  };
  whatILearned: { label: string; text: string }[];
  highlights: string[];
  apiBase: string;
  githubUrl: string;
};

export const statelessVault: StatelessVault = {
  hash: "#/projects/stateless-vault",
  name: "StatelessVault",
  tagline: "A public, stateless encryption API. Bring your own secret, walk away with a self-contained ciphertext.",
  intro:
    "I built a public crypto API that takes a plaintext string and a secret of your choosing, derives a key " +
    "with Argon2id, encrypts with AES-256-GCM, and returns a self-contained ciphertext package you can store " +
    "anywhere. Decryption needs only that package and your original secret. The server keeps no keys, no " +
    "plaintext, no ciphertext, and no sessions. It forgets you the moment it answers.",
  whyInteresting:
    "The API is genuinely stateless. There is no database, no user accounts, no key vault. The server is a pure " +
    "function: (plaintext, secret) → ciphertext bundle. Lose the secret and the data is unrecoverable, by design. " +
    "That is a rare property for a public API, and it means a compromise of the server leaks nothing historical.",
  howItWorks: {
    lead:
      "Argon2id turns the user's password into a strong 256-bit key (memory-hard, resistant to GPU brute force). " +
      "AES-256-GCM encrypts the plaintext with that key and produces an authentication tag so tampering is detectable. " +
      "Salt + nonce are random per request and returned to the caller as part of the ciphertext bundle.",
    steps: [
      {
        label: "Key derivation",
        text: "Argon2id hashes the user's secret with a random 16-byte salt. The output is a 256-bit key. The same secret and salt always produce the same key, but the salt is unique per request, so two encryptions of identical plaintext look nothing alike.",
      },
      {
        label: "Encryption",
        text: "AES-256-GCM encrypts the plaintext using the derived key and a random 12-byte nonce. GCM mode produces an authentication tag alongside the ciphertext, making any tampering detectable on decrypt.",
      },
      {
        label: "The ciphertext bundle",
        text: "The API returns version, algorithm, salt (hex), nonce (hex), ciphertext (base64), and tag (hex). Everything needed to decrypt lives in the bundle. The only missing piece is your original secret, which the server never sees again.",
      },
    ],
  },
  whatILearned: [
    {
      label: "Python 3.13 on Azure Functions Flex Consumption",
      text: "Flex Consumption is a newer hosting plan with faster cold starts and per-instance billing. Deploying Python 3.13 required pinning the runtime version explicitly in the function app settings.",
    },
    {
      label: "Flex Consumption vs. Consumption deployment endpoints",
      text: "Consumption plan apps deploy via /api/zipdeploy, but Flex Consumption uses /api/publish. Mixing them silently succeeds but never updates the running code. A long and frustrating debugging session is how I learned that.",
    },
    {
      label: "OIDC federated credentials for keyless deploys",
      text: "Set up federated identity credentials on an Azure service principal so GitHub Actions can authenticate to Azure without any stored secrets. No client secrets, no expiry rotation, just a JWT exchange.",
    },
    {
      label: "In-memory rate limiting in serverless",
      text: "A per-instance in-memory rate limiter works fine on a single instance but is meaningless at scale. When the function app scales out, each instance has its own counter and the global rate is effectively multiplied by the instance count. A real spend cap requires a distributed store.",
    },
  ],
  highlights: ["Python", "Azure Functions", "AES-256-GCM", "Argon2id", "GitHub Actions"],
  apiBase: "https://statelessvault.azurewebsites.net",
  githubUrl: "https://github.com/AustinJAkerley/StatelessVault",
};

export type SeeHandshake = {
  hash: string;
  name: string;
  tagline: string;
  intro: string;
  whyInteresting: string;
  features: { label: string; text: string }[];
  screenshots: { caption: string; image: string }[];
  install: { platform: string; note?: string; commands: string[] }[];
  runSteps: { label: string; text: string }[];
  highlights: string[];
  cratesUrl: string;
  githubUrl: string;
  releasesUrl: string;
};

export const seeHandshake: SeeHandshake = {
  hash: "#/projects/see-handshake",
  name: "SeeHandshake",
  tagline: "Watch a TLS handshake happen, live, in your terminal.",
  intro:
    "SeeHandshake is a passive TLS handshake viewer for the terminal. It sniffs packets on a network " +
    "interface you choose, reassembles the TLS records off the TCP stream, parses the plaintext parts of the " +
    "handshake, and lays every connection out in a three-pane view you can step through record by record. It " +
    "is written in Rust, published on crates.io, and shipped as prebuilt binaries and Debian packages for " +
    "Linux, macOS, and Windows.",
  whyInteresting:
    "TLS 1.3 encrypts every handshake message after ServerHello, so a passive observer cannot read the " +
    "certificate or the rest of the flight. SeeHandshake is honest about that line. It parses ClientHello and " +
    "ServerHello in full, then labels the encrypted stages by their position on the wire instead of pretending " +
    "to see inside them. On Linux it also names the local process that opened the socket, so you can tie a " +
    "handshake back to the exact program that made it.",
  features: [
    {
      label: "Three-pane, walkable view",
      text: "Connections on the left, the record timeline in the middle, and a field-by-field breakdown on the right. Arrow through the records and the right pane follows along.",
    },
    {
      label: "Honest about TLS 1.3",
      text: "ClientHello and ServerHello are decoded in full: SNI, ALPN, cipher suites, key share groups, and versions. Encrypted stages are detected and labeled, never faked.",
    },
    {
      label: "Teaches as you watch",
      text: "Every field carries a short plain-English note on what it is and why it matters, plus a Client-to-Server flow diagram you can toggle on. It doubles as an interactive TLS textbook.",
    },
    {
      label: "Process attribution on Linux",
      text: "Each connection shows the local process that owns the socket, walking /proc as the invoking user. No extra privileges beyond the capture itself.",
    },
    {
      label: "Built to ship",
      text: "Written in Rust with a libpcap backend, tested in CI across Linux, macOS, and Windows, and released as signed tags with binaries and .deb packages built automatically.",
    },
  ],
  screenshots: [
    {
      caption:
        "Connecting to chatgpt.com. The right pane breaks the ClientHello out field by field: every cipher suite offered, all three key shares (including the X25519MLKEM768 post-quantum hybrid), and each extension the client sent.",
      image: "/seehandshake/Screenshot.png",
    },
  ],
  install: [
    {
      platform: "Any platform with Rust",
      note: "Build and install straight from crates.io.",
      commands: [
        "cargo install seehandshake",
        'sudo setcap cap_net_raw,cap_net_admin=eip "$(command -v seehandshake)"',
        "seehandshake --interface <iface>",
      ],
    },
    {
      platform: "Debian / Ubuntu 24.04+ (.deb)",
      note: "amd64 shown. On ARM, swap in seehandshake_1.0.5-1_arm64.deb.",
      commands: [
        "curl -LO https://github.com/AustinJAkerley/SeeHandshake/releases/download/v1.0.5/seehandshake_1.0.5-1_amd64.deb",
        "sudo apt install ./seehandshake_1.0.5-1_amd64.deb",
        'sudo setcap cap_net_raw,cap_net_admin=eip "$(command -v seehandshake)"',
        "seehandshake --interface <iface>",
      ],
    },
    {
      platform: "macOS (Apple Silicon)",
      note: "On Intel Macs, use the x86_64-apple-darwin build instead.",
      commands: [
        "curl -LO https://github.com/AustinJAkerley/SeeHandshake/releases/download/v1.0.5/seehandshake-aarch64-apple-darwin.tar.gz",
        "tar xzf seehandshake-aarch64-apple-darwin.tar.gz",
        'sudo chown "$USER" /dev/bpf*',
        "./seehandshake --interface en0",
      ],
    },
    {
      platform: "Windows",
      note: "Npcap is the capture driver (the Windows equivalent of libpcap) and is required. winget fetches and installs it. Run everything from an Administrator terminal.",
      commands: [
        "winget install Insecure.Npcap",
        "curl -LO https://github.com/AustinJAkerley/SeeHandshake/releases/download/v1.0.5/seehandshake-x86_64-pc-windows-msvc.zip",
        "tar -xf seehandshake-x86_64-pc-windows-msvc.zip",
        '.\\seehandshake.exe --interface "Ethernet"',
      ],
    },
  ],
  runSteps: [
    {
      label: "Grant capture rights",
      text: "Live capture opens a raw socket, so it needs privileges. On Linux use setcap (above) or sudo, on macOS open /dev/bpf* or use sudo, on Windows run as Administrator.",
    },
    {
      label: "Find your interface",
      text: "Run `seehandshake --list-interfaces` to see the available network interfaces and pick the one you are actually using (often wlan0, eth0, or en0).",
    },
    {
      label: "Start it",
      text: "Run `seehandshake --interface <iface>` and the three-pane view opens. It sits and waits for TLS traffic to appear.",
    },
    {
      label: "Make a handshake",
      text: "From another terminal run `curl https://example.com`, or just browse. The connection pops into the left pane and you can arrow through every record.",
    },
  ],
  highlights: ["Rust", "Ratatui TUI", "libpcap", "TLS 1.3", "crates.io", "Debian package"],
  cratesUrl: "https://crates.io/crates/seehandshake",
  githubUrl: "https://github.com/AustinJAkerley/SeeHandshake",
  releasesUrl: "https://github.com/AustinJAkerley/SeeHandshake/releases/latest",
};

// A shared shape for the Expo mobile-app project pages (Speedometer, DaysTill).
export type AppProject = {
  hash: string;
  name: string;
  tagline: string;
  kicker: string;
  intro: string;
  problem: { label: string; text: string };
  solution: { label: string; text: string };
  features: { label: string; text: string }[];
  challengesTitle: string;
  challengesLead: string;
  challenges: { title: string; text: string }[];
  screenshots?: {
    caption: string;
    image: string;
    orientation?: "portrait" | "landscape";
  }[];
  highlights: string[];
  status: string;
  privacyUrl?: string;
  githubUrl?: string;
  // Text for the "Source code" link card. Defaults to the Expo/React Native copy.
  sourceText?: string;
  storeUrl?: string;
  storeUrlLabel?: string;
  storeText?: string;
};

export const speedometer: AppProject = {
  hash: "#/projects/speedometer",
  name: "Speedometer No Ads",
  tagline: "A clean GPS speedometer for golf carts, e-scooters, and e-bikes.",
  kicker: "Project 07 / iOS app",
  intro:
    "Speedometer No Ads turns your phone into a large, glanceable GPS speedometer for slower rides: golf " +
    "carts, e-scooters, and e-bikes. It smooths the raw GPS signal, warns you when you cross a speed limit " +
    "you set, and tracks your trip. No ads, no accounts, no data collection. Built with React Native and " +
    "Expo, and now live on the iOS App Store.",
  problem: {
    label: "The problem",
    text:
      "In my Texas neighborhood, people were getting speeding tickets on their golf carts. Golf carts don't " +
      "come with speedometers, and neither do e-scooters or e-bikes, so there was no easy way to know how fast " +
      "you were actually going. Every speedometer app I tried was buried in ads or locked the basics behind a " +
      "paywall. I just wanted one clean app, with zero monetization, that shows your speed and gets out of the way.",
  },
  solution: {
    label: "How it came together",
    text:
      "I bounced the idea off ChatGPT to shape the concept and the feature set, then built it with React Native " +
      "and Expo, leaning on GitHub Copilot to move fast. The result is exactly the tool I wished existed: a big, " +
      "honest speed readout with no ads, no accounts, and no tracking.",
  },
  features: [
    {
      label: "Smoothed live speed",
      text: "Reads GPS at high accuracy, then filters jitter and rejects impossible spikes so the number stays steady and honest.",
    },
    {
      label: "GPS signal quality",
      text: "A live indicator shows how strong the fix is, plus the current accuracy in meters, so you know how much to trust the reading.",
    },
    {
      label: "Custom speed limit",
      text: "Set your own limit; the dial turns red and the phone buzzes once each time you cross it.",
    },
    {
      label: "Trip stats",
      text: "Tracks top speed, average speed, and distance, in mph or km/h, with the screen kept awake while you ride.",
    },
    {
      label: "Private by design",
      text: "Fully offline. Location is used only on-device to compute speed and is never uploaded. No ads, ever.",
    },
  ],
  challengesTitle: "The hoops I had to jump through",
  challengesLead:
    "Building the app was the easy part. Getting it published was the real adventure.",
  challenges: [
    {
      title: "Apple Developer setup",
      text: "Enrolling in the Apple Developer Program and wiring up code signing, provisioning, and App Store Connect was a maze of hoops before a single feature mattered.",
    },
    {
      title: "Rejected, then resubmitted",
      text: "Apple rejected my first submission. I had to work through their feedback and resubmit before the app was finally approved.",
    },
    {
      title: "The sprint demo",
      text: "To prove the speedometer actually worked, I had to record a demo, which meant literally sprinting around my house so the numbers would climb for the reviewers.",
    },
    {
      title: "Shared with the neighborhood",
      text: "Once it was live, I posted it to my neighborhood Facebook group and got a wave of kind comments and likes from the exact people it was built for.",
    },
  ],
  screenshots: [
    {
      caption: "Speedometer No Ads running on iOS: a big, glanceable speed readout with no ads in sight.",
      image: "/speedometer/Speedometer.jpeg",
      orientation: "portrait",
    },
  ],
  highlights: ["Expo", "React Native", "expo-location", "EAS Build", "TypeScript", "iOS"],
  status: "Live on the iOS App Store — the Android build is in public testing on Google Play.",
  privacyUrl: "https://austinakerley.com/speedometer/privacy",
  githubUrl: "https://github.com/AustinJAkerley/Speedometer",
  storeUrl: "https://apps.apple.com/us/app/speedometer-no-ads/id6792160514",
  storeUrlLabel: "App Store",
};

export const daysTill: AppProject = {
  hash: "#/projects/daystill",
  name: "DaysTill",
  tagline: "Count down the days until anything. Offline, no accounts.",
  kicker: "Project 08 / iOS & Android app",
  intro:
    "DaysTill is a clean, offline app for counting down the days until anything: a goal, a trip, a deadline, " +
    "or a due date. Add a countdown with a title, date, and color, and watch it tick down. No ads, no accounts, " +
    "no tracking; countdowns live on your device. Built with React Native and Expo, and now live on the iOS " +
    "App Store.",
  problem: {
    label: "The problem",
    text:
      "I wanted a countdown app dedicated to my newborn's due date. The one I was using was so ad-infested that " +
      "it would make me sit through a full video ad just to see my daughter's due date. I wanted something clean " +
      "and personal instead: a countdown you can open and see instantly, with nothing standing between you and " +
      "the moment you're waiting for.",
  },
  solution: {
    label: "How it came together",
    text:
      "I bounced the idea off ChatGPT to shape it, then built it with React Native and Expo and GitHub Copilot. " +
      "It's fully offline with no accounts and no tracking, so your countdowns stay on your device and load the " +
      "instant you open the app.",
  },
  features: [
    {
      label: "All your countdowns",
      text: "A home screen listing every countdown, sorted by soonest first.",
    },
    {
      label: "Add in seconds",
      text: "Give a countdown a title, a target date, and an accent color, and it's live.",
    },
    {
      label: "Detail view",
      text: "Tap any countdown for a full-screen view of exactly how long is left.",
    },
    {
      label: "Archive or delete",
      text: "Tuck away events once they've passed, or remove them entirely.",
    },
    {
      label: "Private by design",
      text: "Automatic light/dark theme, stored locally via AsyncStorage, and fully offline. Nothing leaves your device.",
    },
  ],
  challengesTitle: "The hoops I had to jump through",
  challengesLead:
    "Shipping to both stores meant two developer setups and two review processes before anyone could install it.",
  challenges: [
    {
      title: "Two stores, two setups",
      text: "DaysTill targets both iOS and Android, which means two developer programs, two signing setups, and two consoles to configure before a build reaches anyone.",
    },
    {
      title: "Apple developer hoops",
      text: "The Apple side alone was a lot: enrolling in the Developer Program, code signing, and pushing the app through App Store review before it could go live.",
    },
    {
      title: "Android in public testing",
      text: "The Android build is currently in Google Play's public testing track, working its way toward a full production release.",
    },
  ],
  screenshots: [
    {
      caption: "DaysTill counting down to a due date: clean, personal, and free of ads.",
      image: "/daystill/DaysTillBaby.jpeg",
      orientation: "portrait",
    },
  ],
  highlights: ["Expo", "React Native", "AsyncStorage", "EAS Build", "TypeScript", "iOS", "Android"],
  status: "Live on the iOS App Store — the Android build is in public testing on Google Play.",
  privacyUrl: "https://austinakerley.com/daystill/privacy",
  githubUrl: "https://github.com/AustinJAkerley/DaysTill",
  storeUrl: "https://apps.apple.com/us/app/daystill-baby/id6792157635",
  storeUrlLabel: "App Store",
};

export const autoSkipYt: AppProject = {
  hash: "#/projects/autoskip-yt",
  name: "AutoSkipYT",
  tagline: "My first Python package published to PyPI.",
  kicker: "Project 09 / Python package",
  intro:
    "AutoSkipYT is visual desktop automation: it watches a corner of your screen for a button you configure, " +
    "matches it with OpenCV template matching, clicks it, and returns your cursor to where it was. But the part " +
    "I'm actually celebrating is where it lives — this is the first Python package I have ever published to PyPI, " +
    "installable anywhere with a single `pip install autoskipYT`.",
  problem: {
    label: "Why I built it",
    text:
      "I'd shipped apps to the iOS App Store and Google Play, a crate to Rust's registry, and an extension to the " +
      "Chrome Web Store. The one publishing muscle I hadn't flexed was the biggest one in the Python world: PyPI, " +
      "the index behind essentially every `pip install` on earth. I wanted a genuinely useful tool as the vehicle " +
      "rather than a toy, so I built a generic screen-watching clicker and used it to learn the whole packaging and " +
      "publishing pipeline end to end.",
  },
  solution: {
    label: "How it came together",
    text:
      "The engine is deliberately generic: hand it a tightly-cropped template image of any on-screen button and it " +
      "finds and clicks it. Fast screenshots come from mss, matching from OpenCV, clicking from PyAutoGUI, and the " +
      "CLI from Typer. I packaged it with a modern src layout and Hatchling, typed the whole thing for mypy, wrote a " +
      "pytest suite that runs without a real display, then shipped it to PyPI as autoskipYT.",
  },
  features: [
    {
      label: "One-command install",
      text: "pip install autoskipYT, then autoskipyt run. A real, versioned package anyone can pull straight from PyPI.",
    },
    {
      label: "Generic detection engine",
      text: "Point it at any button template; it isn't tied to any single site or app. OpenCV template matching, gated by a confidence threshold you control.",
    },
    {
      label: "Polite with your cursor",
      text: "It saves your mouse position, clicks the target, and only puts the cursor back if you didn't move it yourself in the meantime.",
    },
    {
      label: "Batteries included",
      text: "A Typer CLI with run, test, calibrate, and templates commands, strict mypy types, Ruff linting, and tests that never need a screen.",
    },
    {
      label: "Cross-platform",
      text: "Runs on Windows and Linux (X11). A configurable scan region keeps it fast and light on the CPU.",
    },
  ],
  challengesTitle: "The hoops I had to jump through",
  challengesLead:
    "Writing the code was quick. Learning to publish to PyPI the right way was the real lesson.",
  challenges: [
    {
      title: "The name was taken",
      text: "My first choice, autoskip, was already on PyPI, so I had to pick and verify a fresh, available name. It became autoskipYT.",
    },
    {
      title: "403 Forbidden on upload",
      text: "My first upload attempts bounced until I sorted out API tokens and the account-scoped token PyPI requires for a brand-new project.",
    },
    {
      title: "Rehearse on TestPyPI",
      text: "I practiced on TestPyPI first, then pushed the real 0.1.0 to PyPI — and learned that a version number, once published, can never be reused.",
    },
    {
      title: "Wayland said no",
      text: "On my Pop!_OS machine it wouldn't run until I switched to an X11 session; Wayland blocks the global screen capture and mouse control the tool depends on. That limitation is now documented front and center.",
    },
  ],
  highlights: ["Python 3.11+", "OpenCV", "mss", "PyAutoGUI", "Typer", "Hatchling", "PyPI"],
  status: "Live on PyPI as autoskipYT 0.1.0 — my first published Python package. Install it with pip install autoskipYT.",
  storeUrl: "https://pypi.org/project/autoskipYT/",
  storeUrlLabel: "PyPI",
  storeText: "My first package on the Python Package Index. Install it with pip install autoskipYT.",
};

export const tyrantEspresso: AppProject = {
  hash: "#/projects/tyrant-espresso",
  name: "TyrantEspresso",
  tagline: "An espresso machine that demands a cryptographic handshake before it pours.",
  kicker: "Project 06 / Hardware + smartcards",
  intro:
    "TyrantEspresso is a smartcard-gated espresso machine. Before it will pull a shot, it demands proof: " +
    "tap an SLE4442 smartcard and the machine checks the private key stored on it against a certificate it " +
    "trusts. No valid card, no coffee. It's part hardware build, part applied cryptography, and part inside " +
    "joke that now lives in the Microsoft kitchen.",
  problem: {
    label: "The problem",
    text:
      "I wanted an espresso machine with a personality: a tyrant that refuses to serve anyone who can't prove " +
      "who they are. The idea was to gate a real espresso machine behind smartcard authentication, so pulling a " +
      "shot means presenting a card the machine cryptographically trusts. Equal parts security demo and kitchen " +
      "prank.",
  },
  solution: {
    label: "How it came together",
    text:
      "I built a control box that sits between the button and the machine and wired it to a smartcard reader. " +
      "Tap an SLE4442 card and a driver reads the private key off it, checks it against the trusted certificate, " +
      "and only then lets the shot through. I bounced the design off ChatGPT and leaned on GitHub Copilot to " +
      "move fast, and I got great help from Alex on my team, who deserves a big shout-out for getting me " +
      "unstuck more than once on the card and driver work.",
  },
  features: [
    {
      label: "The smartcard gate",
      text: "Present an SLE4442 card and the machine verifies it before it will pour. No valid card, no espresso.",
    },
    {
      label: "Just the private key",
      text: "The SLE4442 cards are tiny, so the full certificate won't fit. Only the private key rides on the card; the machine holds the certificate it checks against.",
    },
    {
      label: "A control box of its own",
      text: "A custom enclosure houses the reader, wiring, and control electronics, wired into the machine through cable glands.",
    },
    {
      label: "Driver-level card access",
      text: "A low-level driver talks to the reader over ioctl calls to read the SLE4442 memory directly and speak the protocol it expects.",
    },
    {
      label: "Out in the wild",
      text: "It sits in the Microsoft kitchen and will keep guarding the espresso until the day it finally stops working.",
    },
  ],
  challengesTitle: "The hard part",
  challengesLead:
    "The cryptography was the fun part. The physical build and the card plumbing are where it got real.",
  challenges: [
    {
      title: "Finding cable glands",
      text: "Sourcing the right cable glands to route the wiring cleanly and safely into the enclosure turned into a surprising scavenger hunt.",
    },
    {
      title: "The right drill bits",
      text: "Cutting clean, correctly sized holes in the box meant tracking down the right drill bits before anything would fit.",
    },
    {
      title: "Making the reader talk to SLE4442",
      text: "Getting the smartcard reader to actually cooperate with SLE4442 cards took real effort; they're a quirky memory-card format, not your typical processor card.",
    },
    {
      title: "Too small for the cert",
      text: "The cards simply couldn't hold the full certificate, so I had to store only the private key on the card and keep the certificate on the machine side.",
    },
    {
      title: "Down to ioctl and drivers",
      text: "Reading and writing the cards meant dropping down to ioctl calls and card drivers to speak the exact protocol the reader wanted.",
    },
  ],
  screenshots: [
    {
      caption: "TyrantEspresso standing guard in the Microsoft kitchen.",
      image: "/TyrantEspresso/TyrantEspresso.jpeg",
      orientation: "landscape",
    },
  ],
  highlights: ["Smartcards", "SLE4442", "C / ioctl", "Hardware", "PKI", "Espresso"],
  status: "Live in the Microsoft kitchen — and it'll keep guarding the espresso until it stops working.",
  sourceText: "The control code and card tooling for the smartcard-gated espresso machine, on GitHub.",
  githubUrl: "https://github.com/AustinJAkerley/TyrantEspresso",
};