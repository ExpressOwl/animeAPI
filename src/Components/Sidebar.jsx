import React from "react";

function Sidebar({ topAnime }) {
  return (
    <aside className="flex max-w-[15rem] pr-4">
      <nav className="px-4">
      <h3 class="text-2xl font-bold dark:text-white mb-4 text-red-700">Top Ten Anime</h3>
        {topAnime.map((anime) => (
          <a
            className="block text-left text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
            href={anime.url}
            target="_blank"
            rel="noreferrer"
            key={anime.mal_id}
          >
            {anime.title}
          </a>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
