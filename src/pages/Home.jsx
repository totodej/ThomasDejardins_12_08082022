import "../styles/pages/Home.css";
import { USER_MAIN_DATA } from "../data/mocks";
import { NavLink } from "react-router-dom";

// Home page to show the users list

function Home() {
  return (
    <div className="home">
      <h1>Bienvenue sur SportSee, veuillez selectionner un utilisateur :</h1>
      <nav>
        {USER_MAIN_DATA.map((user) => (
          <NavLink to={"/user/" + user.id} key={user.id}>
            {user.userInfos.firstName + " " + user.userInfos.lastName}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}

export default Home;
