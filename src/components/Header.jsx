import { NavLink } from "react-router-dom";
import logo from "../assets/logo/logo.png";
import "../styles/components/Header.css";

/**
 * Component that build the header and navigation
 * @returns {ReactElement}
 */

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="logo SportSee" />
      <nav>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="#">Profil</NavLink>
        <NavLink to="#">Réglage</NavLink>
        <NavLink to="#">Communauté</NavLink>
      </nav>
    </div>
  );
}

export default Header;
