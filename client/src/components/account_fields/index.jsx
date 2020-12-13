import React from 'react';
import AccountFieldStyles from './AccountFieldStyles.jsx';
import MyInput from '../myinput/index.jsx';
import MyButton from '../mybutton/index.jsx';

const AccountFields = ({ user, updateHandler }) => {
  return {
    children: (
      <AccountFieldStyles>
        <header>
          <h2>Hi, {AccountFields.user || ''}!</h2>
        </header>
        <div className="mainContent">
          {
            [{ field: user.name || 'name', icon: 'https://icon-library.com/images/icon-name/icon-name-10.jpg', action: user.setName },
            { field: user.last || 'last', icon: 'https://icon-library.com/images/icon-name/icon-name-10.jpg', action: user.setLast },
            { field: user.usr || 'username', icon: 'https://vectorified.com/images/username-icon-png-1.png', action: user.setUsername },
            { field: user.pass || 'password', icon: 'https://image.flaticon.com/icons/png/512/166/166274.png', action: user.setPassword },
            { field: user.sex || 'sex', icon: 'https://img.icons8.com/cotton/2x/gender.png', action: user.setSex },
            { field: user.email || 'email', icon: 'https://cdn.icon-icons.com/icons2/1182/PNG/512/1490129331-rounded07_82197.png', action: user.setEmail },
            { field: user.city || 'city', icon: 'https://cdn2.iconfinder.com/data/icons/mini-icon-set-map-location/91/Location_22-512.png', action: user.setCity },
            { field: user.state || 'state', icon: 'https://static.thenounproject.com/png/38222-200.png', action: user.setState },
            { field: user.zip || 'zip', icon: 'https://img.icons8.com/ios-filled/452/zip-code.png', action: user.setZip }].map((el, index) => (
              <MyInput
                type={'text'}
                holder={el.field}
                change={el.action}
                dimensions={{ width: '24px', height: '24px' }}
                source={el.icon}
              />
            ))}
        </div>
        <div className="btn">
          <MyButton
            color={"white"}
            hover={"#1E116C"}
            background={"rgb(17, 30, 108)"}
            click={() => updateHandler()}
          />
        </div>
      </AccountFieldStyles>
    )
  };
};

export default AccountFields;