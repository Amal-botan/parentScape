SELECT users.id as users_id, users.user_image as user_image, users.username as username, posts.id as post_id, posts.post_text as post_text, posts.post_image as post_image, posts.likes as likes, posts.created_at as post_created_at, categories.category as category
    FROM posts
    LEFT JOIN users ON posts.user_id = users.id
    LEFT JOIN categories ON categories.post_id = posts.id
    WHERE categories.category = 'greetings' ;
