const cassandra = require('../index');

const createMember = ({ id, name, last, username, password, sex, email, city, state, zip }) => {
  return cassandra.client.execute(`INSERT INTO ikea.member (id, name, last, username, password, sex, email, city, state, zip, created_at, updated_at)
	VALUES (
		'${id}',
		'${name}',
		'${last}',
		'${username}',
		'${password}',
		'${sex}',
		'${email}',
	  '${city}',
		'${state}',
		'${zip}',
		${new Date().getTime()},
		${new Date().getTime()});`);
};

const logIn = ({ username, password }) => {
  return cassandra.client.execute(`SELECT * FROM member WHERE username = '${username}' AND password = '${password}' ALLOW FILTERING;`)
    .then(result => (result.rows.length > 0) ? result.rows[0] : {})
    .catch(e => console.log('error at sign in in cassandra'));
};

const getMemberId = ({ username, password }) => {
  return cassandra.client.execute(`SELECT id FROM member WHERE username = '${username}' AND password = '${password}' ALLOW FILTERING;`);
};

const updateMember = ({ name, last, username, password, sex, email, city, state, zip, id }) => {
  return cassandra.client.execute(`UPDATE member
  SET name = '${name}',
    last = '${last}',
    username = '${username}',
    password = '${password}',
    sex = '${sex}',
    email = '${email}',
    city = '${city}',
    state = '${state}',
    zip = '${zip}',
    updated_at = ${new Date().getTime()}
    WHERE id = '${id}';`);
};

const deleteMember = (id) => {
  return cassandra.client.execute(`DELETE FROM member WHERE id = '${id}';`);
};

module.exports.logIn = logIn;
module.exports.getMemberId = getMemberId;
module.exports.updateMember = updateMember;
module.exports.deleteMember = deleteMember;
module.exports.createMember = createMember;