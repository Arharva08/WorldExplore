export default function About() {
    return (
      <div className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
            About This App
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            This app is a powerful and interactive country explorer that provides
            in-depth details about nations worldwide. It leverages the{" "}
            <span className="font-semibold text-indigo-600">
              REST Countries API
            </span>{" "}
            to deliver accurate and up-to-date information.
          </p>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-indigo-700 mb-4">
              Features at a Glance
            </h2>
            <ul className="text-gray-700 text-lg space-y-3">
              <li>🌍 Browse countries by name, region, or population</li>
              <li>🏛️ View capitals, languages, and currencies</li>
              <li>🚀 Seamless and fast experience with React Router</li>
              <li>🎨 Beautiful and responsive UI built with Tailwind CSS</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  