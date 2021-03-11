import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Header from './componenets/Header/Header';
import Home from './componenets/Home/Home';
import LeagueDetails from './componenets/LeagueDetails/LeagueDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import NoMatch from './componenets/NoMatch/NoMatch';

function App() {
  return (
    <Router>
      
      <Switch>
        <Route exact path="/">
          <Header></Header>
          <Home />
        </Route>
        <Route path="/home">
          <Header></Header>
          <Home />
        </Route>
        <Route path="/league/:idLeague">
          <LeagueDetails />
        </Route>
        <Route path="*">
          <NoMatch></NoMatch>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
