import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CreationPartieForm from "../components/CreationPartieForm";
import ListeParties from "../components/ListeParties";
import "../css/home.css";
import "../css/creapartie.css";
import "../css/listPartie.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Button, TextField, Avatar } from "@mui/material";
import LogoScrummy from "../img/logoScrummy.png";

const a = [];

const initalUrlListUserParties = "http://127.0.0.1:3001/listPartiesUser";

const Home = () => {
	const [formUser, setFormUser] = useState("");
	const [parties, setParties] = useState([]);
	const [flag, setFlag] = useState(false);

	const usersParser = (usersList) => {
		return usersList.split(":-:");
	};

	const idFinderMatcherFromNameUser = (myUser) => {
		let users = [];
		const idPartie = [];
		parties.map((partie, index) => {
			users += usersParser(partie.users);
			if (users !== "") {
				usersParser(partie.users).map((d) => {
					if (d === myUser) {
						idPartie.push(partie.id);
					}
				});
			}
		});

		return idPartie;
	};

	const fetchItemsListUserParties = (url) => {
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				setParties(data);
			});
	};

	useEffect(() => {
		fetchItemsListUserParties(initalUrlListUserParties);
	}, []);

	useEffect(() => {
		const tempId = idFinderMatcherFromNameUser(formUser);
		if (tempId.length > 0) {
			setFlag(true);
		}
		a.push(tempId);
	}, [formUser]);

	return (
		<div>
			<div className={!flag ? "init" : "invisible"}>
				<form
					onSubmit={(ev) => {
						ev.preventDefault();
						setFormUser(ev.target.nom.value);
					}}
				>
					<input
						type="text"
						name="nom"
						placeholder="Quel votre nom d'utilisateur"
					/>

					<button type="submit">Charger vos parties</button>
				</form>
			</div>
			<div className={flag ? "DivPrincipale" : "invisible"}>
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
				<ListeParties id={a} />
			</div>
		</div>
	);
};

export default Home;
