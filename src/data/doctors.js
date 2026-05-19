const doctors = [
  {
    id: 1,
    name: "Dr. Rohan Sharma",
    specialization: "Cardiologist",
    rating: 4.8,
    experience: "12 Years",
    qualification: "MBBS, MD (Cardiology)",
    hospital: "Apollo Hospital",
    fee: 800,
    languages: ["English", "Hindi"],
    availability: "Mon - Sat",
    about:
      "Experienced cardiologist specializing in heart disease prevention, hypertension, and advanced cardiac care.",
    reviews: [
      {
        user: "Amit",
        comment: "Very polite and explained everything clearly.",
      },
      {
        user: "Sneha",
        comment: "Excellent doctor with great experience.",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d",
  },

  {
    id: 2,
    name: "Dr. Ananya Roy",
    specialization: "Cardiologist",
    rating: 4.6,
    experience: "9 Years",
    qualification: "MBBS, DM (Cardiology)",
    hospital: "Fortis Hospital",
    fee: 700,
    languages: ["English", "Bengali"],
    availability: "Tue - Sun",
    about:
      "Focused on preventive cardiology and lifestyle-based treatment plans.",
    reviews: [
      {
        user: "Rahul",
        comment: "Very caring and patient-friendly.",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f",
  },

  {
    id: 3,
    name: "Dr. Priya Mehta",
    specialization: "Dermatologist",
    rating: 4.9,
    experience: "10 Years",
    qualification: "MBBS, MD (Dermatology)",
    hospital: "Medica Superspecialty",
    fee: 600,
    languages: ["English", "Hindi"],
    availability: "Mon - Fri",
    about:
      "Expert in skin treatments, acne care, cosmetic dermatology, and laser therapy.",
    reviews: [
      {
        user: "Neha",
        comment: "My acne treatment worked really well.",
      },
      {
        user: "Ritika",
        comment: "Professional and friendly doctor.",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2",
  },

  {
    id: 4,
    name: "Dr. Arjun Gupta",
    specialization: "Dermatologist",
    rating: 4.7,
    experience: "8 Years",
    qualification: "MBBS, DVD",
    hospital: "AMRI Hospital",
    fee: 550,
    languages: ["English", "Hindi"],
    availability: "Mon - Sat",
    about:
      "Specializes in eczema, pigmentation, and skin allergy treatments.",
    reviews: [
      {
        user: "Tina",
        comment: "Very knowledgeable and supportive.",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d",
  },

  {
    id: 5,
    name: "Dr. Vikram Khanna",
    specialization: "Neurologist",
    rating: 4.9,
    experience: "15 Years",
    qualification: "MBBS, DM (Neurology)",
    hospital: "Ruby General Hospital",
    fee: 1000,
    languages: ["English", "Hindi"],
    availability: "Wed - Sun",
    about:
      "Experienced neurologist treating migraines, epilepsy, stroke, and neurological disorders.",
    reviews: [
      {
        user: "Sourav",
        comment: "Helped my father recover after stroke treatment.",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1582750433449-648ed127bb54",
  },

  {
    id: 6,
    name: "Dr. Neha Kapoor",
    specialization: "Neurologist",
    rating: 4.7,
    experience: "11 Years",
    qualification: "MBBS, MD, DM (Neurology)",
    hospital: "Peerless Hospital",
    fee: 900,
    languages: ["English", "Bengali"],
    availability: "Mon - Thu",
    about:
      "Dedicated to neurological care with expertise in movement disorders and nerve-related diseases.",
    reviews: [
      {
        user: "Ankit",
        comment: "Very patient and understanding doctor.",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1651008376811-b90baee60c1f",
  },
];

export default doctors;