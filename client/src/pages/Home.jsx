import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CreationPartieForm from "../components/CreationPartieForm";
import ListeParties from "../components/ListeParties";
import "../css/home.css";
import "../css/creapartie.css";
import "../css/listPartie.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Button, TextField, Avatar } from "@mui/material";
import LogoScrummy from "../img/logoScrummy.png";
import Box from '@mui/material/Box';

const a = [];

const initalUrlListUserParties = "http://127.0.0.1:3001/listPartiesUser";

const Home = () => {
  const [parties, setParties] = useState([]);

  const idFinderMatcherFromNameUser = (myUser) => {
    let users = [];
    const idPartie = [];
    parties.map((partie, index) => {
      users += usersParser(partie.users);
      if (users !== "") {
        usersParser(partie.users).map((d) => {
          if (d === myUser) {
            idPartie.push(partie.id);
          }
        });
      }
    });

    return idPartie;
  };

  const fetchItemsListUserParties = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setParties(data);
      });
  };

  useEffect(() => {
    // fetchItemsListUserParties(initalUrlListUserParties);
  }, []);

  //   const tempId = idFinderMatcherFromNameUser(formUser);
  //   if (tempId.length > 0) {
  //     setFlag(true);
  //   }
  //   a.push(tempId);
  // }, [formUser]);

  return (
    <div>
        <div className="DivPrincipale">
            <Avatar class="Logo" src={LogoScrummy} alt="Logo Scrummmy" />
            <CreationPartieForm />
            <ListeParties />
        </div>
    </div>
  );
};

export default Home;
