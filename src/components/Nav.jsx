import "./nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link to="/">
        <h1 className="logo">M.S.C</h1>
      </Link>

      <Link to="/cart">
        <fieldset className="cart">
          <legend>0</legend>
          <span className="material-symbols-outlined">
            shopping_cart_checkout
          </span>
        </fieldset>
      </Link>
    </nav>
  );
};

export default Nav;
