const ActivityBlock = ({ timeMode, data, iconSrc, iconAlt }) => {
  function getTime(timePeriod, timeMode) {
    if (timePeriod === "current") {
      if (timeMode === "Daily") {
        return data.timeframes.daily.current;
      } else if (timeMode === "Weekly") {
        return data.timeframes.weekly.current;
      } else if (timeMode === "Monthly") {
        return data.timeframes.monthly.current;
      }
    } else if (timePeriod === "previous") {
      if (timeMode === "Daily") {
        return data.timeframes.daily.previous;
      } else if (timeMode === "Weekly") {
        return data.timeframes.weekly.previous;
      } else if (timeMode === "Monthly") {
        return data.timeframes.monthly.previous;
      }
    }
  }

  function getPrevPeriodDisplay(timeMode) {
    if (timeMode === "Daily") return "Yesterday - ";
    else if (timeMode === "Weekly") return "Last Week - ";
    else if (timeMode === "Monthly") return "Last Month - ";
  }

  return (
    <div className="activity">
      <div className="activity__info">
        <div className="activity__header-container">
          <p className="activity__heading">{data.title}</p>
          <img src={iconSrc} alt={iconAlt} className="activity__ellipsis" />
        </div>
        <div className="activity__time-container">
          <p className="activity__current-time">
            {getTime("current", timeMode)} hrs
          </p>
          <p className="activity__prev-time">
            {getPrevPeriodDisplay(timeMode) + getTime("previous", timeMode)} hrs
          </p>
        </div>
      </div>
    </div>
  );
};

export default ActivityBlock;
