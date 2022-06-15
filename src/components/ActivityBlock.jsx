const ActivityBlock = ({ title, iconSrc, iconAlt, currentTime, prevTime }) => {
  return (
    <div className="activity">
      <div className="activity__info">
        <div className="activity__header-container">
          <p className="activity__heading">{title}</p>
          <img src={iconSrc} alt={iconAlt} className="activity__ellipsis" />
        </div>
        <div className="activity__time-container">
          <p className="heading__time">{currentTime}</p>
          <p className="heading__last-time">{prevTime}</p>
        </div>
      </div>
    </div>
  );
};

export default ActivityBlock;
