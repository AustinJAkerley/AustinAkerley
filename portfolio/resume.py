"""Structured resume data for Austin Akerley's portfolio site.

Keeping the content in a single, well-typed module makes it trivial to update
the site without touching templates or views.
"""

PROFILE = {
    "name": "Austin Akerley",
    "title": "Senior Software Engineer",
    "tagline": "Cryptography & security specialist building highly available, cloud-native systems.",
    "location": "Bellevue, WA",
    "email": "austin.akerley@outlook.com",
    "phone": "817-229-7818",
    "linkedin": "https://linkedin.com/in/AustinAkerley",
    "linkedin_label": "linkedin.com/in/AustinAkerley",
    "summary": (
        "Senior Software Engineer specializing in cryptography, public key "
        "infrastructure, and large-scale distributed systems. I design and "
        "scale secure cloud platforms — from hardware security modules and "
        "key management to tier-4 datacenters protecting the highest "
        "security customers."
    ),
}

# Quick stat highlights for the hero section.
STATS = [
    {"value": "6+", "label": "Years building secure systems"},
    {"value": "1000+", "label": "Physical servers managed"},
    {"value": "500", "label": "HSM-backed bare-metal hosts orchestrated"},
    {"value": "73", "label": "Micro-services debugged across 15 teams"},
]

EXPERIENCE = [
    {
        "company": "Microsoft — PKI Team",
        "role": "Senior Software Engineer",
        "start": "May 2025",
        "end": "Current",
        "logo": "microsoft",
        "highlights": [
            {
                "label": "Product",
                "text": (
                    "Responsible for critical tier-4 datacenters that host "
                    "Microsoft's Public Key Infrastructure (MSPKI), CodeSign, "
                    "and Malware Scanning services."
                ),
            },
            {
                "label": "Primary Role",
                "text": (
                    "Design and scale the PKI infrastructure of our core "
                    "security services while improving cryptographic security "
                    "by utilizing TPMs."
                ),
            },
            {
                "label": "Secondary Role",
                "text": (
                    "Datacenter buildout, security, and maintenance. Managing "
                    "over 1000 physical servers across 3 datacenters for the "
                    "highest security customers."
                ),
            },
        ],
    },
    {
        "company": "Oracle Cloud (OCI) — KMS",
        "role": "Software Engineer II",
        "start": "Feb 2022",
        "end": "May 2025",
        "logo": "oracle",
        "highlights": [
            {
                "label": "Product",
                "text": (
                    "Key Management Service (KMS) — a cloud service that "
                    "manages the encryption keys used to protect sensitive data."
                ),
            },
            {
                "label": "Primary Role",
                "text": (
                    "Hardware Security Module (HSM) integration expert "
                    "specializing in C/C++ to integrate vendor-provided HSM "
                    "cards as the core foundation for trust and security in "
                    "KMS. Led the orchestration of HSM changes across 500 "
                    "bare-metal hosts."
                ),
            },
            {
                "label": "Secondary Role",
                "text": (
                    "Implemented cryptographic algorithms for KMS APIs in Java "
                    "for an upcoming small-footprint dedicated cloud offering."
                ),
            },
            {
                "label": "Smaller Projects",
                "text": (
                    "Built a developer tool in Python for validating OCI alarm "
                    "infrastructure — now a required step in new OCI cloud "
                    "service creation."
                ),
            },
        ],
    },
    {
        "company": "Microsoft O365 — Teams",
        "role": "Site Reliability Engineer II",
        "start": "Nov 2020",
        "end": "Feb 2022",
        "logo": "microsoft",
        "highlights": [
            {
                "label": "Product",
                "text": "Dedicated Top Secret government Azure cloud region.",
            },
            {
                "label": "Primary Role",
                "text": (
                    "Top Secret SCI w/ Poly cleared SRE. Deployed the "
                    "infrastructure and application for MS Teams to 2 dedicated "
                    "cloud regions using IaC & automation."
                ),
            },
            {
                "label": "Secondary Role",
                "text": (
                    "Deployed the infrastructure and application for Azure "
                    "DevOps pipelines in the secure cloud regions. Automated "
                    "tasks with Powershell and Python."
                ),
            },
            {
                "label": "Smaller Projects",
                "text": (
                    "Debugged app and infra issues for 73 micro-services across "
                    "15 teams, implemented region-specific fixes, and "
                    "contributed heavily to operational and onboarding "
                    "documentation."
                ),
            },
        ],
    },
    {
        "company": "Lockheed Martin Space",
        "role": "Cyber Software Engineer",
        "start": "May 2019",
        "end": "Nov 2020",
        "logo": "lockheed",
        "highlights": [
            {
                "label": "Product",
                "text": (
                    "A custom Network Interface Device (NID) with a Xilinx "
                    "System on Chip (SoC) FPGA for the F-35 fighter jet."
                ),
            },
            {
                "label": "Primary Role",
                "text": (
                    "System Verilog developer implementing our primary FPGA "
                    "cyber components."
                ),
            },
            {
                "label": "Secondary Role",
                "text": (
                    "Completed major feature development for our SoC kernel "
                    "modules in C++."
                ),
            },
        ],
    },
]

EDUCATION = [
    {
        "school": "University of Washington",
        "degree": "Master of Science, Computer Science",
        "note": "Currently enrolled — graduating April 2027",
        "extras": [],
    },
    {
        "school": "Texas A&M University",
        "degree": "Bachelor of Science, Computer Engineering",
        "note": "Minors: Cyber Security & Mathematics",
        "extras": [
            "Paid Research Assistant — created agricultural software for the "
            "Noble Research Institute.",
        ],
    },
]

SKILLS = [
    "Cryptography & security specialist",
    "Creating, maintaining, and monitoring highly distributed systems that "
    "require high availability",
    "Proficient in state management design",
    "Cloud expert — designing cloud-native applications and automation",
    "Debugging with tools such as valgrind & gdb",
    "Customer-facing front end: Expo, Tailwind, Node JS, React Native, Typescript",
    "Modern back end: Python, Django, T3 GraphQL, JWT OAuth, AWS, OCI, Azure",
]

LANGUAGES = [
    "Python",
    "C++ & C",
    "C#",
    "Java",
    "Linux Shell",
    "HDLs",
    "Typescript",
    "IaC / Terraform",
    "HTML / CSS",
]


def get_context():
    """Return the full resume context used to render the portfolio."""
    return {
        "profile": PROFILE,
        "stats": STATS,
        "experience": EXPERIENCE,
        "education": EDUCATION,
        "skills": SKILLS,
        "languages": LANGUAGES,
    }
