export const controller = {};

controller.add = (req, res) => {
  const data = req.body;
  console.log(req.body);
  req.getConnection((err, connection) => {
    const query = connection.query(
      "INSERT INTO partie (nom) VALUE (?)",
      data.nom,
      (err, partie) => {
        console.log(partie);
        res.redirect("http://127.0.0.1:5173/");
      }
    );
  });
};

controller.listPartiesUser = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM partie", (err, customer) => {
      console.log(customer);
      res.json(customer);
    });
  });
};
