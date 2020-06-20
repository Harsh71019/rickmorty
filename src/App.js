import React, { useState, useEffect } from "react";
import "./App.css"
import axios from "axios";
import Episodes from "./components/Episodes";
import Pagination from "./components/Pagination";
import Search from "./components/Search";

export default function App() {
  const [searchTerm, setSearchTerm] = React.useState("");
  // const [searchResults, setSearchResults] = React.useState([]);
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    const fetchEpisodes = async () => {
      setLoading(true);
      const res = await axios.get(
        "https://rickandmortyapi.com/api/episode/[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]"
      );
      setEpisodes(res.data);
      setLoading(false);
    };

    fetchEpisodes();
  }, []);

  console.log(episodes);

  const handleChange = e => {
    setSearchTerm(e.target.value);
  };

  React.useEffect(() => {
    const results = episodes.filter(episode =>
      episode.name
        .toLowerCase()
        .toString()
        .includes(searchTerm.toLowerCase())
    );
    setEpisodes(results);
  }, [searchTerm]);

  const indexOfLastPost = currentPage * postsPerPage;

  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const currentPosts = episodes.slice(indexOfFirstPost, indexOfLastPost);

  //change page

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="container mt-5 ">
      <h1 className="text-primary mb-3 tc ">Rick and Morty Episodes</h1>

      <div className="tc ">
        <Search handleChange={handleChange} searchTerm={searchTerm} />
      </div>

      <Episodes
        episodes={currentPosts}
        loading={loading}
        // searchResults={searchResults}
      />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={episodes.length}
        paginate={paginate}
      />
    </div>
  );
}
