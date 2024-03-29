import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import Movies from './Views/Movies';
import Series from './Views/Series';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { Home } from './Views/Home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/Movies" component= {Movies} />
        <Route path="/Series" component= {Series} />
        <Route path="/" component= {Home} />
      </Switch>
    </BrowserRouter>    
  );
}

export default App;
