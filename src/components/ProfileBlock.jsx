const ProfileBlock = ({
  timeMode,
  imgSrc,
  imgAlt,
  name,
  timeModes,
  updateTimeMode,
}) => {
  let key = 0;

  function getTimeModeClass(timeModeText, timeMode) {
    if (timeModeText === timeMode)
      return "profile__time-mode profile__time-mode--selected";
    else return "profile__time-mode profile__time-mode--unselected";
  }

  return (
    <div className="profile">
      <div className="profile__info">
        <img src={imgSrc} alt={imgAlt} className="profile__img" />
        <div className="profile__text-container">
          <p className="profile__text">Report for</p>
          <p className="profile__name">{name}</p>
        </div>
      </div>
      <div className="profile__time-container">
        {timeModes.map((timeModeText) => {
          return (
            <p
              key={key++}
              className={getTimeModeClass(timeModeText, timeMode)}
              onClick={() => updateTimeMode(timeModeText)}
            >
              {timeModeText}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default ProfileBlock;
