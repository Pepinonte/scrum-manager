import CreationPartieForm from "../components/CreationPartieForm";

const Home = () => {
  return (
    <div>
      <h1 className="m-6">Home</h1>
      <form>
        <div className="flex space-x-20 flex-row justify-center ">
          <a
            href="tthp://127.0.0.1:3001/add"
            class="button"
            className="p-5 rounded-full bg-indigo-500 border-4 border-indigo-500/100"
          >
            Créer partie
          </a>
          <a
            href="http://127.0.0.1:3001/test"
            class="button"
            className="p-5 rounded-full bg-indigo-500 border-4 border-indigo-500/100"
          >
            Rejoindre partie
          </a>
        </div>
      </form>
      <CreationPartieForm />
    </div>
  );
};

export default Home;
