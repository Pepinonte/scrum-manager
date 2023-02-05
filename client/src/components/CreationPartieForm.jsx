const CreationPartieForm = () => {
  return (
    <div className="Form">
      <h1 className="m-6">Créer une partie</h1>
      <form action="http://127.0.0.1:3001/add" method="POST">
        <input type="text" name="nom" placeholder="Nom de la partie" />
        <button type="submit">Créer</button>
      </form>
    </div>
  );
};

export default CreationPartieForm;
