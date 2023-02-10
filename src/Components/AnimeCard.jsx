import React from "react";

function AnimeCard({ anime }) {
  return (
    <article className="px-2 py-4" id="anime-card" href="">
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
    </article>
  );
}

export default AnimeCard;
