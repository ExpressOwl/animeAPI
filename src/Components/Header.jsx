import React from "react";

function Header() {
  return (
    <header className="pt-4 mb-8">
      <h1 class="mb-4 text-3xl font-extrabold text-center text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span class="text-transparent bg-clip-text bg-gradient-to-r to-red-300 from-red-700">
          Jikan Anime <span class="underline underline-offset-3 decoration-8 decoration-blue-500 dark:decoration-blue-600">Database</span>
        </span>{" "}
      </h1>
    </header>
  );
}

export default Header;
