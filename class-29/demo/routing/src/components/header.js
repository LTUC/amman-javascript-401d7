import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Routing</h1>
      <nav>
        <ul>
          <li>
            <NavLink exact to="/">
              Home
             </NavLink>
          </li>
          <li>
            <NavLink to="/profile">
              Profile (Via Render())
             </NavLink>
          </li>
          <li>
            <NavLink to="/people">
              People
             </NavLink>
          </li>
          <li>
            <NavLink to="/foo">
              Foo
             </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
