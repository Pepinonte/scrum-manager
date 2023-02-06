import React, { useState } from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const JoinPartieForm = () => {
  const [id, setId] = useState([]);
  return (
    <div className="Form">
      <h1 className="m-6">Créer une partie</h1>
      {/* http://localhost:5173/joinedPage/${q._id} */}
      <form action={`http://127.0.0.1:3001/join/${id}`} method="post">
        <TextField
          id="standard-basic"
          label="Code de partie"
          variant="standard"
          name="id"
          onChange={(event) => {
            setId(event.target.value);
          }}
        />
        <TextField
          id="standard-basic"
          label="votre Pseudo"
          variant="standard"
          name="pseudo"
        />
        {/* <a href={`http://localhost:5173/joinedPage/${id}`}> */}
        <Button
          // onClick={(e) => e.preventDefault()}
          type="submit"
          variant="contained"
        >
          Rejoindre
        </Button>
        {/* </a> */}
      </form>
    </div>
  );
};

export default JoinPartieForm;
