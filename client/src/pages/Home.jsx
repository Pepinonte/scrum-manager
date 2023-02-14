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
import { Button, TextField, Avatar, Modal } from "@mui/material";
import LogoScrummy from "../img/logoScrummy.png";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import JoinPartieForm from "../components/JoinPartieForm";

const a = [];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const initalUrlListUserParties = "http://127.0.0.1:3001/listPartiesUser";

const Home = () => {
  const [parties, setParties] = useState([]);
  const [openC, setOpenC] = React.useState(false);
  const [openJ, setOpenJ] = React.useState(false);
  const handleOpenC = () => setOpenC(true);
  const handleCloseC = () => setOpenC(false);
  const handleOpenJ = () => setOpenJ(true);
  const handleCloseJ = () => setOpenJ(false);

  // const idFinderMatcherFromNameUser = (myUser) => {
  //   let users = [];
  //   const idPartie = [];
  //   parties.map((partie, index) => {
  //     users += usersParser(partie.users);
  //     if (users !== "") {
  //       usersParser(partie.users).map((d) => {
  //         if (d === myUser) {
  //           idPartie.push(partie.id);
  //         }
  //       });
  //     }
  //   });

  //   return idPartie;
  // };

  // const fetchItemsListUserParties = (url) => {
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setParties(data);
  //     });
  // };

  // useEffect(() => {
  //   // fetchItemsListUserParties(initalUrlListUserParties);
  // }, []);

  return (
    <div>
      <div className="DivPrincipale">
        <Avatar class="Logo" src={LogoScrummy} alt="Logo Scrummmy" />
        <div c lassName="ListPartie">
          <Button onClick={handleOpenC}>Créer partie</Button>
          <Modal
            open={openC}
            onClose={handleCloseC}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <CreationPartieForm />
            </Box>
          </Modal>

          <Button onClick={handleOpenJ}>Rejoindre une partie</Button>
          <Modal
            open={openJ}
            onClose={handleCloseJ}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <JoinPartieForm />
            </Box>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Home;
