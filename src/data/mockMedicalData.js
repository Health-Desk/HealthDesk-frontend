export const patientProfile = {
  id: "HD-2026-04567",
  name: "Iman Datta",
  age: 20,
  gender: "Male",
  bloodGroup: "B+",
  height: "172 cm",
  weight: "74 kg",
  bmi: 25.0,
  allergies: ["Penicillin", "Dust"],
  conditions: ["Mild Asthma"],
};

export const lastVisit = {
  doctor: "Dr. R. Sharma",
  specialty: "General Physician",
  date: "12 Feb 2026",
  diagnosis: "Viral Fever",
  hospital: "HealthFirst Clinic, Mumbai",
};

export const medications = [
  {
    name: "Vitamin D3 60000 IU",
    dosage: "Once Weekly",
    since: "Jan 2026",
  },
  {
    name: "Montelukast 10mg",
    dosage: "Once at Night",
    since: "Dec 2025",
  },
  {
    name: "Multivitamin (Becosules)",
    dosage: "Once Morning",
    since: "Jan 2026",
  },
];

export const labResults = [
  {
    test: "Hemoglobin",
    value: "13.5 g/dL",
    reference: "13.0–17.0 g/dL",
    status: "Normal",
  },
  {
    test: "Total Cholesterol",
    value: "220 mg/dL",
    reference: "<200 mg/dL",
    status: "Borderline",
  },
  {
    test: "Fasting Blood Sugar",
    value: "102 mg/dL",
    reference: "70–100 mg/dL",
    status: "Borderline",
  },
  {
    test: "Creatinine",
    value: "0.9 mg/dL",
    reference: "0.7–1.3 mg/dL",
    status: "Normal",
  },
];




//////////////---------------------------------

// src/data/mockData.js

export const drugs = [
  {
    name: "Paracetamol",
    category: "Analgesic / Antipyretic",
    drugClass: "Non-opioid analgesic",
    indication: "Mild to moderate pain, fever",
    dosage: "500–1000 mg every 4–6 hours (max 4 g/day)",
    sideEffects: "Rare at therapeutic doses; hepatotoxicity in overdose",
    type: "OTC",
    filterTag: "Pain Relief",
    emoji: "💊",
  },
  {
    name: "Amoxicillin",
    category: "Antibiotic",
    drugClass: "Penicillin-type (Beta-lactam)",
    indication: "Bacterial infections (ear, throat, lung, UTI)",
    dosage: "250–500 mg every 8 hours",
    sideEffects: "Diarrhea, rash, nausea",
    type: "Rx",
    filterTag: "Antibiotics",
    emoji: "🧬",
  },
  {
    name: "Ibuprofen",
    category: "NSAID",
    drugClass: "Non-steroidal anti-inflammatory",
    indication: "Pain, inflammation, fever",
    dosage: "200–400 mg every 4–6 hours (max 1200 mg/day OTC)",
    sideEffects: "GI upset, headache, dizziness",
    type: "OTC",
    filterTag: "Pain Relief",
    emoji: "🔵",
  },
  {
    name: "Cetirizine",
    category: "Antihistamine",
    drugClass: "H1-receptor antagonist",
    indication: "Allergic rhinitis, urticaria, hay fever",
    dosage: "10 mg once daily",
    sideEffects: "Drowsiness, dry mouth",
    type: "OTC",
    filterTag: "Allergy",
    emoji: "🌿",
  },
  {
    name: "Azithromycin",
    category: "Antibiotic",
    drugClass: "Macrolide antibiotic",
    indication: "Respiratory and skin bacterial infections",
    dosage: "500 mg day 1, then 250 mg days 2–5",
    sideEffects: "Nausea, vomiting, abdominal pain",
    type: "Rx",
    filterTag: "Antibiotics",
    emoji: "🔬",
  },
  {
    name: "Loratadine",
    category: "Antihistamine",
    drugClass: "Non-sedating H1-blocker",
    indication: "Seasonal allergies, hives",
    dosage: "10 mg once daily",
    sideEffects: "Headache, dry mouth (non-sedating)",
    type: "OTC",
    filterTag: "Allergy",
    emoji: "🍃",
  },
  {
    name: "Omeprazole",
    category: "Proton Pump Inhibitor",
    drugClass: "PPI",
    indication: "GERD, peptic ulcer, acid reflux",
    dosage: "20 mg once daily before meal",
    sideEffects: "Headache, nausea, diarrhea",
    type: "OTC",
    filterTag: "Digestive",
    emoji: "🫁",
  },
  {
    name: "Metformin",
    category: "Antidiabetic",
    drugClass: "Biguanide",
    indication: "Type 2 diabetes mellitus",
    dosage: "500–1000 mg twice daily with meals",
    sideEffects: "GI discomfort, lactic acidosis (rare)",
    type: "Rx",
    filterTag: "Chronic Care",
    emoji: "💉",
  },
   {
    name: "Imaan",
    category: "Antidiabetic",
    drugClass: "Biguanide",
    indication: "Type 6 diabetes mellitus",
    dosage: "500–1000 mg twice daily with meals",
    sideEffects: "GI discomfort, lactic acidosis (rare)",
    type: "Rx",
    filterTag: "Chronic Care",
    emoji: "💉",
  },
];

export const FILTERS = [
  "All",
  "Pain Relief",
  "Fever",
  "Allergy",
  "Antibiotics",
  "Digestive",
  "Chronic Care",
];

export const RECOMMENDATIONS = drugs.slice(0, 5);