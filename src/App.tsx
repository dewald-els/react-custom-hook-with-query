import "./App.css";
import GuitarList from "./components/guitar-list";
import { useGuitars } from "./components/hooks";

function App() {
  const guitars = useGuitars();
  return (
    <div className="App">
      <GuitarList guitars={guitars} />
    </div>
  );
}

export default App;
