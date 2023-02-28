import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Button, TextField, Avatar, Modal, Grid } from "@mui/material";

import Box from "@mui/material/Box";
import "../css/JoinedPage.css";

const JoinedPage = () => {
  const { partieId, utilisateur } = useParams();
  const initalUrlListUserParties = `http://127.0.0.1:3001/parties/${partieId}`;
  const [partie, setPartie] = useState([]);

  /*----Modal-----*/
  const [flag, setFlag] = useState(true);
  const [flag2, setFlag2] = useState(false);
  const [flag3, setFlag3] = useState(false);
  const [openSprint, setOpenSprint] = React.useState(false);
  const [openUsers, setOpenUsers] = React.useState(false);
  const [openStories, setOpenStories] = React.useState(false);
  const [openDailyP, setOpenDailyP] = React.useState(false);
  const [openDailyG, setOpenDailyG] = React.useState(false);
  const handkleFlag = () => setFlag(!flag);
  const handkleFlag2 = () => {
    setFlag(false);
    setFlag2(!flag2);
  };
  const handkleFlag3 = () => {
    handkleFlag2();
    setFlag3(!flag3);
  };
  const handleOpenSprint = () => setOpenSprint(true);
  const handleCloseSprint = () => setOpenSprint(false);
  const handleOpenUsers = () => setOpenUsers(true);
  const handleCloseUsers = () => setOpenUsers(false);
  const handleOpenStories = () => setOpenStories(true);
  const handleCloseStories = () => setOpenStories(false);
  const handleOpenDailyP = () => {
    setOpenDailyP(true);
  };
  const handleCloseDailyP = () => {
    setOpenDailyP(false);
    setFlag(false);
    setFlag2(false);
    setFlag3(false);
  };
  const handleOpenDailyG = () => {
    setOpenDailyG(true);
    setFlag(false);
  };
  const handleCloseDailyG = () => {
    fetchItemsListUserParties(`http://127.0.0.1:3001/closeDaily/${partie._id}`);
    setOpenDailyG(false);
    setFlag(true);
    setFlag2(false);
    setFlag3(false);
  };
  const handleStartDaily = () => {
    handkleFlag();
    fetchItemsListUserParties(`http://127.0.0.1:3001/openDaily/${partie._id}`);
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
      <h1>
        <b>{partie.nom}</b>
      </h1>
      <h1>Bienvenue {utilisateur}</h1>

      <h1>Code de la partie : {partie._id}</h1>
      <h1>Nombre de jours : {partie.daysNumber}</h1>
      <Box sx={style1}>
        <Button onClick={handleOpenSprint}>Gérer les Sprints</Button>
        <Modal
          open={openSprint}
          onClose={handleCloseSprint}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div>
              <div className="TitreSprint">Sprints: </div>

              {partie.sprints?.map((q, k) => (
                <div key={k} className="SprintItem">
                  <Grid container spacing={2}>
                    <Grid item xs={8}>
                      <b>{q}</b>
                    </Grid>
                    <Grid item xs={4}>
                      <form
                        action={`http://127.0.0.1:3001/deleteSprint/${k}/${partie._id}/${utilisateur}`}
                        method="POST"
                      >
                        <Button type="submit" variant="outlined" color="error">
                          Supprimer
                        </Button>
                        {/* <button type="submit">Supprimer</button> */}
                      </form>
                    </Grid>
                  </Grid>
                  <Grid container spacing={2}>
                    <Grid item xs={15}>
                      <form
                        action={`http://127.0.0.1:3001/updateSprint/${k}/${partie._id}/${utilisateur}`}
                        method="POST"
                      >
                        <TextField
                          id="standard-basic"
                          label={q}
                          variant="standard"
                          name="sp"
                        />
                        <Button type="submit" variant="contained">
                          Modifier
                        </Button>
                      </form>
                    </Grid>
                  </Grid>
                </div>
              ))}
            </div>
            <label>---------------------------------------------------</label>
            <form
              action={`http://127.0.0.1:3001/addSprint/${partie._id}/${utilisateur}`}
              method="POST"
            >
              <p className="TitreAjoutSprint">Ajouter un sprint :</p>
              <TextField
                id="standard-basic"
                label={partie.sprints}
                variant="standard"
                name="sprint"
              />
              {/* <input type="text" name="sprint" placeholder={partie.sprints} /> */}
              <Button
                variant="outlined"
                color="success"
                type="submit"
                id="BtnAjoutSprint"
              >
                Ajouter Sprints
              </Button>
            </form>
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
                <div key={k} className="SprintItem">
                  <Grid container spacing={2}>
                    <Grid item xs={8}>
                      <b>{q}</b>
                    </Grid>
                    <Grid item xs={4}>
                      <form
                        action={`http://127.0.0.1:3001/deleteSprint/${k}/${partie._id}`}
                        method="POST"
                      >
                        <Button type="submit" variant="outlined" color="error">
                          Retirer
                        </Button>
                      </form>
                    </Grid>
                  </Grid>
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
              <div className="TitreSprint">Stories: </div>

              {partie.stories?.map((q, k) => (
                <div key={k} className="SprintItem">
                  <Grid container spacing={2}>
                    <Grid item xs={8}>
                      <b>{q}</b>
                    </Grid>
                    <Grid item xs={4}>
                      <form
                        action={`http://127.0.0.1:3001/deleteStories/${k}/${partie._id}/${utilisateur}`}
                        method="POST"
                      >
                        <Button type="submit" variant="outlined" color="error">
                          Supprimer
                        </Button>
                        {/* <button type="submit">Supprimer</button> */}
                      </form>
                    </Grid>
                  </Grid>
                  <Grid container spacing={2}>
                    <Grid item xs={15}>
                      <form
                        action={`http://127.0.0.1:3001/updateStories/${k}/${partie._id}/${utilisateur}`}
                        method="POST"
                      >
                        <TextField
                          id="standard-basic"
                          label={q}
                          variant="standard"
                          name="storie"
                        />
                        <Button type="submit" variant="contained">
                          Modifier
                        </Button>
                        {/* <input type="text" name="storie" placeholder={q} />
                        <button type="submit">Modifier</button> */}
                      </form>
                    </Grid>
                  </Grid>
                </div>
              ))}
            </h1>
            <label>---------------------------------------------------</label>
            <form
              action={`http://127.0.0.1:3001/addStory/${partie._id}/${utilisateur}`}
              method="POST"
            >
              {/* <input type="text" name="storie" placeholder={partie.stories} /> */}
              <TextField
                id="standard-basic"
                label="Ajouter Story"
                variant="standard"
                name="storie"
              />
              {/* <input type="text" name="storie" placeholder={"Ajouter Story"} /> */}
              <Button
                variant="outlined"
                color="success"
                type="submit"
                id="BtnAjoutSprint"
              >
                Ajouter Story
              </Button>
            </form>
          </Box>
        </Modal>

        <Button onClick={handleOpenDailyP}>Participer au Daily</Button>
        <Modal
          open={openDailyP}
          onClose={handleCloseDailyP}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className={!flag ? "flex invisible" : ""}>
              <select name="stories" id="stories-select">
                <option value="">--Story--</option>
                {partie.stories?.map((q, k) => (
                  <option key={k} value={q}>
                    {q}
                  </option>
                ))}
              </select>
              <button onClick={handkleFlag2}>Simuler sa productivite</button>
            </div>
            <div className={!flag2 ? "flex invisible" : ""}>
              <div>Question:ma super question</div>
              <button onClick={handkleFlag3}>Reponder</button>
            </div>
            <div className={!flag3 ? "flex invisible" : ""}>
              <div>Reponse:correcte</div>
            </div>
            <button onClick={handleCloseDailyP}>retour</button>
          </Box>
        </Modal>

        <Button onClick={handleOpenDailyG}>Gérer le Daily</Button>
        <Modal
          open={openDailyG}
          onClose={handleCloseDailyG}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <button
              className={flag ? "flex invisible" : ""}
              onClick={handleStartDaily}
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
                    <option key={k} value={q}>
                      {q}
                    </option>
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
          </Box>
        </Modal>

        <a href="http://localhost:5173/">
          <Button variant="outlined" color="error">
            QUITTER
          </Button>
        </a>
      </Box>
    </div>
  );
};

export default JoinedPage;
