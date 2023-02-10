import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [search, setSearch] = useState("Naruto");
  const [animeData, setAnimeData] = useState();

  const getData = async () => {
    const res = await fetch(
      `https://api.jikan.moe/v4/anime?q=${search}&limit=10`
    );
    const resData = await res.json();
    setAnimeData(resData.data);
  };

  useEffect(() => {
    getData();
  }, [search]);

  return (
    <>
      <div
        className="w-full h-20 bg-[#FF8E9C] flex justify-around items-center fixed top-0 text-white z-10"
        id="header"
      >
        <h1 className="text-[#4C5270] text-2xl">MyAnimeList</h1>
        <div id="search-box">
          <input
            className="w-60 h-9 text-md px-3 text-[#4C5270]"
            type="search"
            placeholder="Search Your Anime"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
    </>
  );
}

export default App;
