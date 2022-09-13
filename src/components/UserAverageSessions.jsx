import PropTypes from "prop-types";
import { USER_AVERAGE_SESSIONS } from "../data/mocks";
import getAverageSessions from "../services/averageSessions";
import { AreaChart, XAxis, Tooltip, Area } from "recharts";
import "../styles/components/UserAverageSessions.css";
import { useState, useEffect } from "react";
import Loading from "./Loading";

// Component that build the user's average session chart

function UserAverageSessions(props) {
  const userId = props.userId;
  const USE_API = true;
  const formatDay = {
    1: "L",
    2: "M",
    3: "M",
    4: "J",
    5: "V",
    6: "S",
    7: "D",
  };

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (USE_API) {
      // Use data from API
      const getData = async () => {
        const result = await getAverageSessions(userId);
        setData(result);
      };
      getData();
    } else {
      // Use mocked data
      USER_AVERAGE_SESSIONS.map((user) =>
        user.userId === userId ? setData(user) : null
      );
    }

    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  }, [USE_API, userId, isLoading]);

  if (isLoading || !data) {
    return <Loading />;
  }

  // Convert day(number) to string
  const dayFormatter = (day) => formatDay[day];

  const CustomTooltip = ({ payload: [min], active }) => {
    if (active) {
      return (
        <div className="custom-tooltip">
          <p> {`${min.value} min`}</p>
        </div>
      );
    }
  };

  // Use Recharts (https://recharts.org/en-US)
  return (
    <article className="user-average-sessions-container">
      <h3>Durée moyenne des sessions</h3>
      <AreaChart
        width={258}
        height={263}
        data={data.sessions}
        margin={{ top: 50, right: 0, left: 0, bottom: 0 }}
      >
        <XAxis
          dataKey="day"
          stroke="#FFFFFF"
          tickFormatter={dayFormatter}
          padding={{ right: 10, left: 10 }}
          opacity={0.7}
          tickLine={false}
          axisLine={false}
        />
        <Tooltip
          content={<CustomTooltip />}
          wrapperStyle={{
            backgroundColor: "white",
          }}
        />
        <Area
          type="monotone"
          dataKey="sessionLength"
          fill="rgba(255, 255, 255, 0.15)"
          stroke="#FFFFFF"
        />
      </AreaChart>
    </article>
  );
}

UserAverageSessions.propTypes = {
  userId: PropTypes.number,
};

export default UserAverageSessions;
