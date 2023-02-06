import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Button, TextField, Avatar, Modal } from "@mui/material";
import Box from "@mui/material/Box";
import "../css/JoinedPage.css";

const JoinedPage = () => {
  const { partieId } = useParams();
  const initalUrlListUserParties = `http://127.0.0.1:3001/parties/${partieId}`;
  const [partie, setPartie] = useState([]);

  /*----Modal-----*/
  const [openSprint, setOpenSprint] = React.useState(false);
  const [openUsers, setOpenUsers] = React.useState(false);
  const [openStories, setOpenStories] = React.useState(false);
  const [openDailyP, setOpenDailyP] = React.useState(false);
  const [openDailyG, setOpenDailyG] = React.useState(false);
  const handleOpenSprint = () => setOpenSprint(true);
  const handleCloseSprint = () => setOpenSprint(false);
  const handleOpenUsers = () => setOpenUsers(true);
  const handleCloseUsers = () => setOpenUsers(false);
  const handleOpenStories = () => setOpenStories(true);
  const handleCloseStories = () => setOpenStories(false);
  const handleOpenDailyP = () => setOpenDailyP(true);
  const handleCloseDailyP = () => setOpenDailyP(false);
  const handleOpenDailyG = () => setOpenDailyG(true);
  const handleCloseDailyG = () => setOpenDailyG(false);
  /*--------------*/

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
  const style1 = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 300,
    bgcolor: "background.paper",
    border: "2px solid #000",
    borderRadius: 10,
    boxShadow: 24,
    p: 4,
  };

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
    <div className="JoinedPage">
      <h1>Ta rejoin la partie: {partie.nom}</h1>
      <h1>Code partie : {partie._id}</h1>
      <Box sx={style1}>
        <Button onClick={handleOpenSprint}>Gérer les Sprints</Button>
        <Modal
          open={openSprint}
          onClose={handleCloseSprint}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
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
          </Box>
        </Modal>

        <Button onClick={handleOpenUsers}>Gérer les Utilisateurs</Button>
        <Modal
          open={openUsers}
          onClose={handleCloseUsers}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
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
          </Box>
        </Modal>

        <Button onClick={handleOpenStories}>Gérer les Stories</Button>
        <Modal
          open={openStories}
          onClose={handleCloseStories}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
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
          </Box>
        </Modal>

        <Button onClick={handleOpenDailyP}>Participer au Daily</Button>
        <Modal
          open={openDailyP}
          onClose={handleCloseDailyP}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}></Box>
        </Modal>

        <Button onClick={handleOpenDailyG}>Gérer le Daily</Button>
        <Modal
          open={openDailyG}
          onClose={handleCloseDailyG}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}></Box>
        </Modal>

        <a href="http://localhost:5173/">
          <Button variant="outlined" color="error">
            QUITTER
          </Button>
          {/* <button>QUITTER</button> */}
        </a>
        <form
          action={`http://127.0.0.1:3001/update/${partie._id}`}
          method="POST"
        >
          <input type="text" name="nom" placeholder={partie.nom} />
          <input type="text" name="user" placeholder={partie.users} />
          <input type="text" name="sprint" placeholder={partie.sprints} />
          <input type="text" name="storie" placeholder={partie.stories} />
          <button type="submit">Modifier/ajouter sprints et/ou stories</button>
        </form>
      </Box>
    </div>
  );
};

export default JoinedPage;
