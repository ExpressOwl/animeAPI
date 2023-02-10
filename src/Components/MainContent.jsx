import React from "react";
import AnimeCard from "./AnimeCard";

function MainContent(props) {
  return (
    <>
      <main className="px-4 flex-1 justify-end">
        <div className="justify-end" id="main-head">
          <form className="mt-2" id="search-box" onSubmit={props.HandleSearch}>
            <input
              className="w-full max-w-sm px-1 rounded-lg bg-red-800 placeholder:text-black transition focus:bg-red-700"
              type="search"
              placeholder="Search Anime..."
              required
              value={props.search}
              onChange={(e) => props.SetSearch(e.target.value)}
            />
          </form>
        </div>
        <div className="flex flex-wrap mt-8 mx-auto" id="anime-list">
          {props.animeList.map(anime => (
            <AnimeCard 
              anime={anime}
              key={anime.mal_id}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default MainContent;
