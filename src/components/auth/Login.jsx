function Login({ onRegister, onForgot, onLoginSuccess }) {
  return (
    <>
      <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
        Login
      </h2>

      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          onLoginSuccess();
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

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-md
                     hover:bg-indigo-700 transition"
        >
          Login
        </button>
      </form>

      {/* OR Divider */}
      <div className="flex items-center my-6">
        <div className="flex-1 h-px bg-gray-300"></div>
        <span className="px-3 text-sm text-gray-500">OR</span>
        <div className="flex-1 h-px bg-gray-300"></div>
      </div>

      <button
        type="button"
        className="w-full border border-gray-300 py-2 rounded-md
                   flex items-center justify-center gap-2
                   hover:bg-gray-50 transition"
        onClick={() => {
          console.log("Google login clicked");
        }}
      >
        <span className="font-medium text-gray-700">Continue with Google</span>
      </button>

      <div className="mt-6 text-sm text-gray-600">
        <div className="flex justify-center">
          <p className="text-center mt-2">
            Don’t have an account?{" "}
            <button
              onClick={onRegister}
              className="text-indigo-600 hover:underline"
            >
              Create account
            </button>
          </p>
        </div>
        <div className="flex justify-center">
          <button
            onClick={onForgot}
            className="text-indigo-600 hover:underline"
          >
            Forgot password?
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;
