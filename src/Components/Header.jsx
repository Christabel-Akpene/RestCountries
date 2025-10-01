import { Moon, Sun } from "lucide-react";
const Header = ({toggleTheme, theme}) => {
  return (
    <div className="shadow-md border-b border-b-text-input ">
      <div className="bg-elements-background-color px-5 flex items-center justify-between py-4 md:px-20">
        <p className="font-bold text-2xl text-text-color ">Where in the world?</p>
        <button className="cursor-pointer" onClick={toggleTheme}>
          <span>
            {
              theme === "light" ? <Moon size={24} /> : <Sun size={24}  color="#fff"/>
            }
          </span>
        </button>
      </div>
    </div>
  );
};

export default Header;
