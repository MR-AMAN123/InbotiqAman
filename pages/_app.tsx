import "../styles/globals.css";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
