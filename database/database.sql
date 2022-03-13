CREATE DATABASE typescriptdatabase;

CREATE TABLE users(
    ID SERIAL PRIMARY KEY,
    name VARCHAR(40),
    email TEXT
);

INSERT INTO users (name, email)
    VALUES ('joe', 'joe@ibm.com'),
           ('ryan', 'ryan@faztweb.com');

select * from users;