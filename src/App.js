import { useState } from "react";
import Header from "./parts/Header";
import Main from "./components/Main";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import useStyles from "./styles/app-style";

function App() {
  const [view, setView] = useState("overview");
  const { app } = useStyles();

  //methods
  const handleOverview = () => {
    setView("overview");
  };
  const handleStructure = () => {
    setView("structure");
  };
  const handleGeology = () => {
    setView("geology");
  };

  return (
    <Router>
      <div className={app}>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/:planet">
            <Header handleOverview={handleOverview} />
            <Main
              view={view}
              handleOverview={handleOverview}
              handleStructure={handleStructure}
              handleGeology={handleGeology}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
