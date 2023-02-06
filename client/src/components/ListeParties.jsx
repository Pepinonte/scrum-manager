import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ListeParties = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
    <div className="ListPartie">
      <TableContainer component={Paper} sx={{ maxWidth: 500 }}>
      <Table sx={{ maxWidth: 500 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nom de la partie</TableCell>
            <TableCell align="right">Rejoindre</TableCell>
            <TableCell align="right">Supprimer</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {/* if have problem with map methode dont forget add ? befor .map */}
          {parties?.map((q, key) => (
            <TableRow
            key={key}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {q.nom}
              </TableCell>
              <TableCell align="right"><a href={`http://localhost:5173/joinedPage/${q._id}`}>
              <button>Rejoindre</button>
              </a>
              </TableCell>
              <TableCell align="right"><a href={`http://127.0.0.1:3001/delete/${q._id}`}>
              <button>Supprimer</button>
            </a></TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    <Button onClick={handleOpen}>Open modal</Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                    Text in a modal
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                  </Typography>
                </Box>
              </Modal>
      {/* <ul>
        {/* if have problem with map methode dont forget add ? befor .map */}
        {/* {parties?.map((q, key) => (
          <li key={key}>
            Partie: {q.nom}
            <a href={`http://localhost:5173/joinedPage/${q._id}`}>
              <button>Rejoindre</button>
            </a>
            <a href={`http://127.0.0.1:3001/delete/${q._id}`}>
              <button>Supprimer</button>
            </a>
          </li>
        ))} */}
      {/* </ul> */}
    </div>
  );
};

export default ListeParties;
