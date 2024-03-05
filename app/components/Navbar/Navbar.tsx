import {
    Link,
  } from "@remix-run/react";

const Navbar = () => {
    return (
      <div className="remix-app">
        <header className="remix-app__header">
          <div className="container remix-app__header-content">
            <nav aria-label="Main navigation" className="remix-app__header-nav">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/users">User List</Link>
                </li>
                <li>
                  <Link to="/users/add">Add user</Link>
                </li>
                <li>
                  <Link to="/logout">Log out</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </div>
    );
  }

  export default Navbar;