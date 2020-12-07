DROP KEYSPACE IF EXISTS ikea;
CREATE KEYSPACE ikea
WITH replication = {'class':'SimpleStrategy', 'replication_factor': 3};
USE ikea;


CREATE TABLE product (
  id TEXT PRIMARY KEY,
  name TEXT,
  designer TEXT,
  care TEXT,
  materials LIST<TEXT>,
  package TEXT,
  images LIST<TEXT>
);

CREATE TABLE member (
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
  updated_at TIMESTAMP
);