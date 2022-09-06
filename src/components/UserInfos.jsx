import "../styles/components/UserInfos.css";
import { useState, useEffect } from "react";
import Loading from "./Loading";

//Component that display the user's name.

function UserInfos(props) {
  const userInfos = props.userInfos;

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  }, [isLoading]);

  if (isLoading) {
    return (
      <div className="user-infos-container-loading">
        <Loading />
      </div>
    );
  }

  return (
    <section className="user-infos-container">
      <h2>
        Bonjour <span className="user-firstname">{userInfos.firstName}</span>
      </h2>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </section>
  );
}

export default UserInfos;
