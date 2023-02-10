import React from "react";

function Footer() {
  return (
    <footer class="fixed bottom-0 left-0 z-20 w-full p-2 border-t shadow md:flex md:items-center md:justify-between md:p-2 bg-gray-800 border-gray-600">
      <span class="text-sm text-red-700 sm:text-center">
        © 2023{" "}
        <a href="https://flowbite.com/" class="hover:underline">
          Made with Flowbite™&nbsp;
        </a>
        <a href="https://reactjs.org/" class="hover:underline">
          and ReactJS
        </a>
      </span>
      <ul class="flex flex-wrap items-center mt-3 text-sm text-red-700 sm:mt-0">
        <li>
          <a href="https://github.com/ExpressOwl" target="_blank" class="mr-4 hover:underline md:mr-6 ">
            Github
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/seansew/" target="_blank" class="mr-4 hover:underline md:mr-6">
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://jikan.moe/" target="_blank" class="mr-4 hover:underline md:mr-6">
            Powered by Jikan API
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
