import React from "react";

const Search = ({ handleChange, searchTerm }) => {
  return (
    <input
      className=" ba b--green bg-lightest-blue pa3 pb3"
      type="search"
      placeholder="Search Episodes"
      onChange={handleChange}
      value={searchTerm}
    />
  );
};

export default Search;
