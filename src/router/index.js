import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";
import { Navbar, NavbarGroup, Alignment, NavbarHeading, NavbarDivider, Classes, Button } from "@blueprintjs/core";

import { Home } from '../containers/Home';
import { Lost } from '../containers/Lost';
import { Movies } from '../containers/Movies';
import { TVShows } from "../containers/TVShows";
import { Games } from "../containers/Games";
import { Books } from "../containers/Books";

export default function LibRouter() {
  return (
    <Router>
      <div>
        <Navbar >
          <NavbarGroup align={Alignment.LEFT}>
            <NavbarHeading>Home Media Library</NavbarHeading>
            <NavbarDivider />
            <Link to="/">
              <Button className={Classes.MINIMAL} icon="home" text="Home"/>
            </Link>
            <Link to="/movies">
              <Button className={Classes.MINIMAL} icon="film" text="Movies"/>
            </Link>
            <Link to="/tv_shows">
              <Button className={Classes.MINIMAL} icon="video" text="TV Shows"/>
            </Link>
            <Link to="/games">
              <Button className={Classes.MINIMAL} icon="headset" text="Games"/>
            </Link>
            <Link to="/books">
              <Button className={Classes.MINIMAL} icon="book" text="Books"/>
            </Link>
          </NavbarGroup>
        </Navbar>
        <Switch>
          <Route exact path="/">
            <Home />
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
      </div>
    </Router>
  );
}