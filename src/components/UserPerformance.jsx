import { USER_PERFORMANCE } from "../data/mocks";
import getPerformance from "../services/performance";
import "../styles/components/UserPerformance.css";
import { RadarChart, PolarGrid, PolarAngleAxis, Radar } from "recharts";
import { useState, useEffect } from "react";
import Loading from "./Loading";

// Component that build the user's performance chart

function UserPerformance(props) {
  const userId = props.userId;
  const USE_API = true;
  const formatKind = {
    1: "Cardio",
    2: "Energie",
    3: "Endurance",
    4: "Force",
    5: "Vitesse",
    6: "Intensité",
  };

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (USE_API) {
      // Use data from API
      const getData = async () => {
        const result = await getPerformance(userId);
        setData(result);
      };
      getData();
    } else {
      // Use mocked data
      USER_PERFORMANCE.map((user) =>
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

  // Translate english to french
  const translateKind = (kind) => formatKind[kind];

  // Use Recharts (https://recharts.org/en-US)
  return (
    <article className="user-performance-container">
      <RadarChart
        width={258}
        height={263}
        data={data.data.reverse()}
        cx="50%"
        cy="50%"
        outerRadius="70%"
        innerRadius="10%"
      >
        <PolarGrid radialLines={false} />
        <PolarAngleAxis
          dataKey="kind"
          tickFormatter={translateKind}
          stroke="white"
          tickLine={false}
          tick={{ fontSize: 12, fontWeight: 500 }}
        />
        <Radar
          dataKey="value"
          stroke="#FF0101B2"
          fill="#FF0101B2"
          fillOpacity={0.7}
        />
      </RadarChart>
    </article>
  );
}

export default UserPerformance;
