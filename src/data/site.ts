export type Profile = {
  name: string;
  title: string;
  tagline: string;
  location?: string;
  email: string;
  links: {
    linkedin: string;
    scholar: string;
    github: string;
  };
  cvUrl: string;
};

export type Highlight = {
  title: string;
  description: string;
};

export type Skills = {
  domain: string[];
  methods: string[];
  delivery: string[];
};

export type Project = {
  slug: string;
  title: string;
  tags: string[];
  academicSummary: string;
  industrySummary: string;
  role: string;
  methods: string[];
  outputs: { label: string; url: string }[];
  deliverables: string[];
  impactMetrics: string[];
  featured: boolean;
};

export type Publication = {
  title: string;
  venue: string;
  year: number;
  authors: string;
  url: string;
};

export type AcademicExtras = {
  researchInterests: string[];
  openQuestions: string[];
  talks: string[];
  awards: string[];
};

export type IndustryExtras = {
  problemSpaces: { title: string; description: string }[];
  workingStyle: string[];
  canDeliver: string[];
};

export const profile: Profile = {
  name: "Te-An (Hansen) Lee, MSc, ASCPi(CM)",
  title: "PhD student | Translational Scientist",
  tagline: "Eliminating bottlenecks from basic immunology to clinical translation.",
  location: "Melbourne, Australia",
  email: "tean.lee@student.unimelb.edu.au",
  links: {
    linkedin: "https://linkedin.com/in/your-handle",
    scholar: "https://scholar.google.com/your-profile",
    github: "https://github.com/your-handle"
  },
  cvUrl: "/cv.pdf"
};

export const highlights: Highlight[] = [
  {
    title: "Impact",
    description: "From basic immunology discovery to clinical translation."
  },
  {
    title: "Methods",
    description: "Multi-omics, high-throughput screening, and assay development across pipelines."
  },
  {
    title: "Domain",
    description: "Immuno-oncology and immunotherapy with cross-disciplinary teams."
  }
];

export const skills: Skills = {
  domain: ["Cancer immunology", "Immuotherapy", "Immuno-oncology", "Biomarkers"],
  methods: ["Single-cell analysis", "CRISPR screening", "T cell engineering", "Cancer-immune modeling"],
  delivery: ["Roadmap definition", "Cross-functional alignment", "Translational storytelling", "Reg-ready documentation"]
};

export const projects: Project[] = [
  {
    slug: "spatial-immune-map",
    title: "Spatial Immune Atlas",
    tags: ["Spatial Omics", "Immunology", "Data Products"],
    academicSummary:
      "Mapped tissue-resident immune programs to identify conserved stromal niches across disease cohorts.",
    industrySummary:
      "Built a spatial biomarker discovery pipeline enabling target validation across two clinical programs.",
    role: "Lead translational scientist",
    methods: ["Spatial transcriptomics", "Cell-type deconvolution", "Atlas integration"],
    outputs: [
      { label: "Dataset", url: "https://example.com/dataset" },
      { label: "Preprint", url: "https://example.com/preprint" }
    ],
    deliverables: ["Biomarker shortlist", "Decision-ready atlas", "Clinical stratification report"],
    impactMetrics: ["2x faster cohort selection", "15% higher response enrichment"],
    featured: true
  },
  {
    slug: "metabolic-target-ids",
    title: "Metabolic Target Validation",
    tags: ["CRISPR", "Metabolism", "Target Validation"],
    academicSummary:
      "Defined a mechanistic axis linking nutrient stress to immune escape using genome-scale CRISPR screens.",
    industrySummary:
      "Delivered a prioritized target panel with functional evidence for IND-enabling experiments.",
    role: "Project co-lead",
    methods: ["CRISPR screening", "Metabolomics", "Mechanistic assays"],
    outputs: [{ label: "Manuscript", url: "https://example.com/manuscript" }],
    deliverables: ["Target panel", "Assay SOPs", "Risk register"],
    impactMetrics: ["3 validated targets", "6-week validation sprint"],
    featured: true
  },
  {
    slug: "liquid-biopsy",
    title: "Liquid Biopsy Signal Engine",
    tags: ["Biomarkers", "ML", "Clinical"],
    academicSummary:
      "Integrated longitudinal cfDNA and protein signatures to model early relapse risk.",
    industrySummary:
      "Shipped a clinically actionable risk model with deployment-ready monitoring dashboards.",
    role: "Data science lead",
    methods: ["Multi-omics fusion", "Survival modeling", "Clinical informatics"],
    outputs: [
      { label: "Demo", url: "https://example.com/demo" },
      { label: "Poster", url: "https://example.com/poster" }
    ],
    deliverables: ["Model cards", "Clinical dashboard", "Validation plan"],
    impactMetrics: ["AUC 0.86", "20% earlier relapse detection"],
    featured: true
  },
  {
    slug: "assay-miniaturization",
    title: "Assay Miniaturization",
    tags: ["Assay Dev", "Automation", "Scale-up"],
    academicSummary:
      "Optimized multiplex assays to cut reagent usage while preserving dynamic range.",
    industrySummary:
      "Reduced assay cost per plate with automation-ready protocols for scale-out.",
    role: "Assay development owner",
    methods: ["DoE optimization", "Automation scripting", "QC analytics"],
    outputs: [{ label: "Protocol", url: "https://example.com/protocol" }],
    deliverables: ["Automation scripts", "QC dashboard", "Training pack"],
    impactMetrics: ["38% cost reduction", "2x throughput"],
    featured: false
  }
];

