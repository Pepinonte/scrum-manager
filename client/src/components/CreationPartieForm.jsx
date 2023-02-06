import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const CreationPartieForm = () => {
  return (
    <div className="Form">
      <h1 className="m-6">Créer une partie</h1>
      <form action="http://127.0.0.1:3001/add" method="POST">
        <TextField
          id="standard-basic"
          label="Nom de partie"
          variant="standard"
          name="nom"
        />
        <TextField
          id="standard-basic"
          label="votre Pseudo"
          variant="standard"
          name="pseudo"
        />
        <Button type="submit" variant="contained">
          Créer
        </Button>
      </form>
    </div>
  );
};

export default CreationPartieForm;
