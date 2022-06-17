import data from "./data";
import "./css/style.css";
import imgJeremy from "./assets/image-jeremy.png";
import ellipsis from "./assets/icon-ellipsis.svg";
import { useState } from "react";
import ProfileBlock from "./components/ProfileBlock";
import ActivityBlock from "./components/ActivityBlock";

const timeModes = ["Daily", "Weekly", "Monthly"];

const App = () => {
  const [timeMode, setTimeMode] = useState("Daily");
  let key = 0;

  return (
    <div className="dashboard-container">
      <div className="dashboard">
        <ProfileBlock
          timeMode={timeMode}
          imgSrc={imgJeremy}
          imgAlt="Jeremy"
          name="Jeremy Robson"
          timeModes={timeModes}
          updateTimeMode={setTimeMode}
        />
        {data.map((activity) => {
          return (
            <ActivityBlock
              key={key++}
              data={activity}
              timeMode={timeMode}
              iconSrc={ellipsis}
              iconAlt="ellipsis"
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
