import React from "react";

function Sidebar({ topAnime }) {
  return (
    <aside className="flex max-w-[15rem] pr-4">
      <nav className="px-4">
        <h3 className="text-black text-2xl mb-4">Top Anime</h3>
        {topAnime.map((anime) => (
          <a
            className="block py-2 px-4 text-left text-black text-md mb-4 bg-red-700 rounded-2xl hover:bg-emerald-600 hover:text-white transition duration-100 ease-linear"
            href={anime.url}
            target="_blank"
            rel="noreferrer"
            key={anime.mal_id}
          >
            { anime.title }
          </a>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
