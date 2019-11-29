import React from "react";
import { Menu, Container } from "semantic-ui-react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <Menu inverted fixed="top" size="massive">
      <Container>
        <Menu.Item header>
          <img src="%PUBLIC_URL%/assets/icon.png" alt="logo" />
          IP LOCATION
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default NavBar;
