import React from "react";
import { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [champs, setChamps] = useState([]);
  useEffect(() => {
    fetch(
      `https://ddragon.leagueoflegends.com/cdn/11.24.1/data/tr_TR/champion.json`
    )
      .then((res) => res.json())
      .then((data) => {
        setChamps(Object.values(data.data));
      });
  }, []);

  function handleChange(e) {
    const search = e.target.value.toLowerCase();
    const champNames = document.querySelectorAll(".name");
    champNames.forEach((champName) => {
      champName.parentElement.style.display = "block";
      if (!champName.textContent.toLowerCase().includes(search)) {
        champName.parentElement.style.display = "none";
      }
    });
  }

  return (
    <div className="App">
      <header className="Header">
        <input
          type="text"
          className="search"
          placeholder="Search..."
          onChange={handleChange}
        />
      </header>
      <div className="champ-wrapper">
        {champs.map((champ) => {
          return (
            <div className="champ" key={champ.key}>
              <img
                className="img"
                src={`http://ddragon.leagueoflegends.com/cdn/11.22.1/img/champion/${champ.id}.png`}
                alt=""
              />
              <h3 className="name">{champ.id}</h3>
              <p className="title">{champ.title}</p>
              <p className="desc">{champ.blurb}</p>
              <span className="tags">{champ.tags[0]}, </span>
              <span className="tags">{champ.tags[1]}, </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
