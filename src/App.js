import FactList from "./components/Facts/FactList";
import Header from "./components/Header/Header";
import useFetch from "./hooks/useFetch";

import "./App.css";
import Spinner from "./components/UI/Spinner/Spinner";

export const factURL =
  "https://cat-fact.herokuapp.com/facts/random?animal_type=dog&amount=5";

function App() {
  const { data, loading, error } = useFetch(factURL);

  if (loading)
    return (
      <div className="loading-container">
        <Spinner type="spin" color="#f5eedc" />
      </div>
    );

  if (error) console.error(error);

  return (
    <main className="container">
      <Header />
      <FactList data={data} />
    </main>
  );
}

export default App;
