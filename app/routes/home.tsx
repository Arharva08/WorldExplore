import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "WorldExplorer" },
    { name: "Check out country data!", content: "Welcome to WorldExplorer." },
  ];
}

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-50 to-indigo-100">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex flex-wrap items-center">
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full md:w-1/2 space-y-6"
          >
            <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
              <span className="block">Explore Countries with</span>
              <span className="block text-indigo-600">Real-Time Data</span>
            </h1>
            <p className="text-lg text-gray-600">
              Discover details about every country around the world – from
              capitals to regions!
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/countries"
                  className="flex items-center justify-center px-6 py-3 text-lg text-white bg-indigo-600 rounded-md shadow-md hover:bg-indigo-700"
                >
                  Explore Now
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 ml-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/about"
                  className="flex items-center px-6 py-3 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
                >
                  Learn More
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full md:w-1/2 mt-10 md:mt-0"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src="https://image.winudf.com/v2/image/Ymx1ZWNhcC5pbWFnZXouYmVhdXRpZnVsX2NvdW50cmllc193YWxscGFwZXJzX3NjcmVlbl8wXzlpMW14OWl1/screen-0.webp?fakeurl=1&type=.webp"
                alt="Explore countries"
                className="w-full h-auto object-cover transform transition-transform hover:scale-105"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
