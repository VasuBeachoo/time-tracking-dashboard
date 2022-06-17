const ProfileBlock = ({ imgSrc, imgAlt, name, timeModes, updateTimeMode }) => {
  let key = 0;

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
        {timeModes.map((timeMode) => {
          return (
            <p
              key={key++}
              className="profile__time"
              onClick={() => updateTimeMode(timeMode)}
            >
              {timeMode}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default ProfileBlock;
