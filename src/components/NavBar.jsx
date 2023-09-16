import { Link } from "react-router-dom";
import styles from "../styles/NavBar.module.css";
const NavBar = () => {
  return (
    <div>
      <h2>NavBar</h2>
      <Link to="/">Home</Link>
      <Link to="/todo">Todo List</Link>
    </div>
  );
};

export default NavBar;
