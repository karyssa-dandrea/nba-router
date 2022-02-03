import Home from './views/Home/Home';
import './App.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import AchDetail from './views/ACH/AchDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/">Home</Link>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/villagers/:villagerID">
            <AchDetail />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
