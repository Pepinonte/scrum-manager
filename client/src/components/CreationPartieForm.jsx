import { Button, TextField } from "@mui/material";
const CreationPartieForm = () => {
  return (
    <div className="Form">
      <h1 className="m-6">Créer une partie</h1>
      <form action="http://127.0.0.1:3001/add" method="post">
        <TextField
          id="outlined-basic"
          label="Nom de la partie"
          variant="outlined"
        >
          <input type="text" name="nom" placeholder="Nom de la partie" />
        </TextField>
        <Button variant="contained" color="success" type="submit">
          Créer
        </Button>
      </form>
    </div>
  );
};

export default CreationPartieForm;
