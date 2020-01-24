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
          </NavbarGroup>
        </Navbar>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <Lost />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}