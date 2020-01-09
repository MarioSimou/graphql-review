-- users
CREATE TABLE users (
    id int GENERATED ALWAYS AS IDENTITY,
    fName varchar(255),
    lName varchar(255),
    email varchar(255),
    dob timestamptz,
    job varchar(255),
    country varchar(255),
    phone varchar(255)
);

ALTER TABLE users ADD CONSTRAINT users_pk PRIMARY KEY (id);
ALTER TABLE users ADD CONSTRAINT users_fname_lname_dob_country_uniq UNIQUE (email);
ALTER TABLE users ADD CONSTRAINT users_fname_lname_dob_country_uniq UNIQUE (fName,lName,date_of_birth,country);
ALTER TABLE users ALTER COLUMN fName SET NOT NULL;
ALTER TABLE users ALTER COLUMN lName SET NOT NULL;
ALTER TABLE users ALTER COLUMN email SET NOT NULL;
ALTER TABLE users ALTER COLUMN date_of_birth SET NOT NULL;
ALTER TABLE users ALTER COLUMN country SET NOT NULL;
ALTER TABLE users ALTER COLUMN phone SET NOT NULL;

CREATE INDEX idx_users_email ON users(email);

-- products
CREATE TABLE products (
    id INT GENERATED ALWAYS AS IDENTITY,
    name varchar(255),
    price float8,
    material varchar(255)
);

ALTER TABLE products ADD CONSTRAINT products_pk PRIMARY KEY (id);
ALTER TABLE products ADD CONSTRAINT products_name_uniq UNIQUE (name,price,material);
ALTER TABLE products ADD CONSTRAINT products_name_uniq UNIQUE (name);
ALTER TABLE products ALTER COLUMN price SET NOT NULL;
ALTER TABLE products ALTER COLUMN name SET NOT NULL;

CREATE INDEX idx_products_name ON products(name);


-- users_products
CREATE TABLE users_products (
    id INT GENERATED ALWAYS AS IDENTITY,
    user_id INT,
    product_id int
);

ALTER TABLE users_products ALTER COLUMN user_id SET NOT NULL;
ALTER TABLE users_products ALTER COLUMN product_id SET NOT NULL;
ALTER TABLE users_products ADD CONSTRAINT users_products_user_id_fk FOREIGN KEY (user_id) REFERENCES users(id);
ALTER TABLE users_products ADD CONSTRAINT users_products_product_id_fk FOREIGN KEY (product_id) REFERENCES products(id);
