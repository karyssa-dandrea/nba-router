import Home from './views/Home/Home';
import './App.css';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import AchDetail from './views/Home/ACH/AchDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/villagers/:villagerID">
            <AchDetail />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
