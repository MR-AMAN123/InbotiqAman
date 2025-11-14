export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">
        Welcome to Role-Based Auth App
      </h1>

      <p className="text-gray-600 max-w-md text-center mb-8">
        A simple and secure authentication system with user/admin roles,
        built using Next.js, MongoDB and JWT.
      </p>

      <div className="flex space-x-4">
        <a
          href="/login"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg hover:bg-blue-700 transition"
        >
          Login
        </a>
        <a
          href="/signup"
          className="px-6 py-3 bg-gray-800 text-white rounded-lg text-lg hover:bg-gray-900 transition"
        >
          Signup
        </a>
      </div>
    </div>
  );
}
