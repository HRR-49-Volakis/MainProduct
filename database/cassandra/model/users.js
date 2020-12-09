const cassandra = require('./index.js');

const createMember = ({ last, username, password, sex, email, city, state, zip, id }) => {
  return cassandra.client(` INSERT INTO ikea.member (city, created_at, email, id, last, name, password, sex, state, updated_at, username, zip)
	VALUES (
	  ${city},
		toTimestamp(now()),
		${email},
		${id},
		${last},
		${name},
		${password},
		${sex},
		${state},
		toTimestamp(now()),
		${username},
		${zip}
	)`);
};

const getMember = ({ username, password }) => {
  return cassandra.client.execute(`SELECT * FROM member WHERE username = '${username}' AND password = '${password}' ALLOW FILTERING;`);
};

const getMemberId = ({ username, password }) => {
  return cassandra.client.execute(`SELECT id FROM member WHERE username = '${username}' AND password = '${password}' ALLOW FILTERING;`);
};

const updateMember = ({ last, username, password, sex, email, city, state, zip, id }) => {
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
    updated_at = dateof(now())
    WHERE id = '${id}';`);
};

const deleteMember = (id) => {
  return cassandra.client.execute(`DELETE FROM product WHERE id = '${id}';`);
};

module.exports = {
  createTableMember,
  createUsernameIndex,
  createPasswordIndex
};

module.exports.getMember = getMember;
module.exports.getMemberId = getMemberId;
module.exports.updateMember = updateMember;
module.exports.deleteMember = deleteMember;
module.exports.createMember = createMember;