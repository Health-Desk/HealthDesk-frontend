import { useState, useRef } from "react";
import { User, Edit2, Camera } from "lucide-react";

const PatientProfileCard = ({ patient, onEdit }) => {
  const [photoUrl, setPhotoUrl] = useState(patient.photoUrl || null);
  const [isHoveringAvatar, setIsHoveringAvatar] = useState(false);
  const fileInputRef = useRef(null);

  const initials = patient.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  const handleEditClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const newUrl = event.target.result;
      setPhotoUrl(newUrl);
      if (onEdit) onEdit(newUrl);
    };
    reader.readAsDataURL(file);
    e.target.value = "";
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />

      <div className="flex flex-col items-center text-center">

        {/* Edit Button */}
        <div className="w-full flex justify-end -mt-1 -mr-1 mb-3">
          <button
            onClick={handleEditClick}
            className="p-2 rounded-lg text-gray-500 hover:text-blue-600 hover:bg-blue-50 transition-colors"
            title="Change profile photo"
          >
            <Edit2 className="h-4 w-4" />
          </button>
        </div>

        {/* Avatar with hover overlay */}
        <div
          className="relative h-20 w-20 rounded-full cursor-pointer"
          onClick={handleEditClick}
          onMouseEnter={() => setIsHoveringAvatar(true)}
          onMouseLeave={() => setIsHoveringAvatar(false)}
        >
          <div className="h-20 w-20 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-semibold border-4 border-blue-100 overflow-hidden">
            {photoUrl ? (
              <img
                src={photoUrl}
                alt={patient.name}
                className="h-full w-full rounded-full object-cover"
              />
            ) : (
              initials
            )}
          </div>

          {/* Hover overlay */}
          {isHoveringAvatar && (
            <div className="absolute inset-0 rounded-full bg-black bg-opacity-40 flex items-center justify-center border-4 border-blue-100">
              <Camera className="h-6 w-6 text-white" />
            </div>
          )}
        </div>

        {/* Patient Name */}
        <h2 className="mt-4 text-xl font-semibold text-gray-900">
          {patient.name}
        </h2>

        {/* Age & Gender */}
        <p className="mt-1 text-sm text-gray-500">
          {patient.age} years • {patient.gender}
        </p>

        {/* Patient ID Badge */}
        <div className="mt-5 inline-flex items-center gap-2 px-3 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
          <User className="h-3.5 w-3.5" />
          <span>ID: {patient.id}</span>
        </div>

      </div>
    </div>
  );
};

export default PatientProfileCard;