import { useState } from "react";
import Header from "./parts/Header";
import Main from "./components/Main";
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
        <Header handleOverview={handleOverview} />
        <Switch>
          <Route exact path="/:planet">
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
