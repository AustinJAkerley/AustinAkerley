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
  // External link (e.g. a live site or repo). Optional when the project links
  // to a dedicated in-site page instead.
  url?: string;
  urlLabel?: string;
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
  title: "Senior Software Engineer",
  location: "Bellevue, WA",
  email: "austin.akerley+website@outlook.com",
  linkedin: "https://linkedin.com/in/AustinAkerley",
  linkedinLabel: "linkedin.com/in/AustinAkerley",
  tagline:
    "Cryptography & security specialist building and scaling highly available, cloud-native distributed systems.",
  about:
    "I'm a Senior Software Engineer specializing in cryptography, security, and large-scale distributed systems. " +
    "I currently design and scale Public Key Infrastructure on Microsoft's PKI team, and I've shipped Hardware " +
    "Security Module integrations, secure cloud regions, and FPGA cyber components across Microsoft, Oracle, and " +
    "Lockheed Martin. I love turning hard security problems into reliable, automated platforms.",
};

export const experiences: Experience[] = [
  {
    company: "Microsoft",
    team: "PKI Team",
    role: "Senior Software Engineer",
    start: "May 2025",
    end: "Current",
    product:
      "Critical tier-4 datacenters that host Microsoft's Public Key Infrastructure (MSPKI), CodeSign, and Malware Scanning services.",
    bullets: [
      {
        label: "Primary Role",
        text: "Design and scale the PKI infrastructure of our core security services while improving cryptographic security of our product by utilizing TPMs.",
      },
      {
        label: "Secondary Role",
        text: "Datacenter buildout, security, and maintenance. Managing over 1000 physical servers across 3 datacenters for the highest security customers.",
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
      "Key Management Service (KMS), a cloud service that manages the encryption keys used to protect sensitive data.",
    bullets: [
      {
        label: "Primary Role",
        text: "Hardware Security Module (HSM) integration expert specializing in C/C++ to integrate vendor-provided HSM cards as the core foundation for trust and security in KMS. Led the orchestration of HSM changes across 500 bare-metal hosts.",
      },
      {
        label: "Secondary Role",
        text: "Implemented cryptographic algorithms for KMS APIs in Java for an upcoming small-footprint dedicated cloud offering.",
      },
      {
        label: "Smaller Projects",
        text: "Built a developer tool in Python for validating OCI alarm infra — now a required step in new OCI cloud service creation.",
      },
    ],
  },
  {
    company: "Microsoft O365",
    team: "Teams",
    role: "Site Reliability Engineer II",
    start: "Nov 2020",
    end: "Feb 2022",
    product: "Dedicated government Azure cloud region.",
    bullets: [
      {
        label: "Primary Role",
        text: "SRE who deployed the infrastructure and application for MS Teams to 2 dedicated cloud regions using IaC & automation.",
      },
      {
        label: "Secondary Role",
        text: "Deployed the infrastructure and application for Azure DevOps pipelines in the secure cloud regions. Automated tasks with Powershell and Python.",
      },
      {
        label: "Smaller Projects",
        text: "Debugged app and infra issues for 73 micro-services across 15 teams, implemented region-specific fixes, and contributed heavily to operational and onboarding documentation.",
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
      "A custom Network Interface Device (NID) with a XiLinx System on Chip (SoC) FPGA for the F35 fighter jet.",
    bullets: [
      {
        label: "Primary Role",
        text: "System Verilog developer implementing our primary FPGA cyber components.",
      },
      {
        label: "Secondary Role",
        text: "Completed major feature development for our SoC kernel modules in C++.",
      },
    ],
  },
];

export const projectsChallenge = {
  title: "30 Projects in 45 Days",
  intro:
    "A personal challenge to design, build, and ship 30 projects in 45 days. " +
    "The only rule: every project must be published. It doesn't stop at localhost — " +
    "each one has to be publicly available on the internet or a real, physical project " +
    "you can hold in your hands.",
  rule: "No localhost. Every project ships public on the internet or physical in the real world.",
};

export const projects: Project[] = [
  {
    number: 1,
    name: "AustinAkerley.com",
    tagline: "This very website",
    description:
      "A modern, responsive personal portfolio built with React, TypeScript, and Vite, " +
      "and published live on Azure Static Web Apps. The site you're reading right now.",
    url: "https://austinakerley.com",
    urlLabel: "austinakerley.com",
  },
  {
    number: 2,
    name: "PDFDiff",
    tagline: "Chrome & browser extension",
    description:
      "A browser extension that diffs two PDFs side by side, making it easy to spot changes " +
      "between document versions at a glance. Published and available as a browser extension.",
    url: "https://github.com/AustinJAkerley/PDFDiff",
    urlLabel: "github.com/AustinJAkerley/PDFDiff",
  },
  {
    number: 3,
    name: "Custom AMD Workstation & Gaming PC",
    tagline: "A physical, hand-built machine",
    description:
      "I designed and assembled a high-performance development workstation from the ground up — " +
      "tuned for software engineering, AI experimentation, Linux and Windows development, video " +
      "editing, and 4K gaming. A real, physical project you can hold in your hands.",
    // TODO: replace with a real photo of the finished build.
    thumbnail: "/pc-build/finished.jpg",
    pageHash: "#/projects/custom-pc",
  },
];

export const pcBuild: PcBuild = {
  hash: "#/projects/custom-pc",
  name: "Custom AMD Workstation & Gaming PC",
  tagline: "A machine designed and assembled from the ground up",
  intro:
    "Not just a parts list — the story of designing, building, and dialing in a high-performance " +
    "AMD workstation for software engineering, AI development, Linux, Windows, and 4K gaming.",
  overview: {
    lead:
      "I decided to build a custom PC rather than buy a prebuilt machine because a hand-picked build " +
      "gives full control over quality, thermals, noise, and — most importantly — long-term " +
      "upgradeability. Prebuilts cut corners on power delivery, cooling, and proprietary parts; a " +
      "custom build lets every component earn its place.",
    reasons: [
      {
        label: "Control",
        text: "Choose every component for quality, silence, and airflow instead of accepting whatever a prebuilt ships with.",
      },
      {
        label: "Value",
        text: "Spend the budget on the parts that matter (GPU, cooling, PSU) rather than markup and proprietary boards.",
      },
      {
        label: "Longevity",
        text: "Standard parts on a modern AM5 platform mean I can upgrade the CPU, RAM, and storage for years to come.",
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
      detail: "Two M.2 NVMe drives — one dedicated to Windows 11, one to Pop!_OS for a clean dual boot.",
    },
    {
      category: "OS — Primary",
      name: "Windows 11",
      detail: "Gaming, video editing, and day-to-day productivity.",
    },
    {
      category: "OS — Secondary",
      name: "Pop!_OS (dual boot)",
      detail: "Linux development, AI tooling, and a first-class terminal environment.",
    },
    {
      // TODO: fill in the exact CPU model once finalized.
      category: "CPU",
      name: "AMD Ryzen (AM5) — TODO",
      detail: "Placeholder: add the exact Ryzen model, core count, and clocks.",
    },
    {
      // TODO: fill in RAM capacity, speed, and kit details.
      category: "Memory",
      name: "DDR5 — TODO",
      detail: "Placeholder: add RAM capacity (e.g. 32GB/64GB), speed, and EXPO profile.",
    },
    {
      // TODO: fill in storage capacities for each NVMe drive.
      category: "Storage capacities",
      name: "NVMe capacities — TODO",
      detail: "Placeholder: add the capacity of each SSD (e.g. 2TB Windows / 2TB Linux).",
    },
    {
      // TODO: add any additional components (fans, monitor, peripherals, etc.).
      category: "More",
      name: "Additional components — TODO",
      detail: "Placeholder: extra case fans, monitors, and peripherals can be listed here.",
    },
  ],
  hardwareNote:
    "TODO: several cards above are placeholders — CPU, RAM, and exact storage capacities will be " +
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
      text: "Tiny mounting screws and standoffs are fiddly — seating the drive at an angle first makes it far easier.",
    },
    {
      label: "Front-panel connectors",
      text: "The power/reset/LED header pins are unforgiving; the motherboard manual is essential for correct orientation.",
    },
    {
      label: "GPU power connections",
      text: "The RTX 5080 needs its power connector fully seated — a partial click can cause boot or stability issues.",
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
    note: "Currently enrolled — graduating April 2027",
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
