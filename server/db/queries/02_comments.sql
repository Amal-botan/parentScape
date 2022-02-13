SELECT users.id as users_id, users.username as username, comments.comment as comment
FROM comments
LEFT JOIN users ON comments.user_id = users.id
WHERE comments.post_id =
