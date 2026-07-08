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
    // TODO: replace with a real photo of the finished build.
    thumbnail: "/pc-build/finished.jpg",
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
    // TODO: replace every placeholder below with a real photo in /public/pc-build.
    { caption: "Finished PC", image: "/pc-build/finished.jpg" },
    { caption: "Internal build", image: "/pc-build/internal.jpg" },
    { caption: "Cable management", image: "/pc-build/cables.jpg" },
    { caption: "BIOS", image: "/pc-build/bios.jpg" },
    { caption: "Windows setup", image: "/pc-build/windows.jpg" },
    { caption: "Linux setup", image: "/pc-build/linux.jpg" },
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
