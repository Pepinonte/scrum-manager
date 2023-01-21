export const controller = {};

controller.add = (req, res) => {
  const {nom, users, sprints}= req.body;
  req.getConnection((err, connection) => {
    const query = connection.query(
      "INSERT INTO partie(nom, users, sprints) VALUES (?,?,?)",
      [nom, users, sprints],
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
  const {id} = req.params;
	console.log(req.params);
  console.log(req.body);
  req.getConnection((err, connection) => {
    const query = connection.query(
      "SELECT * FROM partie WHERE id = ?",
      id,
      (err, partie) => {
				if(err){
					res.json(err);
				}
        console.log(partie);
				res.json(partie);
        // res.redirect("http://localhost:5173/");
      }
    );
  });
};


