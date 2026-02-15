import PatientProfileCard from "../components/patient/PatientProfileCard";
import PersonalInfoCard from "../components/patient/PersonalInfoCard";
import AddressInfoCard from "../components/patient/AddressInfoCard";


// Mock patient data
const patientData = {
  id: "PT-2024-0892",
  name: "Sarah Johnson",
  dateOfBirth: "March 15, 1985",
  age: 38,
  gender: "Female",
  occupation: "Software Engineer",
  phone: "+1 (555) 234-5678",
  email: "sarah.johnson@email.com",
  address: {
    street: "1247 Oak Boulevard, Apt 12B",
    city: "San Francisco",
    state: "California",
    country: "United States",
  },
  photoUrl: undefined,
};

const Index = () => {
  const handleEdit = () => {
    console.log("Edit profile clicked");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-6xl mx-auto px-6 md:px-12 py-12 md:py-16">
        <div className="grid grid-cols-12 gap-8 md:gap-12">

          {/* Left Column - Sticky Patient Section */}
          <div className="col-span-12 md:col-span-4 md:sticky md:top-12 self-start space-y-6">

            {/* Welcome Section */}
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-500">Welcome back</p>

              <h1 className="text-3xl font-semibold text-gray-900 leading-tight">
                Hi{" "}
                <span className="text-blue-600">
                  {patientData.name.split(" ")[0]}
                </span>
                !
              </h1>

              <p className="text-gray-500">
                Welcome to your profile.
              </p>
            </div>

            {/* Patient Summary Card */}
            <PatientProfileCard
              patient={patientData}
              onEdit={handleEdit}
            />
          </div>

          {/* Right Column - Main Content Area */}
          <div className="col-span-12 md:col-span-8 space-y-6">

            {/* Personal Information Card */}
            <PersonalInfoCard patient={patientData} />

            {/* Address Information Card */}
            <AddressInfoCard address={patientData.address} />
          </div>

        </div>
      </main>
    </div>
  );
};

export default Index;
