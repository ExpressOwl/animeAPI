import React from "react";

function MainContent() {
  return (
    <main className="flex px-4 flex-1 justify-end">
      <div className="flex justify-end" id="main-head">
        <form className="" id="search-box">
          <input
            className="block w-full max-w-sm px-1 rounded-lg bg-red-800 placeholder:text-black transition focus:bg-red-700"
            type="search"
            placeholder="Search Anime..."
            required
          />
        </form>
      </div>
    </main>
  );
}

export default MainContent;
