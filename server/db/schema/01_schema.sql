-- Drop and recreate Users table (Example)

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS posts CASCADE;
DROP TABLE IF EXISTS categories CASCADE;
DROP TABLE IF EXISTS comments CASCADE;
DROP TABLE IF EXISTS children CASCADE;
DROP TABLE IF EXISTS babysitters CASCADE;


CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  user_image TEXT NOT NULL DEFAULT 'https://e7.pngegg.com/pngimages/926/34/png-clipart-computer-icons-user-profile-avatar-avatar-face-heroes.png',
  password VARCHAR(255) NOT NULL,
  bio TEXT,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  post_text TEXT,
  post_image TEXT,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  likes INTEGER
);

CREATE TABLE categories (
  id SERIAL PRIMARY KEY NOT NULL,
  post_id INTEGER REFERENCES posts(id) ON DELETE CASCADE,
  category VARCHAR(255)
);

CREATE TABLE comments (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  post_id INTEGER REFERENCES posts(id) ON DELETE CASCADE,
  comment TEXT,
  likes INTEGER,
  comment_image TEXT,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE children (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  age VARCHAR(255) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE babysitters (
  id SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  age INTEGER NOT NULL,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  babysitter_image TEXT NOT NULL DEFAULT 'https://e7.pngegg.com/pngimages/926/34/png-clipart-computer-icons-user-profile-avatar-avatar-face-heroes.png',
  password VARCHAR(255) NOT NULL,
  bio TEXT,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  city TEXT NOT NULL,
  province TEXT NOT NULL,
  postal_code TEXT NOT NULL,
  phone_number bigint NOT NULL,
  years_of_experience INTEGER,
  upload_id_card TEXT,
  upload_police_record_check TEXT,
  upload_first_aid_certificate TEXT
);
