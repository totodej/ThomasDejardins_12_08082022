import PropTypes from "prop-types";
import { USER_ACTIVITY } from "../data/mocks";
import { useState, useEffect } from "react";
import "../styles/components/UserActivity.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";
import Loading from "./Loading";
import getActivity from "../services/activity";
import { activityDataModel } from "../services/userDataModel";

/**
 * Component that build the user's activity chart
 * @param {number} userId
 * @returns {ReactElement}
 */

function UserActivity(props) {
  const userId = props.userId;
  const USE_API = true;

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (USE_API) {
      // Use data from API
      const getData = async () => {
        const result = await getActivity(userId);
        const formattedData = new activityDataModel(result);
        setData(formattedData);
      };
      getData();
    } else {
      // Use mocked data
      let formattedData;
      USER_ACTIVITY.map((user) =>
        user.userId === userId
          ? (formattedData = new activityDataModel(user))
          : null
      );
      setData(formattedData);
    }

    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  }, [USE_API, userId, isLoading]);

  if (isLoading || !data) {
    return (
      <div className="user-activity-container-loading">
        <Loading />
      </div>
    );
  }

  const RenderCustomBarLabel = (num) => ++num;

  // Custom ToolTip to display kg & kCal
  const CustomTooltip = ({ payload: [kg, kCal], active }) => {
    if (active) {
      return (
        <div className="custom-tooltip">
          <p> {`${kg.value} kg`}</p>
          <p> {`${kCal.value} kCal`}</p>
        </div>
      );
    }
  };

  // Use Recharts (https://recharts.org/en-US)
  return (
    <article className="user-activity-container">
      <div>
        <h3>Activité quotidienne</h3>
        <BarChart
          width={820}
          height={240}
          data={data.sessions}
          margin={{ top: 20, right: 0, left: 45, bottom: 0 }}
        >
          <XAxis
            dataKey={data.sessions.index}
            stroke="#9B9EAC"
            tickFormatter={RenderCustomBarLabel}
          />
          <YAxis orientation="right" />
          <Tooltip
            content={<CustomTooltip />}
            position={{ y: -15 }}
            wrapperStyle={{
              backgroundColor: "#E60000",
              color: "#FFFFFF",
              width: "72px",
              height: "90px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "80px",
              fontSize: "13px",
            }}
            cursor={{
              fill: "rgba(196, 196, 196, 0.5)",
            }}
          />
          <Legend
            width={400}
            iconType="circle"
            wrapperStyle={{ top: -40, right: 0 }}
            layout="horizontal"
            verticalAlign="top"
            align="right"
            formatter={(value) => (
              <span className="text-color-class">{value}</span>
            )}
          />
          <CartesianGrid stroke="#ccc" strokeDasharray="3" vertical={false} />
          <Bar
            dataKey="kilogram"
            name="Poids (kg)"
            radius={[5, 5, 0, 0]}
            fill="#282D30"
            barSize={7}
          />
          <Bar
            dataKey="calories"
            name="Calories brûlées (kCal)"
            radius={[5, 5, 0, 0]}
            fill="#E60000"
            barSize={7}
          />
        </BarChart>
      </div>
    </article>
  );
}

UserActivity.propTypes = {
  userId: PropTypes.number,
};

export default UserActivity;
