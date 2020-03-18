import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import research from "./research.png";
import "./HeaderSearchBar.scss";

export const HeaderSearchBar = () => {
  const [keyword, setKeyword] = useState("");
  const [word, setWord] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    setKeyword(word);
    setWord("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Product name..."
          type="text"
          value={word}
          onChange={e => setWord(e.target.value)}
        />
        <button>
          <img className="search-image" src={research} alt="search" />
        </button>
      </form>
      {keyword && <Redirect to={`/search/${keyword}`} />}
    </div>
  );
};
