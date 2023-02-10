import "./App.css";
import Header from "./Components/Header";
import { useState, useEffect } from "react";
import Sidebar from "./Components/Sidebar";
import MainContent from "./Components/MainContent";

function App() {
  const [animeList, SetAnimeList] = useState([]);
  const [topAnime, SetTopAnime] = useState([]);
  const [search, SetSearch] = useState("");

  const getTopAnime = async () => {
    const temp = await fetch(`https://api.jikan.moe/v4/top/anime?filter=bypopularity`).then(res => res.json());

    SetTopAnime(temp.data.slice(0, 5));
  }

  useEffect(() => {
    getTopAnime();
  }, [])

  return (
    <>
      <div>
        <Header />
        <div className="flex" id="content-wrap">
          <Sidebar topAnime={topAnime} />
          <MainContent />
        </div>
      </div>
    </>
  );
}

export default App;
