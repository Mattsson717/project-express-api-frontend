import React, { useState, useEffect } from "react";

export const App = () => {
  const [games, setGames] = useState({});

  const API_URL =
    "https://mattssons-api.herokuapp.com/games?platform=SNES&genre=role";

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((json) => setGames(json));
  }, []);

  console.log(games);
  return (
    <>
      <div className="fade"></div>
      <section className="star-wars">
        <div className="crawl">
          <div className="title">
            <p>Top ranked</p>
            <h1>Super NES games</h1>
          </div>
          {games.map((game) => (
            <div key={game.Rank}>
              <p>
                {game.name} Publisher: {game.publisher}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
