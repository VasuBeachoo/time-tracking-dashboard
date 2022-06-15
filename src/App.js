import data from "./data";
import imgJeremy from "./assets/image-jeremy.png";
import ellipsis from "./assets/icon-ellipsis.svg";
import { useState } from "react";
import ProfileBlock from "./components/ProfileBlock";
import ActivityBlock from "./components/ActivityBlock";

const times = ["Daily", "Weekly", "Monthly"];

const App = () => {
  const [time, setTime] = useState("Daily");
  let key = 0;

  return (
    <div className="dashboard-container">
      <div className="dashboard">
        <ProfileBlock
          imgSrc={imgJeremy}
          imgAlt="Jeremy"
          name="Jeremy Robson"
          times={times}
        />
        {data.map((activity) => {
          let currentTime, prevTime;
          if (time === "Daily") {
            currentTime = activity.timeframes.daily.current;
            prevTime = activity.timeframes.daily.previous;
          } else if (time === "Weekly") {
            currentTime = activity.timeframes.weekly.current;
            prevTime = activity.timeframes.weekly.previous;
          } else if (time === "Monthly") {
            currentTime = activity.timeframes.monthly.current;
            prevTime = activity.timeframes.monthly.previous;
          }
          return (
            <ActivityBlock
              key={key++}
              title={activity.title}
              iconSrc={ellipsis}
              iconAlt="ellipsis"
              currentTime={currentTime}
              prevTime={prevTime}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
