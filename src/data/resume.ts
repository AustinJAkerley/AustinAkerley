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
  url: string;
  urlLabel: string;
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
];

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
