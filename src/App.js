import Home from './views/Home/Home';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Details from './components/List/Details/Details';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/villager/:villagerID">
            <Details />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
