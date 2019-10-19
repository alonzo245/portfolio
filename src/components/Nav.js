import React from 'react';
import { Link } from 'react-router-dom';

import styled, { withTheme } from 'styled-components';

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.7rem 2rem;
  position: fixed;
  z-index: 1;
  width: 100%;
  top: 0;
  background-color: #1E242C;
  border-bottom: solid 1px ${props => props.primaryColor};
  opacity: 0.9;

  ul {
    display: flex;
  }

  a {
    color: #fff;
    padding: 0.45rem;
    margin: 0 0.25rem;

    &:hover {
      color: ${props => props.primaryColor};
    }
  }

  @media (max-width: 700px) {
    display: block;
    text-align: center;

    ul {
      text-align: center;
      justify-content: center;
    }

    h1 {
      margin-bottom: 1rem;
    }
  }
`;

const Navbar = (props) => {
    return (
        <Nav className="bg-dark">
            <h1>
                <Link to="/portfolio"> <i className="fas fa-code" aria-hidden="true"></i> Alon Alush</Link>
            </h1>
            <ul>
                {/* <li><Link to="about">About</Link></li>
                <li><Link to="login">Contact</Link></li> */}
            </ul>
        </Nav>
    );
}

export default withTheme(Navbar);
