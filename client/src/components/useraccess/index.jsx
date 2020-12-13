import React, { useState, useContext } from 'react';
import axios from 'axios';
import MyInput from '../myinput/index.jsx';
import MyButton from '../mybutton/index.jsx';
import AccountFields from '../account_fields/index.jsx';
import UserAccessStyles from './UserAccessStyle.jsx';
import { useModalContext } from '../modal/index.jsx';

export default function UserAccess(props) {
  let name = 'John';
  const setName = (t) => name = t;
  const [last, setLast] = useState('Campbell');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [sex, setSex] = useState('M');
  const [email, setEmail] = useState('jcampbell@gmail.com');
  const [city, setCity] = useState('tampa');
  const [state, setState] = useState('florida');
  const [zip, setZip] = useState('65432');

  const sendAll = () => {
    console.log('hey ', name)
  };

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
                clicky={sendAll}
                user={{ name, last, username, password, sex, email, city, state, zip }}
                actions={{ setName, setLast, setUsername, setPassword, setSex, setEmail, setCity, setState, setZip }}
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
  const { openModal } = useModalContext();
  const { name, last, username, password, sex, email, city, state, zip } = props.user;
  const { setName, setLast, setUsername, setPassword, setSex, setEmail, setCity, setState, setZip } = props.actions;
  console.log('maaa name ', name)
  const signInHandler = () => {
    Object.defineProperty(AccountFields, 'test', { value: setName, writable: true, configurable: true });
    Object.defineProperty(AccountFields, 'clicky', { value: props.clicky, writable: true, configurable: true });
    Object.defineProperty(AccountFields, 'name', { value: name, writable: true, configurable: true });
    Object.defineProperty(AccountFields, 'setName', { value: setName, writable: true });
    Object.defineProperty(AccountFields, 'last', { value: last, writable: true });
    Object.defineProperty(AccountFields, 'setLast', { value: setLast, writable: true });
    Object.defineProperty(AccountFields, 'username', { value: username, writable: true });
    Object.defineProperty(AccountFields, 'setUsername', { value: setUsername, writable: true });
    Object.defineProperty(AccountFields, 'password', { value: password, writable: true });
    Object.defineProperty(AccountFields, 'setPassword', { value: setPassword, writable: true });
    Object.defineProperty(AccountFields, 'sex', { value: sex, writable: true });
    Object.defineProperty(AccountFields, 'setSex', { value: setSex, writable: true });
    Object.defineProperty(AccountFields, 'email', { value: email, writable: true });
    Object.defineProperty(AccountFields, 'setEmail', { value: setEmail, writable: true });
    Object.defineProperty(AccountFields, 'city', { value: city, writable: true });
    Object.defineProperty(AccountFields, 'setCity', { value: setCity, writable: true });
    Object.defineProperty(AccountFields, 'state', { value: state, writable: true });
    Object.defineProperty(AccountFields, 'setState', { value: setState, writable: true });
    Object.defineProperty(AccountFields, 'zip', { value: zip, writable: true });
    Object.defineProperty(AccountFields, 'setZip', { value: setZip, writable: true });

    openModal(AccountFields);
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