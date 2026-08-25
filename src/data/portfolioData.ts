import { Project, ExperienceItem, EducationItem, DiseaseRecord } from '../types';

export const PERSONAL_INFO = {
  name: 'Midhun Balaji',
  title: 'AI & Computational Biology Student · Developer',
  institution: 'Sri Sathya Sai Institute of Higher Learning (SSSIHL)',
  location: 'Puttaparthi, Andhra Pradesh, India',
  email: 'midhunsssihl@gmail.com',
  phone: '+91 93931 85225',
  tagline: 'Building at the intersection of AI, biology and the web',
  heroDescription:
    'I’m an AI & Computational Biology student who enjoys building practical projects across machine learning, biology, web development, and creative technology. This site is a collection of the things I’m learning, making, and improving.',
  status: 'Open to Research Collaborations & Project Inquiries',
  socials: {
    linkedin: 'https://www.linkedin.com/in/midhunbalaji',
    github: 'https://github.com/midhun7523',
    youtube: 'https://bit.ly/midhunonyoutube',
    instagram: 'https://instagram.com/midhun_perabattula',
    portfolio: 'https://midhunbalaji.lovable.app/',
    sevaAi: 'https://seva-ai.netlify.app/',
  },
  stats: [
    { label: 'University Program', value: 'B.S. AI & Comp Bio' },
    { label: 'Institutions', value: 'SSSIHL, Puttaparthi' },
    { label: 'ML Accuracy (SEVA AI)', value: '96.0%' },
    { label: 'Interests', value: 'AI, Biology & Creative Tech' },
  ],
};

