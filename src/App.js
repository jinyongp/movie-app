import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home.js";
import About from "./routes/About.js";
import Detail from "./routes/Detail.js";
import Navigation from "./components/Navigation.js";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail}></Route>
    </HashRouter>
  );
}

export default App;
