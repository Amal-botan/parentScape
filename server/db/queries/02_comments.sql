SELECT users.id as users_id, users.username as username, users.user_image as user_image, comments.comment as comment, comments.likes as comment_likes, comments.comment_image as comment_image, comments.created_at as comment_created_at
FROM comments
LEFT JOIN users ON comments.user_id = users.id
WHERE comments.post_id =