export const SKILL_CATEGORIES = [
  {
    title: 'Machine Learning & AI',
    skills: [
      'Supervised Learning',
      'Ensemble Voting Classifiers',
      'Deep Learning',
      'Random Forests & Decision Trees',
      'Naive Bayes Classifiers',
      'NLP Symptom Extraction',
      'Model Evaluation & Metrics',
    ],
  },
  {
    title: 'Computational Biology & Genomics',
    skills: [
      'Bioinformatics Pipelines',
      'Pathway Optimization',
      'Biological Systems Modeling',
      'Metabolic Carbon Sequestration',
      'Genomic Sequence Analysis',
      'Clinical Risk Stratification',
    ],
  },
  {
    title: 'Programming & Data Science',
    skills: [
      'Python',
      'R for Biostatistics',
      'Data Cleansing & Wrangling',
      'Pandas & NumPy',
      'Scikit-Learn',
      'Git & Version Control',
      'TypeScript & Modern Web',
    ],
  },
  {
    title: 'Creative & Communication',
    skills: [
      'Scientific Research Writing',
      'Data Visualization',
      'Video Editing & Media',
      'Technical Presentation',
      'Problem Solving',
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'hg-stores',
    title: 'HostelGeneralStores',
    subtitle: 'Modern E-Commerce Store Platform',
    icon: '🛍️',
    category: 'web',
    status: 'Live',
    description:
      'A full-featured digital retail web application engineered with responsive product discovery, instant category filtering, real-time shopping cart workflows, and clean checkout architecture.',
    longDescription:
      'HostelGeneralStores delivers a fluid, responsive shopping experience designed for high-conversion retail browsing. It incorporates clean state management for shopping baskets, modular product item cards, fast search filtering, and seamless multi-device responsiveness.',
    tags: ['React', 'TypeScript', 'E-Commerce', 'Web Systems', 'Tailwind CSS'],
    metrics: [
      { label: 'Platform', value: 'Web / Mobile' },
      { label: 'Architecture', value: 'Responsive SPA' },
      { label: 'Performance', value: 'Fast Load' },
      { label: 'Status', value: 'Production' },
    ],
    keyFeatures: [
      'Dynamic product catalog with multi-criteria category filtering',
      'Interactive cart drawer and persistent checkout state handling',
      'Mobile-first responsive interface with optimized asset delivery',
      'Clean component architecture with accessible semantic elements',
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Netlify'],
    link: 'https://hgstores.netlify.app/',
    linkLabel: 'Visit HostelGeneralStores',
    github: 'https://github.com/midhun7523',
  },
  {
    id: 'frame-forge-studio',
    title: 'Frame Forge Studio',
    subtitle: 'Creative Media & Digital Production Studio',
    icon: '🎬',
    category: 'web',
    status: 'Live',
    description:
      'A dynamic digital studio platform presenting creative video editing, visual storytelling, cinematic motion design, and multimedia production showcases.',
    longDescription:
      'Frame Forge Studio represents the digital home for high-impact visual media creation. Built with modern web engineering, it features structured project showreels, video production case studies, motion graphics portfolios, and seamless client consultation pathways.',
    tags: ['Creative Media', 'Motion Graphics', 'Video Production', 'Web Design'],
    metrics: [
      { label: 'Domain', value: 'Digital Media' },
      { label: 'Focus', value: 'Video & Motion' },
      { label: 'Platform', value: 'Custom Studio' },
      { label: 'Availability', value: 'Live' },
    ],
    keyFeatures: [
      'Showcase galleries for video editing and multimedia production work',
      'Modern dark-toned studio aesthetic with smooth interactive interactions',
      'Structured case studies explaining visual storytelling workflows',
      'Direct collaboration and inquiry funnel for creative media projects',
    ],
    techStack: ['Web Architecture', 'Video Editing', 'Motion Design', 'Tailwind CSS'],
    link: 'https://forgestudio.codeex.space/',
    linkLabel: 'Visit Frame Forge Studio',
    github: 'https://github.com/midhun7523',
  },
  {
    id: 'seva-ai',
    title: 'SEVA AI',
    subtitle: 'AI-Based Early Disease Detection & Triage · SSSIHL',
    icon: '🧬',
    category: 'ml',
    status: 'Live',
    description:
      'An ensemble machine learning diagnostic system trained on 4,920 patient records across 41 disease classes and 132 symptom features. Combines Random Forest, Naive Bayes, and Decision Tree via weighted majority-vote fusion to reach 96% accuracy.',
    longDescription:
      'SEVA AI was built to solve the diagnostic lag in primary rural and decentralized health clinics. By processing natural-language patient symptom reports and mapping them across 132 structured clinical indicators, the model produces a high-confidence primary diagnosis accompanied by clinical severity stratification (Low / Moderate / Critical) in under 2 seconds.',
    tags: ['Machine Learning', 'Healthcare AI', 'Ensemble Models', 'NLP', 'Bioinformatics'],
    metrics: [
      { label: 'Accuracy', value: '96.0%' },
      { label: 'Diseases', value: '41' },
      { label: 'Symptom Features', value: '132' },
      { label: 'Inference Speed', value: '<2s' },
    ],
    keyFeatures: [
      'Majority-vote ensemble combining Random Forest (95.8%), Naive Bayes (89.2%), and Decision Tree (88.4%)',
      'Trained on 4,920 structured clinical cases with zero data leakage validation',
      'Tri-tier triage risk categorizer for emergency and outpatient guidance',
      'Lightweight web client for rural clinical connectivity',
    ],
    techStack: ['Python', 'Scikit-Learn', 'Ensemble ML', 'NLP', 'Streamlit / Web'],
    link: 'https://seva-ai.netlify.app/',
    linkLabel: 'Launch Live SEVA AI',
    github: 'https://github.com/midhun7523',
    hasInteractiveDemo: true,
  },
  {
    id: 'carbon-capture',
    title: 'AI for Biological Carbon Capture',
    subtitle: 'Computational Biology & Sustainable Bio-Systems · SSSIHL',
    icon: '🌱',
    category: 'bio',
    status: 'In Progress',
    description:
      'Leveraging machine learning algorithms and metabolic flux balance modeling to identify and engineer hyper-efficient biological pathways for carbon sequestration in microalgae and cyanobacterial strains.',
    longDescription:
      'Climate mitigation requires biology-informed scale. This research applies predictive machine learning models to analyze enzyme kinetics (RuBisCO and carbonic anhydrase mutants) and predict metabolic throughput under varying ambient CO2 gradients, discovering bio-catalytic pathways that maximize carbon fixation efficiency.',
    tags: ['Bioinformatics', 'Carbon Capture', 'Sustainability', 'Systems Biology', 'Python'],
    metrics: [
      { label: 'Methodology', value: 'ML + Flux' },
      { label: 'Domain', value: 'Bio-Catalysis' },
      { label: 'Stage', value: 'R&D Lab' },
      { label: 'Target', value: 'CO2 Fixation' },
    ],
    keyFeatures: [
      'In-silico genetic pathway modeling for enhanced photosynthetic carbon uptake',
      'Machine learning predictions of enzyme kinetic stability and mutation impacts',
      'Metabolic network optimization for scalable bioreactor integration',
      'Environmental impact simulations under fluctuating climate parameters',
    ],
    techStack: ['Python', 'BioPython', 'R Bioconductor', 'COBRApy', 'Machine Learning'],
    github: 'https://github.com/midhun7523',
  },
  {
    id: 'genomics-sandbox',
    title: 'Genomics & Molecular Sequence Analyzer',
    subtitle: 'Bioinformatics Algorithms & Pattern Discovery',
    icon: '🔬',
    category: 'research',
    status: 'Research',
    description:
      'Computational tools for biological sequence alignment, mutation frequency mapping, and secondary protein structure propensity prediction using machine learning representations.',
    longDescription:
      'A suite of computational genomics utilities designed to parse FASTA / GenBank datasets, compute k-mer frequency matrices, and utilize embedding representations to classify protein functional families with high statistical precision.',
    tags: ['Genomics', 'Sequence Alignment', 'Bioinformatics', 'Machine Learning'],
    metrics: [
      { label: 'Dataset', value: 'NCBI GenBank' },
      { label: 'Algorithms', value: 'Smith-Waterman / ML' },
      { label: 'Analysis', value: 'k-mer & Motif' },
    ],
    keyFeatures: [
      'Pairwise and multiple sequence alignment algorithm implementations',
      'Automated GC content and codon bias profiling',
      'Protein secondary structure prediction using sequence representations',
    ],
    techStack: ['Python', 'Biopython', 'Data Analysis', 'Visualization'],
    github: 'https://github.com/midhun7523',
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    period: '2025 – Present',
    role: 'AI & Computational Biology Student',
    organization: 'Sri Sathya Sai Institute of Higher Learning (SSSIHL)',
    location: 'Puttaparthi, India',
    description:
      'Pursuing an intensive B.S. curriculum combining advanced mathematics, machine learning theory, molecular genetics, and computational systems biology. Developing applied AI solutions for healthcare and ecological sustainability.',
    highlights: [
      'Engineered SEVA AI: 96% accuracy disease prediction ensemble model trained on 4,920 records',
      'Conducting research on biological carbon sequestration pathway optimization',
      'Collaborating on bioinformatics workflows and predictive clinical diagnostic tools',
    ],
    skillsLearned: ['Ensemble ML', 'Bioinformatics Pipelines', 'Scientific Inquiry', 'Biostatistics'],
  },
  {
    period: '2023 – 2025',
    role: 'Higher Secondary Science & Mathematics Scholar',
    organization: 'Sri Chaitanya College of Education',
    location: 'India',
    description:
      'Completed rigorous intermediate scientific education with specialized focus on Mathematics, Physics, and Chemistry, establishing strong foundations in quantitative analytical reasoning.',
    highlights: [
      'Mastered differential calculus, linear algebra, and probability theory',
      'Developed early programming foundations in algorithmic problem solving',
    ],
    skillsLearned: ['Calculus & Linear Algebra', 'Physics Modeling', 'Analytical Chemistry'],
  },
  {
    period: '2014 – 2023',
    role: 'Foundational STEM Student',
    organization: 'Sri Chaitanya Techno School',
    location: 'India',
    description:
      'Built a consistent record of academic excellence across natural sciences, mathematics, logic, and computing over nine formative school years.',
    skillsLearned: ['Science Foundations', 'Mathematical Logic', 'Computer Fundamentals'],
  },
];

export const EDUCATIONS: EducationItem[] = [
  {
    years: '2025 – 2029',
    degree: 'Bachelor of Science (B.S.) in Artificial Intelligence & Computational Biology',
    institution: 'Sri Sathya Sai Institute of Higher Learning (SSSIHL)',
    location: 'Puttaparthi, Andhra Pradesh, India',
    description:
      'A pioneering interdisciplinary undergraduate program exploring the synergy between advanced computational intelligence and life sciences. Focus on machine learning, bioinformatics, enzyme modeling, and healthcare innovation.',
    scoreOrFocus: 'AI & Life Sciences Specialization',
    coreSubjects: [
      'Machine Learning & Neural Networks',
      'Computational Molecular Biology',
      'Bioinformatics & Genome Data Analysis',
      'Biostatistics & Stochastic Modeling',
      'Algorithm Design & Data Structures',
    ],
  },
  {
    years: '2023 – 2025',
    degree: 'Higher Secondary Intermediate Education (MPC / Science & Mathematics)',
    institution: 'Sri Chaitanya College of Education',
    location: 'India',
    description:
      'Intensive STEM curriculum with a core focus on advanced mathematics, analytical physics, and chemical kinetics, providing quantitative rigor for computing and biology.',
    scoreOrFocus: 'Mathematics, Physics, Chemistry',
    coreSubjects: ['Calculus & Differential Equations', 'Mechanics & Thermodynamics', 'Chemical Equilibrium & Kinetics'],
  },
  {
    years: '2014 – 2023',
    degree: 'Primary & Secondary Schooling',
    institution: 'Sri Chaitanya Techno School',
    location: 'India',
    description:
      'Formative academic curriculum emphasizing science fundamentals, Olympiad mathematics, reasoning, and practical computer skills.',
    scoreOrFocus: 'Graduated with Academic Distinction',
    coreSubjects: ['General Sciences', 'Mathematics', 'Computer Science', 'Language Arts'],
  },
];

// Interactive SEVA AI Disease Simulation Dataset
export const SEVA_DISEASES: DiseaseRecord[] = [
  {
    disease: 'Viral Respiratory Infection',
    riskLevel: 'Moderate',
    requiredSymptoms: ['fever', 'cough', 'fatigue', 'headache'],
    confidenceScore: 96.4,
    clinicalSummary: 'Ensemble model identified signature acute upper respiratory viral symptom cluster.',
    recommendedAction: 'Hydration, symptomatic relief, and clinical follow-up if oxygen levels or high fever persists.',
    modelVotes: { randomForest: 97.2, naiveBayes: 94.5, decisionTree: 97.5 },
  },
  {
    disease: 'Dengue Viral Fever',
    riskLevel: 'Critical',
    requiredSymptoms: ['fever', 'joint_pain', 'fatigue', 'skin_rash', 'headache'],
    confidenceScore: 98.1,
    clinicalSummary: 'Severe arboviral symptom constellation detected with systemic musculoskeletal involvement.',
    recommendedAction: 'Immediate complete blood count (CBC) to monitor platelet count and fluid resuscitation.',
    modelVotes: { randomForest: 99.0, naiveBayes: 97.2, decisionTree: 98.0 },
  },
  {
    disease: 'Acute Bronchial Distress / Asthma',
    riskLevel: 'Critical',
    requiredSymptoms: ['cough', 'breathlessness', 'chest_tightness'],
    confidenceScore: 95.7,
    clinicalSummary: 'Lower airway obstructive cluster matching reactive bronchospasm profile.',
    recommendedAction: 'Bronchodilator administration, pulse oximetry monitoring, and urgent pulmonary consult.',
    modelVotes: { randomForest: 96.5, naiveBayes: 93.0, decisionTree: 97.5 },
  },
  {
    disease: 'Gastroenteritis & Enteric Infection',
    riskLevel: 'Moderate',
    requiredSymptoms: ['nausea', 'vomiting', 'abdominal_pain', 'fatigue'],
    confidenceScore: 94.8,
    clinicalSummary: 'Acute gastrointestinal inflammatory pattern with dehydration vulnerability.',
    recommendedAction: 'Oral rehydration therapy, electrolyte monitoring, and dietary resting.',
    modelVotes: { randomForest: 95.1, naiveBayes: 93.4, decisionTree: 96.0 },
  },
  {
    disease: 'Allergic Dermatitis & Urticaria',
    riskLevel: 'Low',
    requiredSymptoms: ['skin_rash', 'itching', 'swelling'],
    confidenceScore: 97.6,
    clinicalSummary: 'Cutaneous hypersensitivity response without systemic respiratory compromise.',
    recommendedAction: 'Non-sedating antihistamines, topical emollients, and allergen avoidance.',
    modelVotes: { randomForest: 98.2, naiveBayes: 96.8, decisionTree: 98.0 },
  },
  {
    disease: 'Rheumatoid Arthropathy / Joint Inflammation',
    riskLevel: 'Moderate',
    requiredSymptoms: ['joint_pain', 'swelling', 'fatigue'],
    confidenceScore: 93.5,
    clinicalSummary: 'Musculoskeletal inflammatory indicator pattern detected in multiple joint zones.',
    recommendedAction: 'Inflammatory marker panel (ESR, CRP, RF) and rheumatological evaluation.',
    modelVotes: { randomForest: 94.0, naiveBayes: 92.0, decisionTree: 94.5 },
  },
  {
    disease: 'Acute Migraine / Neurological Cephalea',
    riskLevel: 'Low',
    requiredSymptoms: ['headache', 'nausea', 'fatigue'],
    confidenceScore: 95.0,
    clinicalSummary: 'Neurovascular cephalea symptom profile with photophobia sensitivity markers.',
    recommendedAction: 'Quiet dark-room resting, prescribed triptan or NSAID analgesic, hydration.',
    modelVotes: { randomForest: 96.0, naiveBayes: 93.5, decisionTree: 95.5 },
  },
];

export const SYMPTOM_OPTIONS = [
  { id: 'fever', label: 'High Fever / Pyrexia', icon: '🌡️' },
  { id: 'cough', label: 'Persistent Cough', icon: '🫁' },
  { id: 'fatigue', label: 'Severe Fatigue', icon: '⚡' },
  { id: 'joint_pain', label: 'Joint & Muscle Pain', icon: '🦴' },
  { id: 'headache', label: 'Throbbing Headache', icon: '🧠' },
  { id: 'skin_rash', label: 'Skin Rash / Spots', icon: '🔴' },
  { id: 'breathlessness', label: 'Shortness of Breath', icon: '💨' },
  { id: 'chest_tightness', label: 'Chest Pressure / Tightness', icon: '❤️' },
  { id: 'nausea', label: 'Nausea & Queasiness', icon: '🤢' },
  { id: 'vomiting', label: 'Vomiting / Emesis', icon: '🤮' },
  { id: 'abdominal_pain', label: 'Abdominal Cramping', icon: '🩹' },
  { id: 'itching', label: 'Pruritus / Itching', icon: '✨' },
  { id: 'swelling', label: 'Peripheral Swelling', icon: '💧' },
];
