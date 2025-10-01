import { Link } from "react-router"

const CountryDetailCard = ({country, countries}) => {
  return (
    <div className="flex flex-col sm:flex-row space-x-10 lg:justify-center lg:space-x-20">
        <img src={country.flags.png} alt={country.flags.alt} className="block w-full h-[200px] object-cover text-text-color sm:w-1/2 lg:w-1/4" />
        <div className="mt-10 sm:mt-0">
            <p className="font-bold pb-2 text-2xl mb-4"> {country.name.official}</p>
            <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-10">
                <div>
                    <p><span className="font-bold">Native Name: </span> <span className="text-text-input">{Object.values(country.name.nativeName)[0].common}</span> </p>
                    <p><span className="font-bold">Population: </span> <span className="text-text-input">{country.population}</span> </p>
                    <p><span className="font-bold">Region: </span> <span className="text-text-input">{country.region}</span> </p>
                    <p><span className="font-bold">Sub Region: </span> <span className="text-text-input">{country.subregion}</span> </p>
                </div>
                <div className="mb-5">
                    <p><span className="font-bold">Capital: </span> <span className="text-text-input">{country.capital[0]}</span> </p>
                    <p><span className="font-bold">Currencies: </span> <span className="text-text-input">{Object.values(country.currencies)[0].name}</span> </p>
                    <p><span className="font-bold">Languages: </span> <span className="text-text-input">{Object.values(country.languages).join(", ")}</span> </p>

                </div>
            </div>

            <div>
              <p> <span className="font-bold block mb-4 lg:text-lg lg:inline lg:mr-5">Border Countries: </span> {
                country.borders.slice(0,3).map((item) => {
                  let borderCountry = countries.find((cty) => (cty.cca3 === item))
                  const bordercountry = borderCountry.name.common
                  return (
                    <Link key={item} to={`/country/${bordercountry}`}>
                        <button className="shadow-md rounded-md bg-elements-background-color py-1 px-5 mr-2 m-auto cursor-pointer"> {bordercountry} </button>
                    </Link>
                )
                })}</p>
            </div>

        </div>


    </div>
  )
}

export default CountryDetailCard