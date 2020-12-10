import React from 'react';
import MyInput from '../myinput/index.jsx';
import UserAccessStyles from './UserAccessStyle.jsx';

export default function UserAccess(props) {
  return {
    children: (
      <UserAccessStyles>
        <div className="left">

          <div className="innerLeft">
            <p>dfhfdgjgfhjfghjfghjfghjfghjghfnfghnhgnghfnhgnfghnghnghnghfnhn</p>
            <div className="myInputs">
              <MyInput />
              <MyInput />
              <MyInput />
            </div>
            <p>Connect with social media
            face  tw   in
            </p>
          </div>
        </div>
        <div className="right">
          <div className="cover">
            <img className="logo" src="https://newagetee.com/wp-content/uploads/2020/07/redirect-28.png" />
            <h2 className="myH2">Don't have an account?</h2>
            <h4 className="myText">I'm baby hexagon XOXO marfa gastropub, health goth jean shorts before they sold out photo booth knausgaard raclette.</h4>
            <div className="myButton">SIGN UP</div>
          </div>
          <img className='img' src='https://www.ikea.com/ch/en/images/products/ravaror-tray-foldable-birch-plywood__0930005_PE790569_S5.JPG' />
        </div>
      </UserAccessStyles>
    )
  };
};