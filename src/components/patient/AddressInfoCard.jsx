import { MapPin, Home, Building, Globe } from "lucide-react";

const Field = ({ label, value, icon }) => (
  <div className="space-y-1">
    <p className="text-xs font-medium text-gray-500">{label}</p>
    <div className="flex items-center gap-2 text-gray-900 font-medium">
      {icon && <span className="text-gray-400">{icon}</span>}
      <span>{value}</span>
    </div>
  </div>
);

const AddressInfoCard = ({ address }) => {
  return (
    <div className="bg-white rounded-xl shadow-md">

      {/* Header */}
      <div className="flex items-center gap-2 px-6 py-4 border-b">
        <MapPin className="h-4 w-4 text-blue-600" />
        <h2 className="font-semibold text-gray-900">
          Address Information
        </h2>
      </div>

      {/* Content */}
      <div className="p-6 grid grid-cols-2 gap-x-8 gap-y-6">
        <div className="col-span-2">
          <Field
            label="Street Address"
            value={address.street}
            icon={<Home className="h-4 w-4" />}
          />
        </div>

        <Field
          label="City"
          value={address.city}
          icon={<Building className="h-4 w-4" />}
        />

        <Field
          label="State"
          value={address.state}
        />

        <Field
          label="Country"
          value={address.country}
          icon={<Globe className="h-4 w-4" />}
        />
      </div>

    </div>
  );
};

export default AddressInfoCard;
