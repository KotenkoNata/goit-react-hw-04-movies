import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import routes from '../../routes';

const NavLink = () => {};

const Navigation = () => {
  return (
    <Nav variant={'tabs'} defaultActiveKey={'home'}>
      <Nav.Item>
        <Nav.Link eventKey={'home'} as={RouterLink} to={routes.home}>
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          eventKey={'moviesPage'}
          as={RouterLink}
          to={routes.moviesPage}
        >
          Movies
        </Nav.Link>
      </Nav.Item>
    </Nav>

    // <nav className="nav nav-pills">
    //   <NavLink
    //     exact
    //     to={routes.home}
    //     className="nav-link"
    //     activeClassName="active"
    //   >
    //     Home
    //   </NavLink>
    //   <NavLink
    //     to={routes.moviesPage}
    //     className="nav-link"
    //     activeClassName="active"
    //   >
    //     Movies
    //   </NavLink>
    // </nav>
  );
};

export default Navigation;
