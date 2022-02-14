INSERT INTO users (first_name, last_name, username, email, user_image, password, bio)
VALUES ('Steph', 'Bob', 'steph.bob', 'stephb@gmail.com', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfSN0LzT35OFBzyTtlHIl876rIsAcWWen9nA&usqp=CAU', 'password', 'bio description'),
('Steve', 'Sam', 'steve.sam', 'steves@gmail.com', 'https://mpng.subpng.com/20180308/jdw/kisspng-avatar-scalable-vector-graphics-user-profile-icon-wearing-a-striped-shirt-boys-5aa11b77789686.8517616415205077674939.jpg', 'password', 'bio description'),
('Emily', 'Jack', 'emily.jack', 'emilyj@gmail.com', 'https://cdn.imgbin.com/10/20/11/imgbin-avatar-user-profile-icon-women-wear-frock-GNLBV4N6qanFpjEYMEqxEgcCd.jpg', 'password', 'bio description');


INSERT INTO posts (user_id, post_text, created_at, likes)
VALUES (1, 'Hello everyone!', 2022-02-12 17:39:15.014961-05, 5),
(1, 'How do I shower a new born baby!!', 2022-02-12 11:39:15.014961-05, 5),
(2, 'My baby isnt drinking, what do I do?', 2022-02-11 17:39:15.014961-05, 7),
(2, 'Its so cold outside, what should I put on my baby?', 2022-02-10 17:39:15.014961-05, 7),
(3, 'My kids wont listen when I put them to bed! Any tips?', 2017-02-10 17:39:15.014961-05, 10);

INSERT INTO categories (post_id, category)
VALUES (2, 'showering'), (3, 'feeding'), (4, 'temp');

INSERT INTO comments (user_id, post_id, comment, likes, created_at)
VALUES (1, 1, 'Hey!!', 2, 2022-02-12 18:39:15.014961-05),
(2, 2, 'Get a baby shower top, make sure the water is warm, get a washcloth and some soap and scrub away (gently of course)!!', 10, 2022-02-12 19:39:15.014961-05),
(3, 2, 'Shower before bed', 10, 2022-02-12 17:39:15.014961-05),
(2, 3, 'Its okay, babies get like that sometimes! Offer the breastmilk, and you can top up with formula if you would like! Also talk to your doctor to see if nothing else is wrong', 12, 2022-02-10 19:39:15.014961-05);

