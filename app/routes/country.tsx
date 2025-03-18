import type { Route } from "./+types/country";

export async function clientLoader({ params }: Route.LoaderArgs) {
  const countryName = params.countryName;

  const res = await fetch(
    `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
  );
  const data = await res.json();
  return data;
}

export default function Country({ loaderData }: Route.ComponentProps) {
  const country = {
    name: loaderData[0]?.name?.common || "N/A",
    officialName: loaderData[0]?.name?.official || "N/A",
    region: loaderData[0]?.region || "N/A",
    subregion: loaderData[0]?.subregion || "N/A",
    capital: loaderData[0]?.capital || "N/A",
    population: loaderData[0]?.population || "N/A",
    flagUrl: loaderData[0]?.flags?.png || "",
    currencies: loaderData[0]?.currencies
      ? Object.values(loaderData[0].currencies)
          .map((c: any) => `${c.name} (${c.symbol})`)
          .join(", ")
      : "N/A",
    languages: loaderData[0]?.languages
      ? Object.values(loaderData[0].languages).join(", ")
      : "N/A",
  };

  return (
    <div className="p-6 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="flex flex-col gap-6 p-6">
        <h2 className="text-4xl font-extrabold text-gray-900 border-b pb-2">
          {country.name}
        </h2>
        <div className="space-y-3 text-gray-700 text-lg">
          <p>
            <span className="font-semibold">Official Name:</span> {country.officialName}
          </p>
          <p>
            <span className="font-semibold">Capital:</span> {country.capital}
          </p>
          <p>
            <span className="font-semibold">Region:</span> {country.region}
          </p>
          <p>
            <span className="font-semibold">Subregion:</span> {country.subregion}
          </p>
          <p>
            <span className="font-semibold">Population:</span> {country.population.toLocaleString()}
          </p>
          <p>
            <span className="font-semibold">Currencies:</span> {country.currencies}
          </p>
          <p>
            <span className="font-semibold">Languages:</span> {country.languages}
          </p>
        </div>
      </div>
      {country.flagUrl && (
        <div className="flex justify-center items-center p-6">
          <img
            src={country.flagUrl}
            className="w-72 h-auto border-4 border-gray-300 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
            alt={`Flag of ${country.name}`}
          />
        </div>
      )}
    </div>
  );
}
