import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <NavLink to="/">Games Overview page</NavLink>
      <NavLink to="/create">Add Game</NavLink>
    </nav>
  );
}
