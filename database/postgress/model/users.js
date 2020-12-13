const postgress = require('../index');

const createAccount = ({ name, last, username, password, sex, email, city, state, zip }) => {
  return postgress.client.query(`INSERT INTO member (name, last, username, password, sex, email, city, state, zip, created_at, updated_at)
	VALUES ('${name}', '${last}', '${username}', '${password}', '${sex}', '${email}', '${city}', '${state}', '${zip}', to_timestamp(${Date.now() / 1000.0}), to_timestamp(${Date.now() / 1000.0}));`);
};

const logIn = ({ username, password }) => {
  return postgress.client.query(`SELECT * FROM member WHERE username = '${username}' AND password = '${password}';`)
    .then(result => result)
    .catch(e => console.log('error at sign in in postgress'));
};
const updateAccount = ({ name, last, username, password, sex, email, city, state, zip }) => {
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
        updated_at = to_timestamp(${Date.now() / 1000.0})
    WHERE
      username = '${username}' AND
      password = '${password}';`);
};
const deleteAccount = ({ username, password }) => {
  return postgress.client.query(`DELETE FROM member WHERE username = '${username}' AND password = '${password}'`);
};

module.exports.logIn = logIn;
module.exports.createAccount = createAccount;
module.exports.updateAccount = updateAccount;
module.exports.deleteAccount = deleteAccount;