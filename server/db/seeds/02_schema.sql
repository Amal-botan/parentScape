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
),
('Amanda',
'Locke',
22,
'amanda.l',
'al@gmail.com',
'https://cdn.pixabay.com/photo/2021/02/12/07/03/red-icon-6007530_960_720.png',
'password',
'Highly dependable and adaptable Babysitter with an exemplary record of parent and child satisfaction. Able to respond quickly and creatively to unusual or difficult child care situations. Flexible scheduling availability to include all days, evenings, and some weekends.',
'Toronto',
'Ontario',
'M6J 0B4',
6472890921,
2
),
('Betty',
'Smith',
40,
's.betty',
'bs@gmail.com',
'https://cdn.pixabay.com/photo/2021/02/12/07/03/red-icon-6007530_960_720.png',
'password',
'Highly dependable and adaptable Babysitter with an exemplary record of parent and child satisfaction. Able to respond quickly and creatively to unusual or difficult child care situations. Flexible scheduling availability to include all days, evenings, and some weekends.',
'Toronto',
'Ontario',
'M5C 1X6',
6472890925,
20
),
('Fatima',
'Omar',
29,
'f.omar',
'fomar@gmail.com',
'https://cdn.pixabay.com/photo/2021/02/12/07/03/red-icon-6007530_960_720.png',
'password',
'Highly dependable and adaptable Babysitter with an exemplary record of parent and child satisfaction. Able to respond quickly and creatively to unusual or difficult child care situations. Flexible scheduling availability to include all days, evenings, and some weekends.',
'Toronto',
'Ontario',
'M4Y 0C1',
6472890926,
9
),
('Vicki',
'Chen',
31,
'chen.v',
'cv@gmail.com',
'https://cdn.pixabay.com/photo/2021/02/12/07/03/red-icon-6007530_960_720.png',
'password',
'Highly dependable and adaptable Babysitter with an exemplary record of parent and child satisfaction. Able to respond quickly and creatively to unusual or difficult child care situations. Flexible scheduling availability to include all days, evenings, and some weekends.',
'Toronto',
'Ontario',
'M5V 2P2',
6472890929,
5
),
('Ann',
'Bryan',
26,
'a.b',
'ab@gmail.com',
'https://cdn.pixabay.com/photo/2021/02/12/07/03/red-icon-6007530_960_720.png',
'password',
'Highly dependable and adaptable Babysitter with an exemplary record of parent and child satisfaction. Able to respond quickly and creatively to unusual or difficult child care situations. Flexible scheduling availability to include all days, evenings, and some weekends.',
'Ottawa',
'Ontario',
'K1Z 6A4',
6131112222,
9
),
('Sigrid', 'Milward', 25, 'smilward0', 'smilward0@ucsd.edu', 'http://dummyimage.com/172x100.png/ff4444/ffffff', 'h2jjwfP', 'Highly dependable and adaptable Babysitter with an exemplary record of parent and child satisfaction. Able to respond quickly and creatively to unusual or difficult child care situations. Flexible scheduling availability to include all days, evenings, and some weekends.', 'Ottawa', 'Ontario', 'K1Z 6A4', '626-616-8007', 33),

('Mario', 'Wodham', 64, 'mwodham1', 'mwodham1@skype.com', 'http://dummyimage.com/234x100.png/dddddd/000000', 'OGMJgWwK', 'Highly dependable and adaptable Babysitter with an exemplary record of parent and child satisfaction. Able to respond quickly and creatively to unusual or difficult child care situations. Flexible scheduling availability to include all days, evenings, and some weekends.', 'Ottawa', 'Ontario', 'K1R 6T7', '937-960-5988', 40),

('Pietro', 'Hansel', 3, 'phansel2', 'phansel2@hao123.com', 'http://dummyimage.com/153x100.png/dddddd/000000', 'Highly dependable and adaptable Babysitter with an exemplary record of parent and child satisfaction. Able to respond quickly and creatively to unusual or difficult child care situations. Flexible scheduling availability to include all days, evenings, and some weekends.', 'Ottawa', 'Ontario', 'K1Z 8P4', '516-747-4265', 5),

('Mabelle', 'Mea', 55, 'mmea3', 'mmea3@simplemachines.org', 'http://dummyimage.com/157x100.png/dddddd/000000', 'nXCA0pchJMDM', 'sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat', 'Washington', 'District of Columbia', '20535', '202-970-3849', 5),

('Lurline', 'Whyard', 64, 'lwhyard4', 'lwhyard4@time.com', 'http://dummyimage.com/107x100.png/ff4444/ffffff', 'QUzukj', 'pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis', 'Oklahoma City', 'Oklahoma', '73114', '405-557-9183', 52),

