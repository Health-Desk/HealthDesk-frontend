import React from "react";

const HealthCareLanding = () => {
  return (
    <>
      {/* BACKGROUND */}
      <div 
        className="fixed inset-0 -z-20 bg-cover bg-center blur-lg scale-110"
        style={{
          backgroundImage: "url('https://investorplace.com/wp-content/uploads/2019/08/healthcare1600a.jpg')"
        }}
      />
      <div className="fixed inset-0 -z-10 bg-white/75" />

      {/* CONTENT */}
      <div className="">

        {/* SLIDE 1 — HERO */}
        <section className="h-screen snap-start flex items-center px-12 lg:px-24 border-l-8 border-teal-700">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center w-full">
            <div>
              <p className="text-sm font-bold tracking-widest uppercase text-teal-700 mb-4">
                Smart Healthcare Platform
              </p>

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6 text-teal-700">
                Smart Healthcare, <br />
                Simplified for Everyone
              </h1>

              <p className="text-lg leading-relaxed max-w-xl mb-7 text-gray-700">
                HealthCare+ helps patients book appointments, consult doctors,
                manage medical records, and receive AI-powered health guidance
                through one secure digital platform.
              </p>

              <ul className="space-y-3">
                <li className="flex items-center gap-3 font-medium text-gray-700">
                  <span className="text-teal-700 font-bold text-xl">✓</span>
                  Easy appointment scheduling
                </li>
                <li className="flex items-center gap-3 font-medium text-gray-700">
                  <span className="text-teal-700 font-bold text-xl">✓</span>
                  AI health assistant for quick guidance
                </li>
                <li className="flex items-center gap-3 font-medium text-gray-700">
                  <span className="text-teal-700 font-bold text-xl">✓</span>
                  Digital medical reports & lab tests
                </li>
                <li className="flex items-center gap-3 font-medium text-gray-700">
                  <span className="text-teal-700 font-bold text-xl">✓</span>
                  Mental wellness & preventive care
                </li>
              </ul>
            </div>

            <div>
              <img
                src="https://investorplace.com/wp-content/uploads/2019/08/healthcare1600a.jpg"
                alt="Smart Healthcare Platform"
                className="w-full h-96 object-cover rounded-2xl border border-teal-200 shadow-xl"
              />
            </div>
          </div>
        </section>

        {/* SLIDE 2 — SERVICES */}
        <section className="h-screen snap-start flex items-center px-12 lg:px-24 border-l-8 border-teal-700">
          <div className="w-full">
            <h1 className="text-5xl font-semibold text-teal-700 mb-8">Our Services</h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-7 bg-white/95 border border-teal-200 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-teal-700 mb-3">Schedule Appointments</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Book online or in-person consultations with verified doctors.
                </p>
                <button className="px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition-colors">
                  Book Appointment
                </button>
              </div>

              <div className="p-7 bg-white/95 border border-teal-200 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-teal-700 mb-3">AI Health Assistant</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Instant health guidance and symptom insights.
                </p>
                <button className="px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition-colors">
                  Ask AI
                </button>
              </div>

              <div className="p-7 bg-white/95 border border-teal-200 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-teal-700 mb-3">Lab Test Booking</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Book diagnostic tests and receive reports digitally.
                </p>
                <button className="px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition-colors">
                  Book Test
                </button>
              </div>

              <div className="p-7 bg-white/95 border border-teal-200 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-teal-700 mb-3">Health Insights</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Track health trends and wellness metrics.
                </p>
                <button className="px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition-colors">
                  View Insights
                </button>
              </div>

              <div className="p-7 bg-white/95 border border-teal-200 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-teal-700 mb-3">Medical Reports</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Securely manage prescriptions and reports.
                </p>
                <button className="px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition-colors">
                  View Reports
                </button>
              </div>

              <div className="p-7 bg-white/95 border border-teal-200 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-teal-700 mb-3">Mental Wellness</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Tools and resources for emotional well-being.
                </p>
                <button className="px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition-colors">
                  Explore Wellness
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* SLIDE 3 — FAQ */}
        <section className="h-screen snap-start flex items-start justify-center pt-16 px-12 lg:px-24 border-l-8 border-teal-700">
          <div className="text-center w-full max-w-4xl">
            <h1 className="text-5xl font-semibold text-teal-700 mb-12">FAQs</h1>
            
            <div className="space-y-6 text-left">
              <div className="p-6 bg-white/95 border border-teal-200 rounded-xl shadow-md">
                <p className="font-semibold text-teal-700 text-lg mb-2">Is my data secure?</p>
                <p className="text-gray-600">Yes, all data is encrypted and protected with industry-standard security protocols.</p>
              </div>
              
              <div className="p-6 bg-white/95 border border-teal-200 rounded-xl shadow-md">
                <p className="font-semibold text-teal-700 text-lg mb-2">Does AI replace doctors?</p>
                <p className="text-gray-600">No, our AI assistant only provides guidance and insights. Always consult a healthcare professional for medical decisions.</p>
              </div>
              
              <div className="p-6 bg-white/95 border border-teal-200 rounded-xl shadow-md">
                <p className="font-semibold text-teal-700 text-lg mb-2">Can I access reports anytime?</p>
                <p className="text-gray-600">Yes, all your medical reports and records are accessible 24/7 through your secure account.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SLIDE 4 — ABOUT US*/}
        <section className="h-screen snap-start flex items-start justify-center pt-16 px-12 lg:px-24 border-l-8 border-teal-700">
          <div className="text-center w-full max-w-3xl">
            <h1 className="text-5xl font-semibold text-teal-700 mb-8">About Us</h1>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              HealthCare+ is built to make healthcare access simpler, smarter,
              and more reliable through secure digital solutions.
            </p>

            <ul className="space-y-4 text-left max-w-2xl mx-auto">
              <li className="flex items-center gap-3 font-medium text-gray-700">
                <span className="text-teal-700 font-bold text-xl">✓</span>
                Patient-first digital healthcare
              </li>
              <li className="flex items-center gap-3 font-medium text-gray-700">
                <span className="text-teal-700 font-bold text-xl">✓</span>
                AI-powered health assistance
              </li>
              <li className="flex items-center gap-3 font-medium text-gray-700">
                <span className="text-teal-700 font-bold text-xl">✓</span>
                Secure medical records
              </li>
              <li className="flex items-center gap-3 font-medium text-gray-700">
                <span className="text-teal-700 font-bold text-xl">✓</span>
                Mental and physical wellness support
              </li>
            </ul>
          </div>
        </section>

        {/* SLIDE 5 — FOOTER */}
        <section className="h-screen snap-start flex items-center justify-center px-12 lg:px-24 border-l-8 border-teal-700">
          <div className="text-center">
            <h2 className="text-4xl font-semibold text-teal-700 mb-6">Terms & Policies</h2>

            <p className="text-gray-700 leading-relaxed mb-4 max-w-2xl mx-auto">
              HealthCare+ provides digital healthcare tools to support
              medical decision-making, not replace professionals.
            </p>

            <p className="mb-6">
              <a href="#" className="text-teal-700 hover:text-teal-800 font-medium mx-3 underline-offset-4 hover:underline">
                Privacy Policy
              </a>
              <span className="text-gray-400">|</span>
              <a href="#" className="text-teal-700 hover:text-teal-800 font-medium mx-3 underline-offset-4 hover:underline">
                Terms of Use
              </a>
            </p>

            <p className="text-gray-600 text-sm">© 2025 HealthCare+. All rights reserved.</p>
          </div>
        </section>

      </div>
    </>
  );
};

export default HealthCareLanding;