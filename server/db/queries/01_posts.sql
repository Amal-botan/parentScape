SELECT users.id as users_id, users.username as username, posts.id as post_id, posts.post_text as post_text
FROM posts
LEFT JOIN users ON posts.user_id = users.id;

