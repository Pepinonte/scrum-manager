import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navigation.css";
import logo from "../img/accueil/logorollhistory.png";
import logonom from "../img/accueil/nomlogoblanc.png";

import FormulaireConnexion from "./FormulaireConnexion";

// import btnAccueil from "../img/accueil/button-accueil.png";
// import btnAPropos from "../img/accueil/button-aPropos.png";
// import btnListeParties from "../img/accueil/button-listeParties.png";
import btnTable from "../img/table/Table.png";

const Navigation = (props) => {
  const coockieBrut = document.cookie.split(";");
  const coockieClean = coockieBrut[0].split("=");
  const coockieValue = coockieClean.pop();
  console.log(coockieValue);
  const hide = "hide";
  const show = "table";
  const showText = "play-btn";

  const [showF, setShowF] = useState(false);

  const showForm = () => {
    setShowF(!showF);
  };

  let valueForm = null;

  if (showF) {
    valueForm = <FormulaireConnexion />;
  } else {
    valueForm = null;
  }

  useEffect(() => {
    console.log(props.flag);
  }, [props.flag]);

  return (
    <div className="navigation">
      <nav className="navbar navbar-expand-lg  ">
        <NavLink to="/shopList">
          <button className={coockieValue ? showText : hide}>Shop</button>
        </NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
