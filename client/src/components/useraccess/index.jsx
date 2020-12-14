import React, { useState, useContext } from 'react';
import axios from 'axios';
import MyInput from '../myinput/index.jsx';
import MyButton from '../mybutton/index.jsx';
import AccountFields from '../account_fields/index.jsx';
import UserAccessStyles from './UserAccessStyle.jsx';
import { useModalContext } from '../modal/index.jsx';
import { MemberService } from '../../services';

export default function UserAccess(props) {
  const [username, setUsername] = useState('Jacklyn_Yost');
  const [password, setPassword] = useState('EeuuYbDZyhkIFZ7');

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
                label={"Sign in"}
                color={"white"}
                hover={"#1E116C"}
                action={"signin"}
                background={"rgb(17, 30, 108)"}
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

            <MemberAccount
              className="myButton"
              label={"Sign up"}
              action={"signup"}
              user={{ username, password }}
              hover={"rgba(17, 30, 150, 0.6)"}
            />
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
  let id;
  let name = '';
  let last = '';
  let usr = username;
  let pass = password;
  let sex = '';
  let email = '';
  let city = '';
  let state = '';
  let zip = '';
  const setName = (newName) => name = newName;
  const setLast = (newLast) => last = newLast;
  const setSex = (newSex) => sex = newSex;
  const setEmail = (newEmail) => email = newEmail;
  const setCity = (newCity) => city = newCity;
  const setState = (newState) => state = newState;
  const setUsername = (newUsername) => usr = newUsername;
  const setPassword = (newPassword) => pass = newPassword;
  const setZip = (newZip) => zip = newZip;

  const setUser = (user) => {
    id = user.id;
    setName(user.name);
    setLast(user.last);
    setSex(user.sex);
    setEmail(user.email);
    setCity(user.city);
    setState(user.state);
    setZip(user.zip);

    return {
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
      state,
      setState,
      zip,
      setZip
    };
  };
  const resetUserFields = () => {
    [id, name, last, usr, pass, sex, email, city, state, zip].forEach(item => item = '');
  };

  const getFinalVersion = () => {
    return {
      id,
      name,
      last,
      username: usr,
      password: pass,
      sex,
      email,
      city,
      state,
      zip
    };
  };

  const preSignUpHandler = () => {
    openModal(() => AccountFields({
      user: setUser({
        id: Math.floor(Math.random() * 10000000).toString(),
        name,
        last,
        sex,
        email,
        city,
        state,
        zip
      }), signUpHandler
    }));
  };

  const validate = () => {
    return [id, name, last, usr, pass, sex, email, city, state, zip].every(item => item.length > 0);
  };

  const updateHandler = () => {
    MemberService.updateMemberService({ user: getFinalVersion() })
      .then(result => {
        console.log('this is the result after updating ', result);
        resetUserFields();
        closeModal();
      })
      .catch(e => console.log('error trying to update the member ', e));
  };
  const signUpHandler = () => {
    if (validate()) {
      console.log('the id ', id);
      MemberService.createMemberService({ user: getFinalVersion() })
        .then(result => {
          console.log('this is the result of our creation ', result);
          resetUserFields();
          closeModal();
        })
        .catch(e => console.log('error trying to create a member ', e));
    } else {
      console.log('rats! I wanted to sign up')
    }
  };
  const signInHandler = () => {
    MemberService.loginMemberService({ username, password })
      .then(result => {
        if (result.status) {
          const user = result.user;
          openModal(() => AccountFields({ user: setUser(user), updateHandler, deleteHandler }));
        }
      })
      .catch(e => console.log('error sending the login ', e));
  };
  const deleteHandler = () => {
    console.log({ username: usr, password: pass })
    MemberService.deleteMemberService({ username: usr, password: pass })
      .then(result => {
        console.log('this is the result of our deletion ', result);
        resetUserFields();
        closeModal();
      })
      .catch(e => console.log('error trying to delete a member ', e));
  };

  return (
    <MyButton
      label={props.label}
      color={props.color}
      hover={props.hover}
      background={props.background}
      click={(props.action === 'signup') ? preSignUpHandler : signInHandler}
    />
  );
};