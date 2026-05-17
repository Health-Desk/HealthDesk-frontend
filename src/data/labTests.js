import {
  Droplets,
  HeartPulse,
  Activity,
  Candy,
  Dna,
  ShieldPlus,
  Sun,
  Pill,
} from "lucide-react";

const labTests = [
  {
    id: 1,
    name: "Complete Blood Count",
    category: "Blood Tests",
    price: 499,
    reportTime: "24 Hours",
    fastingRequired: false,
    homeCollection: true,
    popular: true,
    icon: Droplets,
    description:
      "Measures RBC, WBC, hemoglobin, and platelets to evaluate overall health.",
  },

  {
    id: 2,
    name: "Lipid Profile",
    category: "Blood Tests",
    price: 699,
    reportTime: "24 Hours",
    fastingRequired: true,
    homeCollection: true,
    popular: false,
    icon: HeartPulse,
    description:
      "Checks cholesterol and triglyceride levels to assess heart health.",
  },

  {
    id: 3,
    name: "HbA1c",
    category: "Diabetes",
    price: 549,
    reportTime: "12 Hours",
    fastingRequired: false,
    homeCollection: true,
    popular: true,
    icon: Activity,
    description:
      "Measures average blood sugar levels over the past 3 months.",
  },

  {
    id: 4,
    name: "Fasting Blood Sugar",
    category: "Diabetes",
    price: 299,
    reportTime: "6 Hours",
    fastingRequired: true,
    homeCollection: true,
    popular: false,
    icon: Candy,
    description:
      "Checks blood glucose level after fasting for accurate diabetes screening.",
  },

  {
    id: 5,
    name: "Thyroid Panel (T3, T4, TSH)",
    category: "Thyroid",
    price: 799,
    reportTime: "24 Hours",
    fastingRequired: false,
    homeCollection: true,
    popular: true,
    icon: Dna,
    description:
      "Evaluates thyroid gland function and hormone balance.",
  },

  {
    id: 6,
    name: "Liver Function Test",
    category: "Liver",
    price: 599,
    reportTime: "18 Hours",
    fastingRequired: true,
    homeCollection: false,
    popular: false,
    icon: ShieldPlus,
    description:
      "Measures enzymes and proteins to assess liver health and function.",
  },

  {
    id: 7,
    name: "Vitamin D",
    category: "Vitamins",
    price: 899,
    reportTime: "48 Hours",
    fastingRequired: false,
    homeCollection: true,
    popular: true,
    icon: Sun,
    description:
      "Checks vitamin D levels important for bones and immunity.",
  },

  {
    id: 8,
    name: "Vitamin B12",
    category: "Vitamins",
    price: 749,
    reportTime: "24 Hours",
    fastingRequired: false,
    homeCollection: true,
    popular: false,
    icon: Pill,
    description:
      "Measures Vitamin B12 levels to detect deficiency and fatigue issues.",
  },
];

export default labTests;