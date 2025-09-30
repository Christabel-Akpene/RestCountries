import { Moon } from "lucide-react";
const Header = () => {
  return (
    <div className="shadow-md border-b border-b-text-input ">
      <div className="bg-elements-background-color mx-5 flex items-center justify-between py-4 md:mx-20">
        <p className="font-bold text-2xl ">Where in the world?</p>
        <button className="cursor-pointer ">
          <span>
            <Moon size={24} />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Header;
