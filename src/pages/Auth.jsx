import { useState } from "react";

function Auth() {
  const [view, setView] = useState("login"); // login | register | forgot
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [role, setRole] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        {/* ================= LOGIN ================= */}
        {view === "login" && (
          <>
            <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Username"
                className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />

              <input
                type="password"
                placeholder="Password"
                className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />

              <button className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">
                Login
              </button>
            </form>

            <p className="text-center text-sm mt-4">
              Don’t have an account?{" "}
              <button
                onClick={() => setView("register")}
                className="text-indigo-600 hover:underline"
              >
                Create one
              </button>
            </p>

            <p className="text-center text-sm mt-2">
              <button
                onClick={() => setView("forgot")}
                className="text-indigo-600 hover:underline"
              >
                Forgot password?
              </button>
            </p>
          </>
        )}

        {/* ================= REGISTER ================= */}
        {view === "register" && (
          <>
            <h2 className="text-2xl font-semibold text-center mb-6">
              Register
            </h2>

            <form className="space-y-4">
              <input
                placeholder="Username"
                className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                placeholder="Email"
                className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />

              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-700"
              >
                <option value="" disabled hidden>Select Role</option>
                <option value="patient">Patient</option>
                <option value="doctor">Doctor</option>
                <option value="pathologist">Pathologist</option>
                <option value="pharmacist">Pharmacist</option>
              </select>

              <button className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">
                Register
              </button>
            </form>

            <p className="text-center text-sm mt-4">
              Already registered?{" "}
              <button
                onClick={() => setView("login")}
                className="text-indigo-600 hover:underline"
              >
                Sign in
              </button>
            </p>
          </>
        )}

        {/* ================= FORGOT PASSWORD ================= */}
        {view === "forgot" && (
          <>
            <h2 className="text-2xl font-semibold text-center mb-6">
              Forgot Password
            </h2>

            <form className="space-y-4">
              {/* Email + Send OTP */}
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Registered email"
                  className="flex-1 border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />

                {!otpSent && (
                  <button
                    type="button"
                    onClick={() => setOtpSent(true)}
                    className="px-4 bg-indigo-600 text-white rounded hover:bg-indigo-700"
                  >
                    Send OTP
                  </button>
                )}
              </div>

              {/* OTP + Verify */}
              {otpSent && !otpVerified && (
                <div className="flex gap-2">
                  <input
                    placeholder="Enter OTP"
                    className="flex-1 border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />

                  <button
                    type="button"
                    onClick={() => setOtpVerified(true)}
                    className="px-4 bg-indigo-600 text-white rounded hover:bg-indigo-700"
                  >
                    Verify
                  </button>
                </div>
              )}

              {/* Reset Password */}
              {otpVerified && (
                <>
                  <input
                    type="password"
                    placeholder="New Password"
                    className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />

                  <button className="w-full bg-green-600 text-white py-2 rounded">
                    Update Password
                  </button>
                </>
              )}
            </form>

            <p className="text-center text-sm mt-4">
              Remembered your password?{" "}
              <button
                onClick={() => setView("login")}
                className="text-indigo-600 hover:underline"
              >
                Login here
              </button>
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default Auth;
