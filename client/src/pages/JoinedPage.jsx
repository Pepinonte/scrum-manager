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
  const [flag, setFlag] = useState(false);
  const [openSprint, setOpenSprint] = React.useState(false);
  const [openUsers, setOpenUsers] = React.useState(false);
  const [openStories, setOpenStories] = React.useState(false);
  const [openDailyP, setOpenDailyP] = React.useState(false);
  const [openDailyG, setOpenDailyG] = React.useState(false);
  const handkleFlag = () => setFlag(!flag);
  const handleOpenSprint = () => setOpenSprint(true);
  const handleCloseSprint = () => setOpenSprint(false);
  const handleOpenUsers = () => setOpenUsers(true);
  const handleCloseUsers = () => setOpenUsers(false);
  const handleOpenStories = () => setOpenStories(true);
  const handleCloseStories = () => setOpenStories(false);
  const handleOpenDailyP = () => setOpenDailyP(true);
  const handleCloseDailyP = () => setOpenDailyP(false);
  const handleOpenDailyG = () => setOpenDailyG(true);
  const handleCloseDailyG = () => {
    setOpenDailyG(false);
    setFlag(false);
  };
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
          <Box sx={style}>
            {/* <a href="http://localhost:5173/"> */}
            <button
              className={flag ? "flex invisible" : ""}
              onClick={handkleFlag}
            >
              Demarrer le Daily
            </button>
            {/* </a> */}
            <button
              className={!flag ? "flex invisible" : ""}
              onClick={handleCloseDailyG}
            >
              Cloturer le Daily
            </button>
            <button onClick={handleCloseDailyG}>retour</button>
            {partie.users?.map((q, k) => (
              <div key={k} className={!flag ? "flex invisible" : "flex"}>
                {q}:
                <select name="pets" id="pet-select">
                  <option value="">--Story--</option>
                  {partie.stories?.map((q, k) => (
                    <option value={q}>{q}</option>
                  ))}
                </select>
                <select name="pets" id="pet-select">
                  <option value="">--state--</option>
                  <option value="dog">OK</option>
                  <option value="cat">Pb!</option>
                  <option value="hamster">bof</option>
                </select>
              </div>
            ))}

            {/* <div className="flex">
              <select name="users" id="users-select">
                <option value="">--User--</option>
                {partie.users?.map((q, k) => (
                  <option value={q}>{q}</option>
                ))}
              </select>
              <select name="pets" id="pet-select">
                <option value="">--Story--</option>
                {partie.stories?.map((q, k) => (
                  <option value={q}>{q}</option>
                ))}
              </select>
              <select name="pets" id="pet-select">
                <option value="">--state--</option>
                <option value="dog">OK</option>
                <option value="cat">Pb!</option>
                <option value="hamster">bof</option>
              </select>
            </div> */}
          </Box>
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
          <h2>Changer nom de partie</h2>
          <input type="text" name="nom" placeholder={partie.nom} />
          <h2>Ajouter User</h2>
          <input type="text" name="user" placeholder={partie.users} />
          <h2>Ajouter Sprint</h2>
          <input type="text" name="sprint" placeholder={partie.sprints} />
          <h2>Ajouter Story</h2>
          <input type="text" name="storie" placeholder={partie.stories} />
          <Button variant="outlined" color="error" type="submit">
            Ajouter
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default JoinedPage;
