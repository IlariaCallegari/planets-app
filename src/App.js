import Header from "./parts/Header";
import Main from "./components/Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import useStyles from "./styles/app-style";

function App() {
  const { app } = useStyles();
  return (
    <Router>
      <div className={app}>
        <Header />
        <Switch>
          <Route exact path="/:planet">
            <Main />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
