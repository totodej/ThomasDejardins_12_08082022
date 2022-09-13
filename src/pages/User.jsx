import { useParams } from "react-router-dom";
import "../styles/pages/User.css";
import { USER_MAIN_DATA } from "../data/mocks";
import getUser from "../services/user";
import Error from "../pages/Error";
import UserInfos from "../components/UserInfos";
import UserActivity from "../components/UserActivity";
import UserAverageSessions from "../components/UserAverageSessions";
import UserPerformance from "../components/UserPerformance";
import TodayScore from "../components/TodayScore";
import KeyData from "../components/KeyData";
import { useEffect, useState } from "react";
import { mainDataModel } from "../services/userDataModel";

/**
 * User page to show all informations about the user
 * @returns {ReactElement}
 */

function User() {
  const params = useParams();
  const paramsId = Number(params.id);
  const USE_API = true;

  const [data, setData] = useState(null);

  useEffect(() => {
    if (USE_API) {
      // Use data from API
      const getData = async () => {
        const result = await getUser(paramsId);
        const formattedData = new mainDataModel(result);
        setData(formattedData);
      };
      getData();
    } else {
      // Use mocked data
      const arrayIds = [];
      let formattedData;
      USER_MAIN_DATA.map((user) => arrayIds.push(user.id));
      if (arrayIds.includes(paramsId)) {
        USER_MAIN_DATA.map((user) =>
          user.id === paramsId
            ? (formattedData = new mainDataModel(user))
            : null
        );
        setData(formattedData);
      } else {
        setData("Error");
      }
    }
  }, [USE_API, paramsId]);

  if (!data) {
    return null;
  }

  if (data === "Error") {
    return <Error />;
  }

  return (
    <div className="user-container">
      <main>
        <UserInfos userInfos={data} />
        <section className="user-data">
          <div className="user-charts">
            <div className="responsive">
              <UserActivity userId={data.id} />
            </div>
            <UserAverageSessions userId={data.id} />
            <UserPerformance userId={data.id} />
            <TodayScore userData={data} />
          </div>
          <div className="user-key-data">
            <KeyData userKeyData={data} />
          </div>
        </section>
      </main>
    </div>
  );
}

export default User;
