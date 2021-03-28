import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home.js";
import About from "./routes/About.js";
import Navigation from "./components/Navigation.js";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} />
    </HashRouter>
  );
}

export default App;
