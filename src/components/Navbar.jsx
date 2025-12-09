import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav>
        <NavLink to="/">Task List</NavLink>
        <NavLink to="/add">Add Task</NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
