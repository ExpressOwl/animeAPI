import React from "react";

function AnimeCard({ anime }) {
  return (
    <>
      <div className="flex m-4">
        <a
          href={anime.url}
          target="blank"
          rel="noreferrer"
          className="flex flex-col items-center border rounded-lg shadow md:flex-row md:max-w-xl border-gray-700 bg-gray-800 hover:bg-gray-700 w-[500px]"
        >
          <img
            className="object-cover w-56 h-80 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg pl-2"
            src={anime.images.jpg.image_url}
            alt="Anime Key Visuals"
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-4 text-2xl font-bold tracking-tight text-white">
              {anime.title}
            </h5>
            <p className="mb-3 font-normal text-gray-400 overflow-scroll h-80 p-4">
              {anime.synopsis}
            </p>
          </div>
        </a>
      </div>
    </>
  );
}

export default AnimeCard;

{
  /* <article className="px-2 py-4" id="anime-card" href="">
<a href={anime.url} target="_blank" rel="noreferrer">
  <figure className="block mb-4">
    <img
      className="block w-56 h-80 object-cover rounded-2xl shadow-md"
      src={anime.images.jpg.image_url}
      alt="Anime Key Visual"
    />
  </figure>
  <h3 className="text-black w-56">{anime.title}</h3>
</a>
</article> */
}
