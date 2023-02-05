export const controller = {};

controller.add = (req, res) => {
	const { nom, users, sprints } = req.body;
	req.getConnection((err, connection) => {
		const query = connection.query(
			"INSERT INTO partie(nom, users, sprints,stories) VALUES (?,?,?,?)",
			[nom, users, "", ""],
			(err, partie) => {
				res.redirect("http://localhost:5173/");
			}
		);
	});
};

controller.listPartiesUser = (req, res) => {
	req.getConnection((err, conn) => {
		conn.query("SELECT * FROM partie", (err, customer) => {
			if (err) {
				res.json(err);
			}
			console.log(customer);
			res.json(customer);
		});
	});
};
controller.partiesPerId = (req, res) => {
	const { id } = req.params;
	console.log(req.params);
	console.log(req.body);
	req.getConnection((err, connection) => {
		const query = connection.query(
			"SELECT * FROM partie WHERE id = ?",
			id,
			(err, partie) => {
				if (err) {
					res.json(err);
				}
				console.log(partie);
				res.json(partie);
				// res.redirect("http://localhost:5173/");
			}
		);
	});
};

controller.dellGame = (req, res) => {
	const data = req.body;
	req.getConnection((err, connection) => {
		const query = connection.query(
			"DELETE FROM partie WHERE id = ?",
			data.idSupp,
			(err, customer) => {
				console.log(customer);
				// res.redirect(`http://localhost:5173/`);
			}
		);
	});
};

controller.ajouterSprint = (req, res) => {
	const { name } = req.params;
	req.getConnection((err, conn) => {
		conn.query(
			"SELECT iduser FROM user where user_username = ?",
			[name],
			(err, customers) => {
				if (err) {
					res.json(err);
				}
				console.log(customers[0].iduser);
				const query = conn.query(
					"SELECT * FROM game_table where iduser_FK = ?",
					[customers[0].iduser],
					(err, customer) => {
						console.log(customer);
						res.json(customer);
					}
				);
			}
		);
	});
};
