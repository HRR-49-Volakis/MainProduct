import React, { useState, useContext } from 'react';
import axios from 'axios';
import MyInput from '../myinput/index.jsx';
import MyButton from '../mybutton/index.jsx';
import AccountFields from '../account_fields/index.jsx';
import UserAccessStyles from './UserAccessStyle.jsx';
import { useModalContext } from '../modal/index.jsx';
import { MemberService } from '../../services';

export default function UserAccess(props) {
  const [username, setUsername] = useState('Hollis80');
  const [password, setPassword] = useState('NGK5LGj6pISdJp_');

  return {
    children: (
      <UserAccessStyles>
        <div className="left">

          <div className="innerLeft">
            <h1>Welcome</h1>
            <div className="myInputs">
              <MyInput
                type={'text'}
                value={username}
                change={setUsername}
                dimensions={{ width: '28px', height: '28px' }}
                source={"https://static.thenounproject.com/png/3057302-200.png"}
              />
              <MyInput
                type={'password'}
                value={password}
                change={setPassword}
                dimensions={{ width: '23px', height: '23px' }}
                source={"https://image.flaticon.com/icons/png/512/166/166274.png"}
              />
              <MemberAccount
                test={(he) => hey(he)}
                clicky={() => console.log('update')}
                user={{ username, password }}
              />
            </div>
            <div className="media">
              <img className="social" src={"https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512"} />
              <img className="social" src={"https://icons-for-free.com/iconfiles/png/512/social+tweet+twitter+icon-1320192248146512175.png"} />
              <img className="social" src={"https://freeiconshop.com/wp-content/uploads/edd/google-plus-flat.png"} />
            </div>
          </div>
        </div>
        <div className="right">
          <div className="cover">
            <img className="logo" src="https://newagetee.com/wp-content/uploads/2020/07/redirect-28.png" />
            <h2 className="myH2">Don't have an account?</h2>
            <h4 className="myText">I'm baby hexagon XOXO marfa gastropub, health goth jean shorts before they sold out photo booth knausgaard raclette.</h4>
            <div
              className="myButton"
              onClick={() => console.log('sign uppp sign up')}
            >SIGN UP</div>
          </div>
          <img className='img' src='https://www.ikea.com/ch/en/images/products/ravaror-tray-foldable-birch-plywood__0930005_PE790569_S5.JPG' />
        </div>
      </UserAccessStyles>
    )
  };
};

const MemberAccount = (props) => {
  const { openModal, closeModal } = useModalContext();
  const { username, password } = props.user;
  let name = '';
  let last = '';
  let usr = username;
  let pass = password;
  let sex = '';
  let email = '';
  let city = '';
  let zip = '';
  const setName = (newName) => name = newName;
  const setLast = (newLast) => last = newLast;
  const setSex = (newSex) => sex = newSex;
  const setEmail = (newEmail) => email = newEmail;
  const setCity = (newCity) => city = newCity;
  const setUsername = (newUsername) => usr = newUsername;
  const setPassword = (newPassword) => pass = newPassword;
  const setZip = (newZip) => zip = newZip;

  const updateHandler = () => {
    console.log(name)
    console.log(last)
    console.log(sex)
    console.log(email)
    console.log(city)
    console.log(zip)
    console.log(usr)
    console.log(pass)
    closeModal();
  };

  const signInHandler = () => {
    MemberService.loginMemberService({ username, password })
      .then(result => {
        if (result.status) {
          const user = result.user;
          setName(user.name);
          setLast(user.last);
          setSex(user.sex);
          setEmail(user.email);
          setCity(user.city);
          setZip(user.zip);

          const currentUser = {
            name,
            setName,
            last,
            setLast,
            usr,
            setUsername,
            pass,
            setPassword,
            sex,
            setSex,
            email,
            setEmail,
            city,
            setCity,
            zip,
            setZip
          };

          openModal(() => AccountFields({ user: currentUser, updateHandler }));
        }
      })
      .catch(e => console.log('error sending the login ', e));
  };

  return (
    <MyButton
      color={"white"}
      hover={"#1E116C"}
      background={"rgb(17, 30, 108)"}
      click={signInHandler}
    />
  );
};