import { Routes, Route } from "react-router"
import { useState, useEffect } from "react"
import Layout from "./Pages/Layout"
import HomePage from "./Pages/HomePage"
import CountryPage from "./Pages/CountryPage"

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/all?fields=name,population,region,subregion,capital,flags,currencies,languages,borders,cca3`);
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
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<HomePage countries={data} error={error} loading={loading} />} />
        <Route path={"/country/:id"} element={<CountryPage countries={data} />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
