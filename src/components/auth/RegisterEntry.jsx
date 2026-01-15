function RegisterEntry({ onLogin, onRegisterSuccess }) {
  return (
    <>
      <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
        Create Account
      </h2>

      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          onRegisterSuccess("manual");
        }}
      >
        <input
          type="email"
          placeholder="Email"
          className="w-full border border-gray-300 px-3 py-2 rounded-md
                     focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border border-gray-300 px-3 py-2 rounded-md
                     focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full border border-gray-300 px-3 py-2 rounded-md
                     focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-md
                     hover:bg-indigo-700 transition"
        >
          Create Account
        </button>
      </form>

      <div className="flex items-center my-6">
        <div className="flex-1 h-px bg-gray-300"></div>
        <span className="px-3 text-sm text-gray-500">OR</span>
        <div className="flex-1 h-px bg-gray-300"></div>
      </div>

      <button
        type="button"
        className="w-full border border-gray-300 py-2 rounded-md
                   flex items-center justify-center
                   hover:bg-gray-50 transition"
        onClick={() => onRegisterSuccess("google")}
      >
        <span className="font-medium text-gray-700">
          Continue with Google
        </span>
      </button>

      <p className="text-center text-sm text-gray-600 mt-6">
        Already have an account?{" "}
        <button
          onClick={onLogin}
          className="text-indigo-600 hover:underline"
        >
          Login
        </button>
      </p>
    </>
  );
}

export default RegisterEntry;
