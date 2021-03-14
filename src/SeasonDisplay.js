import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
  summer: {
    message: 'Lets hit the beach',
    iconName: 'sun'
  },
  winter: {
    message: 'Brr, its cold',
    iconName: 'snowflake'
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
}

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { message, iconName } = seasonConfig[season] // { text, iconName }

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left huge ${iconName} icon`} />
      <h1>{message}</h1>
      <i className={`icon-right huge ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;