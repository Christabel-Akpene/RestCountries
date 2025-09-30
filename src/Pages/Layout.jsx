import Header from "../Components/Header"
import { Outlet } from "react-router"
const Layout = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
          {/* useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("");
        if (!response.ok) {
          setError(true);
          throw new Error("Error");
        }
        const data = await response.json();
        setError(false);
        console.log(data);
        setData(data);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); */}
    </div>
  )
}

export default Layout