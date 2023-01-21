import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const initalUrlListUserParties = "http://127.0.0.1:3001/listPartiesUser";

const JoinedPage = () => {
  const { partieId } = useParams();
  const [parties, setParties] = useState([]);
  const [namePartieOwn, setNamePartieOwn] = useState([]);
  const [flag, setFlag] = useState(false);
  const [test, setTest] = useState("");
  const fetchItemsListUserParties = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setParties(data);
        setNamePartieOwn(data[partieId - 1]);
      })
      .catch((err) => console.log("pppp" + err));
  };

  useEffect(() => {
    fetchItemsListUserParties(initalUrlListUserParties);
  }, []);

  return (
    <div>
      {/* <button className={flag ? "hidden" : ""} onClick={() => setFlag(true)}>
        ACCEDER
      </button> */}
      <h1
        // className={flag ? "" : "hidden"}
        onClick={() => console.log(namePartieOwn.nom)}
      >
        Ta rejoin la partie: {namePartieOwn.nom}
      </h1>
			<a href="http://localhost:5173/">
			<button>QUITTER</button>
		  </a>

    </div>
  );
};

	// JoinedPage.propTypes = {
//   id: propTypes.number,
// };

export default JoinedPage;
