import { Search, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import CountryCard from "../Components/CountryCard";

const continents = ["Africa", "America", "Asia", "Europe", "Oceania"];

const HomePage = () => {
  const [openDropdown, setOpenDropDown] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await fetch(`https://restcountries.com/v3.1/all?fields=name,population,region,subregion,capital,flags,currencies,languages,borders,cca3`);
        if (!response.ok) {
          setError(true);
          throw new Error("Error");
        }
        const data = await response.json();
        setData(data);
        console.log(data);
        setError(false);
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bg-background-color text-text-color md:px-20 p-5">
      <div className="sm:flex sm:justify-between sm:items-center">
        <div className="flex items-center space-x-2 bg-elements-background-color p-4 shadow-sm rounded-lg sm:w-[430px]">
          <Search size={18} />
          <form className="flex-1">
            <input
              className="pl-2 outline-none w-full"
              type="text"
              placeholder="Search for a country"
            />
          </form>
        </div>

              <div
        onClick={() => setOpenDropDown(!openDropdown)}
        className="flex justify-between items-center p-2 w-[150px] h-[50px] mt-4 bg-elements-background-color shadow-sm rounded-md cursor-pointer relative ">
        <p>Filter by region</p>
        <ChevronDown />

        {openDropdown && (
          <div
            onClick={(e) => e.stopPropagation()}
            className="absolute  top-full w-full p-3 right-0 mt-1 z-10 shadow-sm rounded-md bg-elements-background-color"
          >
            {continents.map((continent, index) => {
              return (
                <p key={index} className="cursor-pointer">
                  {continent}
                </p>
              );
            })}
          </div>
        )}
      </div>


      </div>



      {loading && <div className="mt-6 text-center">Loading ....</div>}

      {error && <div className="mt-6 text-center">Error, try again later</div>}

      <div className="p-10 grid grid-cols-1 gap-10 sm:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4 md:px-0">
        {data &&
          data.map((item) => {
            return <CountryCard key={item.name.common} country={item} />;
          })}
      </div>
    </div>
  );
};

export default HomePage;
