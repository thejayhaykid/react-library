import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import { Home } from '../containers/Home';
import { Lost } from '../containers/Lost';
import { Movies } from '../containers/Movies';
import { TVShows } from "../containers/TVShows";
import { Games } from "../containers/Games";
import { Books } from "../containers/Books";
// import { UserMenu } from "../components/users/UserMenu";
import { Navbar } from "./Navbar";

export default function LibRouter() {
  return (
    <Router>
      <Navbar />
      <Switch>
          <Route exact path="/">
            <Home className="main-body" />
          </Route>
          <Route path="/movies">
            <Movies />
          </Route>
          <Route path="/tv_shows">
            <TVShows />
          </Route>
          <Route path="/games">
            <Games />
          </Route>
          <Route path="/books">
            <Books />
          </Route>
          <Route path="*">
            <Lost />
          </Route>
        </Switch>
    </Router>
  );
}