import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const initalUrlListUserParties = "http://127.0.0.1:3001/listPartiesUser";

const JoinedPage = () => {
  const { partieId } = useParams();
  const [parties, setParties] = useState([]);
  const [namePartieOwn, setNamePartieOwn] = useState([]);
  const [sprints, setSprints] = useState([]);
  const [flag, setFlag] = useState(false);
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

  useEffect(() => {
    setSprints([usersParser(namePartieOwn.sprints)]);
    console.log(sprints[0]);
  }, [namePartieOwn]);

  const usersParser = (dataList) => {
    if (typeof dataList === "string") return dataList.split(":-:");
  };

  return (
    <div>
      <h1>Ta rejoin la partie: {namePartieOwn.nom}</h1>
      {/* <h1>Les sprints sont: {namePartieOwn.sprints}</h1> */}
      {/* Les sprints sont: <ul>{sprints.map((q) => q.map((o) => o))}</ul> */}
      <h1>Les stories sont: {namePartieOwn.stories}</h1>
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
