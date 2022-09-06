import "../styles/components/TodayScore.css";
import { RadialBarChart, RadialBar, PolarAngleAxis } from "recharts";
import { useState, useEffect } from "react";
import Loading from "./Loading";

//Component that build the user's score

function TodayScore(props) {
  const userData = props.userData;
  const score = userData.todayScore * 100 || userData.score * 100;

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  }, [isLoading]);

  if (isLoading) {
    return <Loading />;
  }

  // Use Recharts (https://recharts.org/en-US)
  return (
    <article className="today-score-container">
      <h3>Score</h3>
      <div className="display-score">
        <p className="score">{score}%</p>
        <p className="score-text">de votre</p>
        <p className="score-text">objectif</p>
      </div>
      <RadialBarChart
        width={258}
        height={263}
        innerRadius={86}
        outerRadius={100}
        data={[{ name: "scoreToday", value: score }]}
        startAngle={-270}
        endAngle={90}
        barSize={12}
      >
        <PolarAngleAxis
          type="number"
          domain={[0, 100]}
          angleAxisId={0}
          tick={false}
        />
        <RadialBar
          background={false}
          dataKey={"value"}
          cornerRadius={15}
          fill="#E60000"
        />
      </RadialBarChart>
    </article>
  );
}

export default TodayScore;
