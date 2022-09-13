import { NavLink } from "react-router-dom";
import "../styles/components/SideBar.css";
import yoga from "../assets/icons/yoga.png";
import swim from "../assets/icons/swim.png";
import gym from "../assets/icons/gym.png";
import bicycle from "../assets/icons/bicycle.png";

/**
 * Component that build the side bar
 * @returns {ReactElement}
 */

function SideBar() {
  return (
    <div className="sidebar">
      <nav>
        <NavLink to="#">
          <img src={yoga} alt="icon yoga" />
        </NavLink>
        <NavLink to="#">
          <img src={swim} alt="icon swim" />
        </NavLink>
        <NavLink to="#">
          <img src={gym} alt="icon gym" />
        </NavLink>
        <NavLink to="#">
          <img src={bicycle} alt="icon bicycle" />
        </NavLink>
      </nav>
      <p>Copiryght, SportSee 2020</p>
    </div>
  );
}

export default SideBar;
