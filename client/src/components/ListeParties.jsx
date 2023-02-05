import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const ListeParties = (props) => {
  const [parties, setParties] = useState();

  const initalUrlListUserParties = "http://127.0.0.1:3001/parties";

  const fetchItemsListUserParties = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setParties(data);
        console.log(data);
        // console.log(parties);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    // PartieCleanner();
    fetchItemsListUserParties(initalUrlListUserParties);
    console.log("la page a change");
  }, []);

  // useEffect(() => {
  //   console.log("parties a change");
  // }, [parties]);

  return (
    <div>
      <ul>
        {/* if have problem with map methode dont forget add ? befor .map */}
        {parties?.map((q, key) => (
          <li key={key}>
            Partie: {q.nom}
            <a href={`http://localhost:5173/joinedPage/${q._id}`}>
              <button>Rejoindre</button>
            </a>
            <a href={`http://127.0.0.1:3001/delete/${q._id}`}>
              <button>Supprimer</button>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListeParties;
