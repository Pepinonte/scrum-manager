import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const JoinedPage = () => {
  const { partieId } = useParams();
  const initalUrlListUserParties = `http://127.0.0.1:3001/parties/${partieId}`;
  const [partie, setPartie] = useState([]);

  const fetchItemsListUserParties = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPartie(data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchItemsListUserParties(initalUrlListUserParties);
  }, []);

  return (
    <div>
      <h1>Ta rejoin la partie: {partie.nom}</h1>
      <h1>
        Sprints:{" "}
        {partie.sprints?.map((q, k) => (
          <div>
            {q}
            <form
              action={`http://127.0.0.1:3001/deleteSprint/${k}/${partie._id}`}
              method="POST"
            >
              <button type="submit">Supprimer</button>
            </form>
            <form
              action={`http://127.0.0.1:3001/updateSprint/${k}/${partie._id}`}
              method="POST"
            >
              <input type="text" name="sp" placeholder={q} />
              <button type="submit">Modifier</button>
            </form>
          </div>
        ))}
      </h1>
      <h1>
        Users:{" "}
        {partie.users?.map((q, k) => (
          <div>
            {q}
            <form
              action={`http://127.0.0.1:3001/deleteSprint/${k}/${partie._id}`}
              method="POST"
            >
              <button type="submit">Supprimer</button>
            </form>
          </div>
        ))}
      </h1>
      <h1>
        Stories:{" "}
        {partie.stories?.map((q, k) => (
          <div>
            {q}
            <form
              action={`http://127.0.0.1:3001/deleteStories/${k}/${partie._id}`}
              method="POST"
            >
              <button type="submit">Supprimer</button>
            </form>
            <form
              action={`http://127.0.0.1:3001/updateStories/${k}/${partie._id}`}
              method="POST"
            >
              <input type="text" name="storie" placeholder={q} />
              <button type="submit">Modifier</button>
            </form>
          </div>
        ))}
      </h1>
      {/*<h1>Sprints: {partie.stories?}</h1> */}
      <a href="http://localhost:5173/">
        <button>QUITTER</button>
      </a>
      <form action={`http://127.0.0.1:3001/update/${partie._id}`} method="POST">
        <input type="text" name="nom" placeholder={partie.nom} />
        <input type="text" name="user" placeholder={partie.users} />
        <input type="text" name="sprint" placeholder={partie.sprints} />
        <input type="text" name="storie" placeholder={partie.stories} />
        <button type="submit">Modifier/ajouter sprints et/ou stories</button>
      </form>
    </div>
  );
};

export default JoinedPage;
