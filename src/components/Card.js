import React from "react";

const Card = ({ proj }) => {
  return (
    <article>
      <h2>{proj.name}</h2>
      <p>{proj.description}</p>
      <a href={proj.github}>
        <h5>Github</h5>
      </a>
      <a href={proj.npm}>
        <h5>NPM</h5>
      </a>
      <a href={proj.vid}>
        <h5>Video Tut</h5>
      </a>
      <a href={proj.blog}>
        <h5>Blog Tut</h5>
      </a>
      <code>{proj.command}</code>
    </article>
  );
};

export default Card;
