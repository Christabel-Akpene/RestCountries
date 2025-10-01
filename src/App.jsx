import { Routes, Route } from "react-router"
import { useState, useEffect } from "react"
import Layout from "./Pages/Layout"
import HomePage from "./Pages/HomePage"
import CountryPage from "./Pages/CountryPage"

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState("light");

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
        setFilteredData(data);
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


  useEffect(() => {
    const savedTheme = localStorage.getItem("savedTheme");
    const userDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme){
      setTheme(savedTheme)
    }
    else if (userDarkTheme){
      setTheme("dark")
    }
  }, [])

  useEffect(() => {
    const html = document.documentElement;

    html.classList.remove("light", "dark");
    html.classList.add(theme);
    localStorage.setItem("savedTheme", theme)

  }, [theme])

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout toggleTheme={toggleTheme} theme={theme} />}>
        <Route index element={<HomePage countries={data} error={error} loading={loading} filteredData={filteredData} setFilteredData={setFilteredData}  />} />
        <Route path={"/country/:id"} element={<CountryPage countries={data} />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
