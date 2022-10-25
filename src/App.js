import logo from "./logo.svg";
import "./App.css";
import { useFetch } from "./useFetch";
import { useEffect2 } from "./useEffect2";

function App() {
  console.log("App - Rendered");

  const { data } = useFetch({ url: "/Eric.json" });

  return (
    <div className="App">
      <div>Hello</div>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
}

export default App;
