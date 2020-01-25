import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";

import { Home } from '../containers/Home';
import { Lost } from '../containers/Lost';
import { Movies } from '../containers/Movies';
import { TVShows } from "../containers/TVShows";
import { Games } from "../containers/Games";
import { Books } from "../containers/Books";
import { UserMenu } from "../components/users/UserMenu";

export default function LibRouter() {
  let darkMode = true;
  let menuProps = {
    SignedIn: true,
    DarkMode: darkMode
  }
  const baseProps = { content: <UserMenu props={menuProps}/>, position: Position.BOTTOM };

  return (
    <Router>
      <div>
        <Navbar >
          <NavbarGroup align={Alignment.LEFT}>
            <NavbarHeading>Home Media Library</NavbarHeading>
            <NavbarDivider />
            <Link to="/">
              <Button minimal={true} icon="home" text="Home"/>
            </Link>
            <Link to="/movies">
              <Button minimal={true} icon="film" text="Movies"/>
            </Link>
            <Link to="/tv_shows">
              <Button minimal={true} icon="video" text="TV Shows"/>
            </Link>
            <Link to="/games">
              <Button minimal={true} icon="headset" text="Games"/>
            </Link>
            <Link to="/books">
              <Button minimal={true} icon="book" text="Books"/>
            </Link>
          </NavbarGroup>
          <NavbarGroup align={Alignment.RIGHT}>
            <Popover {...baseProps}>
              <Button minimal={true} icon="user" text=""/>
            </Popover>
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