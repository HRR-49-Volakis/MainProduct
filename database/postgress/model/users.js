const postgress = require('../index');

const createAccount = ({ name, last, username, password, sex, email, city, state, zip, created_at }) => {
  return postgress.client.query(`INSERT INTO member (name, last, username, password, sex, email, city, state, zip, created_at)
	VALUES ('${name}', '${last}', '${username}', '${password}', '${sex}', '${email}', '${city}', '${state}', '${zip}', '${created_at}');`);
};

const signIn = ({ username, password }) => {
  console.log('the username ', user)
  console.log('the password ', password)
  return

};
const updateAccount = ({ name, last, username, password, sex, email, city, state, zip, updated_at }) => {
  return postgress.client.query(`
    UPDATE member
      SET
        name = '${name}',
        last = '${last}',
        username = '${username}',
        password = '${password}',
        sex = '${sex}',
        email = '${email}',
        city = '${city}',
        state = '${state}',
        zip = ${zip},
        created_at = ${created_at}
    WHERE
      username = '${username}' AND
      password = '${password}';`);
};
const deleteAccount = ({ username, password }) => {
  return postgress.client.query(`DELETE FROM member WHERE username = '${username}' AND password = '${password}'`);
};

module.exports.createAccount = createAccount;
module.exports.updateAccount = updateAccount;
module.exports.deleteAccount = deleteAccount;