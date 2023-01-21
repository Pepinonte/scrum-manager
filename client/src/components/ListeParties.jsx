import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

const ListeParties = (props) => {
  const [parties, setParties] = useState([]);
  const [parties2, setParties2] = useState([]);
  const [partieOwn, setPartieOwn] = useState("");

  const initalUrlListUserParties = "http://127.0.0.1:3001/listPartiesUser";
  const initalUrlListUserParties2 = "http://127.0.0.1:3001/partiesPerId/";

  const fetchItemsListUserParties = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setParties(data);
				console.log(data);
      })
      .catch((err) => console.log("pppp" + err));
  };

  const fetchItemsListUserParties2 = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setParties2([...parties2, data]);
				console.log(data);
      })
      .catch((err) => console.log("pppp" + err));
  };
	useEffect(() => {
		let test = [];
		props.id.map((idd) =>{
			if (idd !== "" && idd !== " " && idd.length > 0) {
				console.log(idd);
				idd.map((q) => {
					test.push(fetchItemsListUserParties2(`${initalUrlListUserParties2}${q}`));
					const r = fetchItemsListUserParties2(`${initalUrlListUserParties2}${q}`);
					console.log(JSON.stringify(r));
				})
				
			}
		})
	}, [props])

  const joinPartie = (id) => {
    setPartieOwn(id);
    console.log("partieOwn" + partieOwn);
  };

  return (
    <div>
      <h1>Liste des parties</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Nom de la partie</TableCell>
              <TableCell align="center">Lien</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {parties.map((partie, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {partie.id}-{partie.nom}-users:{partie.users}-sprints:{partie.sprints}
                </TableCell>
                <TableCell align="right">
                  <NavLink to={`/joinedPage/${partie.id}`}>
                    <Button>rejoindre</Button>
                  </NavLink>
                </TableCell>
                {/* <div key={index}>
                <h1>
                  {partie.id}-{partie.nom}
                </h1>
                <button onClick={() => joinPartie(partie.id)}>rejoindre</button>
                <NavLink to={`/joinedPage/${partie.id}`}>
                  <button>rejoindre</button>
                </NavLink>
                </div> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
			 <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Nom de la partie</TableCell>
              <TableCell align="center">Lien</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {parties2.map((partie, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  id:{partie.id}---------------------nom:{partie.nom}-----------------users:{partie.users}-------------------sprints:{partie.sprints}
                </TableCell>
                <TableCell align="right">
                  <NavLink to={`/joinedPage/${partie.id}`}>
                    <Button>rejoindre</Button>
                  </NavLink>
                </TableCell>
                {/* <div key={index}>
                <h1>
                  {partie.id}-{partie.nom}
                </h1>
                <button onClick={() => joinPartie(partie.id)}>rejoindre</button>
                <NavLink to={`/joinedPage/${partie.id}`}>
                  <button>rejoindre</button>
                </NavLink>
                </div> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ListeParties;
