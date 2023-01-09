import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const ListeParties = () => {
  const [parties, setParties] = useState([]);
  const [partieOwn, setPartieOwn] = useState("");

  const initalUrlListUserParties = "http://127.0.0.1:3001/listPartiesUser";

  const fetchItemsListUserParties = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setParties(data);
      })
      .catch((err) => console.log("pppp" + err));
  };

  useEffect(() => {
    fetchItemsListUserParties(initalUrlListUserParties);
  }, []);

  const joinPartie = (id) => {
    setPartieOwn(id);
    console.log("partieOwn" + partieOwn);
  };

  return (
    <div>
      <h1>Liste des parties</h1>
      {parties.map((partie, index) => (
        <div key={index}>
          <h1>
            {partie.id}-{partie.nom}
          </h1>
          {/* <button onClick={() => joinPartie(partie.id)}>rejoindre</button> */}
          <NavLink to={`/joinedPage/${partie.id}`}>
            <button>rejoindre</button>
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default ListeParties;