('Keelby', 'Mattecot', 68, 'kmattecot5', 'kmattecot5@gnu.org', 'http://dummyimage.com/186x100.png/5fa2dd/ffffff', 'WuKzWILbZBR0', 'sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque', 'Orlando', 'Florida', '32803', '321-247-1609', 85),

('Rozanne', 'Moscrop', 98, 'rmoscrop6', 'rmoscrop6@forbes.com', 'http://dummyimage.com/228x100.png/ff4444/ffffff', 'zWfSOKIruM', 'primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices', 'Saint Louis', 'Missouri', '63143', '314-483-2707', 27),

('Nelia', 'Devey', 99, 'ndevey7', 'ndevey7@sphinn.com', 'http://dummyimage.com/205x100.png/5fa2dd/ffffff', 'zMvTmJeD47Xu', 'in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum', 'Birmingham', 'Alabama', '35263', '205-569-9444', 90),

('Gael', 'Angell', 62, 'gangell8', 'gangell8@hugedomains.com', 'http://dummyimage.com/195x100.png/cc0000/ffffff', 'CC5VBPZ7v', 'consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla', 'Chicago', 'Illinois', '60619', '773-583-3600', 31),

('Indira', 'Pogue', 43, 'ipogue9', 'ipogue9@sbwire.com', 'http://dummyimage.com/143x100.png/cc0000/ffffff', 'CxsCifLi', 'sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor', 'Schaumburg', 'Illinois', '60193', '847-772-9565', 43),

('Aylmer', 'Ferriman', 83, 'aferrimana', 'aferrimana@ow.ly', 'http://dummyimage.com/113x100.png/cc0000/ffffff', 'BtIXsaEudgNQ', 'libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse', 'Portland', 'Oregon', '97221', '503-103-2498', 5),

('Vonny', 'Eveque', 39, 'vevequeb', 'vevequeb@domainmarket.com', 'http://dummyimage.com/146x100.png/dddddd/000000', 'OPK9vlpo', 'leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat', 'Minneapolis', 'Minnesota', '55446', '952-547-0306', 4),

('Ainslee', 'MacCracken', 18, 'amaccrackenc', 'amaccrackenc@nhs.uk', 'http://dummyimage.com/205x100.png/cc0000/ffffff', 'QDaomAhT6Gjx', 'proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis', 'Huntington Beach', 'California', '92648', '949-310-2138', 29),

('Rollins', 'Taft', 70, 'rtaftd', 'rtaftd@netscape.com', 'http://dummyimage.com/107x100.png/dddddd/000000', 'onhzExYNczZ', 'eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet', 'Salt Lake City', 'Utah', '84152', '801-378-4528', 27),

('Chickie', 'Ranking', 96, 'crankinge', 'crankinge@nymag.com', 'http://dummyimage.com/156x100.png/5fa2dd/ffffff', 'nB3TPaCA', 'sed magna at nunc commodo placerat praesent blandit nam nulla', 'Van Nuys', 'California', '91406', '805-693-4447', 38),

('Alic', 'Gillease', 8, 'agilleasef', 'agilleasef@hao123.com', 'http://dummyimage.com/185x100.png/ff4444/ffffff', 'mbeplc1AAoMb', 'turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis', 'Missoula', 'Montana', '59806', '406-959-3094', 63),

('Roshelle', 'Grenville', 25, 'rgrenvilleg', 'rgrenvilleg@1und1.de', 'http://dummyimage.com/151x100.png/cc0000/ffffff', '2qhpAhTUwxf', 'justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis', 'San Diego', 'California', '92105', '858-784-0244', 82),

('Bone', 'Darragh', 44, 'bdarraghh', 'bdarraghh@prnewswire.com', 'http://dummyimage.com/219x100.png/ff4444/ffffff', 'J6KK5BH', 'interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit', 'Orange', 'California', '92668', '858-319-1772', 29),

('Geno', 'Hadwick', 13, 'ghadwicki', 'ghadwicki@xing.com', 'http://dummyimage.com/162x100.png/cc0000/ffffff', 'oSMhMU', 'gravida sem praesent id massa id nisl venenatis lacinia aenean sit', 'Albany', 'New York', '12232', '518-952-2480', 72),

('Cart', 'Ciccarello', 71, 'cciccarelloj', 'cciccarelloj@fema.gov', 'http://dummyimage.com/237x100.png/ff4444/ffffff', '5w5OgJX0', 'aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus', 'Las Vegas', 'Nevada', '89130', '702-114-0596', 45);
