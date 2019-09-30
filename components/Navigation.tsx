import React, { useState } from "react";
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={() => setIsOpen(prevState => !prevState)} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/task1">Task 1</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/task2">Task 2</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/task3">Task 3</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/task4">Task 4</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </Container>
  );
};
export default Navigation;
