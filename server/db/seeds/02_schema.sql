INSERT INTO users (first_name, last_name, username, email, user_image, password, bio)
VALUES ('Steph', 'Bob', 'steph.bob', 'stephb@gmail.com', 'https://cdn-icons-png.flaticon.com/512/265/265674.png', 'password', 'bio description'),
('Steve', 'Sam', 'steve.sam', 'steves@gmail.com', 'https://cdn-icons-png.flaticon.com/512/265/265674.png', 'password', 'bio description'),
('Emily', 'Jack', 'emily.jack', 'emilyj@gmail.com', 'https://cdn-icons-png.flaticon.com/512/2922/2922561.png', 'password', 'bio description');


INSERT INTO posts (user_id, post_text, likes)
VALUES (1, 'Hello everyone!', 5),
(1, 'How do I shower a new born baby!!', 5),
(2, 'My baby isnt drinking, what do I do?', 7),
(2, 'Its so cold outside, what should I put on my baby?', 7),
(3, 'My kids wont listen when I put them to bed! Any tips?', 10);

INSERT INTO categories (post_id, category)
VALUES (2, 'showering'), (3, 'feeding'), (4, 'temp');

INSERT INTO comments (user_id, post_id, comment, likes)
VALUES (1, 1, 'Hey!!', 2),
(2, 2, 'Get a baby shower top, make sure the water is warm, get a washcloth and some soap and scrub away (gently of course)!!', 10),
(3, 2, 'Shower before bed', 10),
(2, 3, 'Its okay, babies get like that sometimes! Offer the breastmilk, and you can top up with formula if you would like! Also talk to your doctor to see if nothing else is wrong', 12);

INSERT INTO children (user_id, name, age)
VALUES (1, 'Kate', '2 months'),
(1, 'Jack', '18 months'),
(2, 'Louis', '1 month'),
(2, 'Sam', '3 months');



INSERT INTO babysitters (first_name,
  last_name,
  age,
  username,
  email,
  babysitter_image,
  password,
  bio,
  city,
  province,
  postal_code,
  phone_number,
  years_of_experience)
VALUES ('Natasha',
'White',
24,
'natasha.white',
'nwhite@gmail.com',
'https://about.crunchbase.com/wp-content/uploads/2019/03/Afton-Thankful-Blog.png',
'password',
'Highly dependable and adaptable Babysitter with an exemplary record of parent and child satisfaction. Able to respond quickly and creatively to unusual or difficult child care situations. Flexible scheduling availability to include all days, evenings, and some weekends.',
'Toronto',
'Ontario',
'M3C0L8',
6472890923,
10
);