export const publications: Publication[] = [
  {
    title: "Post-translational Modification of PD-1: Potential Targets for Cancer Immunotherapy",
    venue: "Cancer Research",
    year: 2024,
    authors: "Lee TA, Tsai EY, Liu SH, Hsu Hung SD, Chang SJ, Chao CH, Lai YJ, Yamaguchi H, Li CW.",
    url: "https://10.1158/0008-5472.CAN-23-2664"
  },
  {
    title: "CRISPR atlas of nutrient stress response in tumor microenvironments",
    venue: "Cell Systems",
    year: 2023,
    authors: "Your Name, Coauthor C, Coauthor D",
    url: "https://example.com/publication-2"
  },
  {
    title: "Multi-omics signatures for early relapse prediction",
    venue: "Genome Biology",
    year: 2023,
    authors: "Your Name, Coauthor E, Coauthor F",
    url: "https://example.com/publication-3"
  },
  {
    title: "Systems pharmacology framework for target validation",
    venue: "Science Translational Medicine",
    year: 2022,
    authors: "Your Name, Coauthor G, Coauthor H",
    url: "https://example.com/publication-4"
  },
  {
    title: "Assay compression strategies for rapid translational studies",
    venue: "Nature Methods",
    year: 2021,
    authors: "Your Name, Coauthor I, Coauthor J",
    url: "https://example.com/publication-5"
  }
];

export const academicExtras: AcademicExtras = {
  researchInterests: [
    "Spatially resolved immunology and tissue niches",
    "Metabolic dependencies in tumor microenvironments",
    "Translational biomarkers for early response prediction",
    "Mechanistic bridges between omics and clinical endpoints"
  ],
  openQuestions: [
    "How can we predict therapeutic response before phenotypic shifts emerge?",
    "Which stromal signals are actionable across solid tumor subtypes?",
    "What minimal biomarker panels can serve both clinical and discovery needs?"
  ],
  talks: [
    "Gordon Research Conference: Spatial Biology 2024",
    "AACR Poster Spotlight 2023"
  ],
  awards: ["Rising Translational Scientist Award 2022"]
};

export const industryExtras: IndustryExtras = {
  problemSpaces: [
    {
      title: "Biomarker Strategy",
      description: "Designing fit-for-purpose biomarker stacks that align with clinical timelines."
    },
    {
      title: "Assay Development",
      description: "Building scalable assays that retain mechanistic insight and QC rigor."
    },
    {
      title: "Multi-omics Insight",
      description: "Connecting omics signals to decision-making frameworks for portfolio teams."
    },
    {
      title: "Target Validation",
      description: "De-risking targets with reproducible evidence across systems."
    }
  ],
  workingStyle: [
    "Translate scientific complexity into stakeholder-ready narratives",
    "Document decisions with reproducible, audit-friendly workflows",
    "Move fast with clear hypotheses and staged validation gates",
    "Partner across biology, data, and clinical teams"
  ],
  canDeliver: [
    "Biomarker strategy decks",
    "Assay SOPs and QC dashboards",
    "Translational roadmaps",
    "Cross-team briefing docs"
  ]
};
