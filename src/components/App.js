import React from "react";
import lib from "../lib";
import Card from "./Card";

export const App = (props) => {
  return (
    <>
      <header>
        <h1>Alex Merced Javascript Libraries</h1>
        <nav>
          <a href="https://github.com/alexmercedcoder">
            <div>Github</div>
          </a>
          <a href="https://www.npmjs.com/~alexmerced">
            <div>NPM</div>
          </a>
          <a href="https://main.devnursery.com/learning">
            <div>Youtube</div>
          </a>
          <a href="https://tuts.alexmercedcoder.com/">
            <div>Blog</div>
          </a>
          <a href="http://www.linkedin.com/in/alexmerced">
            <div>LinkedIN</div>
          </a>
          <a href="https://dev.alexmercedcoder.work/">
            <div>Portfolio</div>
          </a>
        </nav>
        <h2>
          <a href="https://www.patreon.com/alexmercedcoder">
            Support My Efforts on Patreon
          </a>
        </h2>
      </header>
      <main>
        {lib.map((library, index) => (
          <Card proj={library} key={index} />
        ))}
      </main>
      <footer>
        <h2>FOLLOW ALEX MERCED ON TWITTER & INSTAGRAM: @AlexMercedCoder</h2>
      </footer>
    </>
  );
};
