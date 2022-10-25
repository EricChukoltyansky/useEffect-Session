import logo from "./logo.svg";
import "./App.css";
import { useFetch } from "./useFetch";

function App() {
  console.log("App - Rendered");

  const { data } = useFetch({ url: "/Eric.json" });

  return (
    <div className="App">
      <div>Hello</div>
    </div>
  );
}

export default App;
