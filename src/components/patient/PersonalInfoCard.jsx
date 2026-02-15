import { User, Calendar, Phone, Mail, Briefcase } from "lucide-react";

const Field = ({ label, value, icon }) => (
  <div className="space-y-1">
    <p className="text-xs font-medium text-gray-500">{label}</p>
    <div className="flex items-center gap-2 text-gray-900 font-medium">
      {icon && <span className="text-gray-400">{icon}</span>}
      <span>{value}</span>
    </div>
  </div>
);

const PersonalInfoCard = ({ patient }) => {
  return (
    <div className="bg-white rounded-xl shadow-md">
      
      {/* Header */}
      <div className="flex items-center gap-2 px-6 py-4 border-b">
        <User className="h-4 w-4 text-blue-600" />
        <h2 className="font-semibold text-gray-900">
          Personal Information
        </h2>
      </div>

      {/* Content */}
      <div className="p-6 grid grid-cols-2 gap-x-8 gap-y-6">
        <Field label="Full Name" value={patient.name} />

        <Field
          label="Date of Birth"
          value={patient.dateOfBirth}
          icon={<Calendar className="h-4 w-4" />}
        />

        <Field label="Age" value={`${patient.age} years`} />

        <Field label="Gender" value={patient.gender} />

        <Field
          label="Occupation"
          value={patient.occupation}
          icon={<Briefcase className="h-4 w-4" />}
        />

        <Field
          label="Contact Number"
          value={patient.phone}
          icon={<Phone className="h-4 w-4" />}
        />

        <div className="col-span-2">
          <Field
            label="Email Address"
            value={patient.email}
            icon={<Mail className="h-4 w-4" />}
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoCard;
