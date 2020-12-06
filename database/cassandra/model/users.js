const createTableMember = () => {
  return client.execute(`CREATE TABLE ikea.member (
    id TEXT PRIMARY KEY,
    name TEXT,
    last TEXT,
    username TEXT,
    password TEXT,
    sex TEXT,
    email TEXT,
    city TEXT,
    state TEXT,
    zip TEXT,
    created_at TIMESTAMP,
    updated_at TIMESTAMP);`);
};

const createUsernameIndex = () => {
  return client.execute(`CREATE INDEX usernameIndex ON ikea.member (username);`);
};
const createPasswordIndex = () => {
  return client.execute(`CREATE INDEX passwordIndex ON ikea.member (password);`);
};

const getMember = ({ username, password }) => {
  return client.execute(`SELECT * FROM member WHERE username = '${username}' AND password = '${password}' ALLOW FILTERING;`);
};

const getMemberId = ({ username, password }) => {
  return client.execute(`SELECT id FROM member WHERE username = '${username}' AND password = '${password}' ALLOW FILTERING;`);
};

const updateMember = ({ last, username, password, sex, email, city, state, zip, id }) => {
  return client.execute(`UPDATE member
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
  return client.execute(`DELETE FROM product WHERE id = '${id}';`);
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