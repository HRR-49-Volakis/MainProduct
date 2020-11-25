import React from 'react';
import LocationIcon from './LocationIcon.jsx';
import TrackingIcon from './TrackingIcon.jsx';
import AccountIcon from './AccountIcon.jsx';
import LikedIcon from './LikedIcon.jsx';
import BagIcon from './BagIcon.jsx';

var UserIcons = function(props) {
  return (
    <div className='userIconContainer'>
      <LocationIcon />
      <TrackingIcon />
      <AccountIcon />
      <LikedIcon />
      <BagIcon />
    </div>
  );
};

export default UserIcons;