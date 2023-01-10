import CreationPartieForm from "../components/CreationPartieForm";
import ListeParties from "../components/ListeParties";
import "../css/home.css";
import "../css/creapartie.css";
import "../css/listPartie.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Button from "@mui/material/Button";
import LogoScrummy from "../img/logoScrummy.png";
import { Avatar } from "@mui/material";

const Home = () => {
  return (
    <div className="DivPrincipale">
      <Avatar class="Logo" src={LogoScrummy} alt="Logo Scrummmy" />
      {/* <h1 className="HomeText">Scrummy</h1> */}
      <form>
        <div className="btn-crea-join">
          <a href="tthp://127.0.0.1:3001/add" className="Btn-creation">
            <Button variant="outlined">Créer partie</Button>
          </a>
          <a href="http://127.0.0.1:3001/test" className="Btn-join">
            <Button variant="outlined">Rejoindre partie</Button>
          </a>
        </div>
      </form>
      <CreationPartieForm />
      <ListeParties />
    </div>
  );
};

export default Home;
