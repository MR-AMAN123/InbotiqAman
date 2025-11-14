export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-3xl font-semibold mb-4">Welcome to Role Auth App</h1>
      <div className="space-x-4">
        <a href="/login" className="px-4 py-2 bg-blue-600 text-white rounded-lg">
          Login
        </a>
        <a href="/signup" className="px-4 py-2 bg-gray-800 text-white rounded-lg">
          Signup
        </a>
      </div>
    </div>
  );
}
