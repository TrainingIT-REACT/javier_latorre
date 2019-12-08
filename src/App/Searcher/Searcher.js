import React, { createRef } from "react";

// Css
import "./Searcher.css";

const Searcher = ({ updateSearch, placeholder }) => {
  const input = createRef();

  const onSubmit = e => {
    e.preventDefault();
    updateSearch(input.current.value);
  };

  return (
    <>
      <div className="Searcher">
        <form onSubmit={onSubmit}>
          <input
            className="text-field"
            id="name"
            type="text"
            ref={input}
            placeholder={placeholder}
          />
          <button onClick={onSubmit}>
            <span role="img" aria-label="lupa">
              🔎
            </span>
          </button>
        </form>
      </div>
      <div className="clear"></div>
    </>
  );
};

export default Searcher;
