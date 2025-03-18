import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-blue-900 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <NavLink to="/" className="text-2xl font-bold tracking-wide flex items-center space-x-1">
          <span>World</span> 
          <span className="text-yellow-400">Explore</span>
        </NavLink>

        {/* Navigation Links */}
        <nav className="space-x-6">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `hover:text-yellow-400 transition ${
                isActive ? "text-yellow-400 font-semibold" : "text-white"
              }`
            }
          >
            HOME
          </NavLink>
          <NavLink 
            to="/countries" 
            className={({ isActive }) => 
              `hover:text-yellow-400 transition ${
                isActive ? "text-yellow-400 font-semibold" : "text-white"
              }`
            }
          >
            Countries
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              `hover:text-yellow-400 transition ${
                isActive ? "text-yellow-400 font-semibold" : "text-white"
              }`
            }
          >
            About
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
