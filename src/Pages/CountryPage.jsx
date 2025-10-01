import { MoveLeft } from 'lucide-react';
import { useParams, Link } from 'react-router';
import CountryDetailCard from '../Components/CountryDetailCard';

const CountryPage = ({countries}) => {
  const { id } = useParams();

  const country = countries.find((item) => {
    return item.name.common === id;
  })
  
  

  return (
    <div className="bg-background-color text-text-color md:px-20 p-5 ">
      <Link to={"/"}> <button className='w-[120px] rounded-md p-2 shadow-md bg-elements-background-color mb-8 flex justify-center space-x-2'> <span><MoveLeft/></span> <span>Back</span> </button></Link>
        
          <CountryDetailCard country={country} countries={countries} />

    </div>
  )
}

export default CountryPage