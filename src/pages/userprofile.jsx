import PatientProfileCard from "../components/profile/PatientProfileCard";
import PersonalInfoCard from "../components/profile/PersonalInfoCard";
import AddressInfoCard from "../components/profile/AddressInfoCard";


const patientData = {
  id: "PT-2024-0892",
  name: "Iman Datta",
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

const Profile = () => {
  const handleEdit = () => {
    console.log("Edit profile clicked");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-6xl mx-auto px-8 py-12">
        <div className="grid grid-cols-12 gap-10">

          {/* LEFT COLUMN */}
          <div className="col-span-4 sticky top-12 self-start space-y-6">

            {/* Welcome Section */}
            <div className="space-y-1">
              <p className="text-sm font-medium text-gray-500">
                Welcome back
              </p>

              <h1 className="text-3xl font-semibold text-gray-900 leading-tight">
                Hi <span className="text-blue-600">{patientData.name.split(" ")[0]}</span>!
              </h1>

              <p className="text-gray-500">
                Welcome to your profile.
              </p>
            </div>

            {/* Patient Card */}
            <PatientProfileCard
              patient={patientData}
              onEdit={handleEdit}
            />
          </div>

          {/* RIGHT COLUMN */}
          <div className="col-span-8 space-y-6">
            <PersonalInfoCard patient={patientData} />
            <AddressInfoCard address={patientData.address} />
          </div>

        </div>
      </main>
    </div>
  );
};

export default Profile;