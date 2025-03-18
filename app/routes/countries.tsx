import { Link } from "react-router";
import type { Route } from "./+types/countries";
import { useState } from "react";

export async function clientLoader() {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();
  return data;
}

export default function Countries({ loaderData }: Route.ComponentProps) {
  const [search, setSearch] = useState<string>("");
  const [region, setRegion] = useState<string>("");

  const filteredCountries = loaderData.filter((country: any) => {
    const matchesRegion =
      !region || country.region.toLowerCase() === region.toLowerCase();
    const matchesSearch =
      !search ||
      country.name.common.toLowerCase().includes(search.toLowerCase());
    return matchesSearch && matchesRegion;
  });

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-extrabold mb-6 text-gray-900 text-center">
        Countries
      </h2>
      <div className="flex flex-col sm:flex-row gap-4 mb-6 justify-center">
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 w-full sm:w-1/2 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
        />
        <select
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 w-full sm:w-1/3 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
        >
          <option value="">All Regions</option>
          <option value="africa">Africa</option>
          <option value="americas">Americas</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>

      {filteredCountries.length === 0 ? (
        <div className="text-center text-gray-500 font-medium">
          No countries match your filters.
        </div>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredCountries.map((country: any) => (
            <li
              key={country.cca3}
              className="bg-white border border-gray-200 rounded-xl p-5 shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1 duration-200"
            >
              <Link
                to={`/countries/${country.name.common}`}
                className="text-indigo-600 hover:text-indigo-800 text-lg font-semibold block mb-2 transition-colors"
              >
                {country.name.common}
              </Link>
              <img
                src={country.flags.png}
                alt={`${country.name.common} flag`}
                className="w-full h-40 object-cover rounded-md mb-3 shadow-sm"
              />
              <div className="text-gray-600 text-sm">
                <p className="mb-1">Region: <span className="font-medium">{country.region}</span></p>
                <p>Population: <span className="font-medium">{country.population.toLocaleString()}</span></p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
