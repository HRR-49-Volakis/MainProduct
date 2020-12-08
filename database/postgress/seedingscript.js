// CREATE TABLE product (
// 	id INT UNIQUE PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
// 	name VARCHAR(100) NOT NULL,
// 	detail_id INT UNIQUE NOT NULL REFERENCES detail (id),
// 	material_ids NOT NULL,
// 	image_ids NOT NULL,
// 	package_id INT NOT NULL REFERENCES package (id)
// );

// alter table product ADD column image_ids int[];
// alter table product ADD CONSTRAINT myu unique(id);

// SELECT
//   prd.id,
//   prd.name,
//   dtl.designer,
//   dtl.care,
//   pkg.name AS package_name,
//   pkg.dimensions AS package_dimensions,
//   pkg.weight AS package_weight,
//   mts.name AS material_name,
//   mts.description AS material_desc
// FROM product AS prd
// RIGHT JOIN detail AS dtl ON dtl.id = prd.detail_id
// RIGHT JOIN package AS pkg ON pkg.id = prd.package_id
// RIGHT JOIN material AS mts ON mts.id = ANY(prd.material_ids)
// RIGHT JOIN image as img ON img.id = ANY(prd.image_ids);

// INSERT INTO product (name, detail_id, material_ids, package_id)
// 	VALUES
// 		(
// 		  'DJUNGELSKOG',
// 		  1,
// 		  ARRAY[1, 2],
// 		  1
// 		),
// 		(
// 		  'Dr. Katherine Batz',
// 		  2,
// 		  ARRAY[2, 3],
// 		  2
// 		)

// CREATE TABLE detail (
// 	id INT UNIQUE NOT NULL GENERATED ALWAYS AS IDENTITY,
// 	designer VARCHAR(50) NOT NULL,
// 	care VARCHAR(200) NOT NULL
// );

// INSERT INTO detail (designer, care, package_id)
// 	VALUES
// 		(
// 		  'Rickey McLaughlin DVM',
// 		  'quo molestiae nihil, qui dolores provident, id culpa dolor',
// 		  1
// 		),
// 		(
// 		  'Dr. Katherine Batz',
// 		  'The Football Is Good For Training And Recreational Purposes',
// 		  2
// 		)

// CREATE TABLE material (
// 	id INT UNIQUE NOT NULL GENERATED ALWAYS AS IDENTITY,
// 	name VARCHAR(100) NOT NULL,
// 	description VARCHAR(200) NOT NULL
// );

// INSERT INTO material (name, description)
// 	VALUES
// 		(
// 		  'Steel',
// 		  'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive'
// 		),
// 		(
// 		  'Metal',
// 		  'The Football Is Good For Training And Recreational Purposes'
// 		),
// 		(
// 		  'Fresh',
// 		  'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients'
// 		)

// CREATE TABLE package(
//   id INT UNIQUE NOT NULL GENERATED ALWAYS AS IDENTITY,
//   name VARCHAR(100) NOT NULL,
//   description VARCHAR(200) NOT NULL,
//   dimensions VARCHAR(50) NOT NULL,
//   weight VARCHAR(10) NOT NULL
// );

// INSERT INTO package (name, description, dimensions, weight)
// 	VALUES
// 		(
// 		  'granite',
// 		  'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit',
// 		  '89851 x 4983 x 79451 inches',
// 		  '15391'
// 		),
// 		(
// 		  'Rubber',
// 		  'The Football Is Good For Training And Recreational Purposes',
// 		  '92801 x 19680 x 56795 inches',
// 		  '33302'
// 		)

// CREATE TABLE member (
// 	id INT NOT NULL GENERATED ALWAYS AS IDENTITY,
// 	name VARCHAR(100) NOT NULL,
// 	last VARCHAR(100) NOT NULL,
// 	username VARCHAR(100) NOT NULL,
// 	password VARCHAR(100) NOT NULL,
// 	sex CHAR(1) NOT NULL,
// 	email VARCHAR(100) UNIQUE NOT NULL,
// 	city VARCHAR(100) NOT NULL,
// 	state VARCHAR(100) NOT NULL,
// 	zip CHAR(5) NOT NULL,
// 	created_at DATE NOT NULL,
// 	updated_at DATE NULL
// );

// INSERT INTO member (name, last, username, password, sex, email, city, state, zip, created_at)
// 	VALUES
// 		('giovani', 'rubini', 'grubini', 'password', 'M', 'grubini@gmail.com', 'Frederick', 'Maryland', '21704', '2020-12-03'),
// 		('derek', 'warner', 'dwarner', 'password', 'M', 'dwarner@gmail.com', 'Portland', 'Oregon', '22314', '2020-12-03')

// CREATE TABLE image(
//   id INT UNIQUE NOT NULL GENERATED ALWAYS AS IDENTITY,
//   url VARCHAR(200) NOT NULL
// );

// INSERT INTO image (url)
// 	VALUES
// 		('https://fec-bucket.s3.us-east-2.amazonaws.com/ikea1.webp'),
// 		('https://fec-bucket.s3.us-east-2.amazonaws.com/ikea6.webp'),
// 		('https://fec-bucket.s3.us-east-2.amazonaws.com/ikea7.webp'),
// 		('https://fec-bucket.s3.us-east-2.amazonaws.com/ikea7.webp'),
// 		('https://fec-bucket.s3.us-east-2.amazonaws.com/ikea6.webp')