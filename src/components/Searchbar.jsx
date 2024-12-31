import { FaSearch } from "react-icons/fa";

const Searchbar = ({
  textInput,
  onChangeText,
  handleGetCityWeather,
  isLoading,
}) => {
  return (
    <form className="w-full relative">
      <input
        type="text"
        value={textInput}
        onChange={(e) => onChangeText(e)}
        className="w-full py-2 px-6 bg-slate-800 rounded-[10px] border-none outline-none"
        placeholder="Search city...."
      />

      <button
        onClick={handleGetCityWeather}
        disabled={isLoading}
        className={`absolute h-5 w-5 right-6 top-1/2 -translate-y-1/2 ${
          isLoading
            ? "opacity-40 cursor-not-allowed"
            : "opacity-80 hover:opacity-100"
        }`}
      >
        <FaSearch className="w-full h-full" />
      </button>
    </form>
  );
};

export default Searchbar;
