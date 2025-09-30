
const CountryCard = ({ country }) => {
  return (
    <div className="flex flex-col bg-elements-background-color shadow-md rounded-lg overflow-hidden">
        
      <img
        src={country.flags.png}
        alt={country.flags.alt}
        className="block w-full h-[200px] object-cover"
      />
      <div className="flex flex-col space-y-2 p-6 ">
        <p className="font-bold pb-2 ">{country.name.official}</p>
        <p>
          <span className="font-bold">Population: </span>{" "}
          <span className="text-text-input">{country.population}</span>
        </p>
        <p>
          <span className="font-bold">Region: </span>{" "}
          <span className="text-text-input">{country.region}</span>
        </p>
        <p>
          <span className="font-bold">Capital: </span>{" "}
          <span className="text-text-input">{country.capital[0]}</span>
        </p>
      </div>
    </div>
  );
};

export default CountryCard;
