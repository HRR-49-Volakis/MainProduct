import React from 'react';
import UserAccess from './useraccess/index.jsx';
import { useModalContext } from './modal/index.jsx';

var AcountIcon = function(props) {
  return (
    <Authentication>
      <svg className='userIcons' version="1.1" x="0px" y="0px" width="51.6px" height="51.5px" viewBox="-39 -35 130 130"><g ><g><path d="M25.4,28.6c4,0.3,7.8,0.2,11.4,0.9c7.8,1.4,13,7,14.2,14.8c0.3,2,0.3,4,0.5,6.1c0.1,0.9-0.3,1.2-1.2,1.2
        c-1.5,0-2.9,0-4.4,0c-0.9,0-1.2-0.4-1.3-1.3c0-1.9,0-3.8-0.3-5.6c-1.1-5.5-5.3-8.8-10.8-8.9c-4-0.1-8-0.2-12-0.2
        c-2,0-4,0.1-5.9,0.4c-5.3,0.8-8.7,5.3-9,10.7c-0.1,1.2,0,2.5,0,3.7c0,0.7-0.3,1.1-1.1,1.1c-1.5,0-3.1,0-4.6,0
        c-0.6,0-0.9-0.2-1-0.9c-0.3-5.4,0.5-10.6,4-15c2.6-3.3,5.9-5.5,10-6.1C17.9,28.9,21.8,28.8,25.4,28.6z"/><path d="M13.5,12.9c-0.1-3.3,0.6-6.4,2.8-8.9c1.7-2,3.9-3.2,6.4-3.7c3.8-0.8,7.5-0.2,10.6,2.2c2.6,1.9,3.9,4.6,4.5,7.8
        c0.5,2.8,0.2,5.5-0.7,8.1c-1.4,4.3-5.9,7.4-10.4,7.5c-3,0.1-5.8-0.3-8.3-2.1c-3.3-2.4-4.7-5.7-4.9-9.6
        C13.5,13.7,13.5,13.3,13.5,12.9z M25.8,6.8c-3.4,0-5.1,1.3-5.5,4.2c-0.1,1-0.1,2-0.1,3c0,2.2,1.2,4.1,3.1,4.8
        c2.4,0.9,5.2,0.4,6.7-1.1c1.2-1.2,1.4-2.7,1.5-4.2C31.6,9.9,29.9,6.5,25.8,6.8z"/></g></g></svg>
    </Authentication>
  );
};

const Authentication = (props) => {
  const { openModal } = useModalContext();
  return (
    <div className='iconContainer' onClick={() => openModal(UserAccess)}>{props.children}</div>
  );
};

export default AcountIcon;