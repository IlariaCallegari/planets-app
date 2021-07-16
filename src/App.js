import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Home from "./pages/Home";
import MobileMenu from "./components/MobileMenu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import useStyles from "./styles/app-style";

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
  const handleToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const handleClose = () => {
    setIsMobileMenuOpen(false);
    handleOverview();
  };
  const resetApp = () => {
    handleOverview();
    handleClose();
  };

  return (
    <Router>
      <div className={app}>
        <Switch>
          <Route exact path="/" render={() => <Home resetApp={resetApp} />} />
          <Route exact path="/:planet">
            <Header
              handleOverview={handleOverview}
              handleToggle={handleToggle}
              isMobileMenuOpen={isMobileMenuOpen}
            />
            {!isMobileMenuOpen ? (
              <Main
                view={view}
                handleOverview={handleOverview}
                handleStructure={handleStructure}
                handleGeology={handleGeology}
              />
            ) : (
              <MobileMenu handleClose={handleClose} />
            )}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
