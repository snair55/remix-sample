import {
  Link,
} from "@remix-run/react";
const Navbar = () => {
  return (
    <div className="header">
      <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/users">User List</Link>
        <Link to="/users/add">Add user</Link>
        <Link to="/logout">Log out</Link>
      </div>
    </div>
  );
}

export default Navbar;