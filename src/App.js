import React, { useState, useEffect } from "react";

export const App = () => {
  const [games, setGames] = useState([]);

  const API_URL =
    "https://mattssons-api.herokuapp.com/games?platform=SNES&genre=role";

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((json) => setGames(json.response));
  }, []);

  console.log(games);
  return (
    <>
      <div className="fade" />
      <section className="star-wars">
        <div className="crawl">
          <div className="title">
            <p>Top ranked</p>
            <h1>SNES roleplaying games</h1>
          </div>
          {games.map((game) => (
            <div key={game.Rank}>
              <p>{game.Name}</p>
              <p>Publisher: {game.Publisher}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
