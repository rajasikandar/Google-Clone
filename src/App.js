import './App.css';
import React from 'react';
import Home from "./Home";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SearchPage from './SearchPage';

function App() {
  return (
    //BEM 
    <div className="app">
    <Router>
      {/*Add a Switch it allows us to  render components based on that route that we are in*/}
      <Switch>
        <Route path="/search">
          <SearchPage/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
      </Switch>
    
     {/*Home (The one with the search one)*/}
     {/*Search Page (This will be the result page)*/}
    
     </Router>
    </div>
  );
}

export default App;
