import React from "react";

const Episodes = ({ episodes, loading, searchResults }) => {
  if (loading) {
    return <h2> Loading </h2>;
  }

  return (
    <ul className="list-group mb-4 pa3">
      {episodes.map(episode => (
        <li key={episode.id} className="list-group-item">
          {episode.episode}
          <p> {episode.name} </p>
          <p> {episode.air_date} </p>
        </li>
      ))}
    </ul>
  );
};

export default Episodes;
