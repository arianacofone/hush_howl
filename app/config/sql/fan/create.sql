INSERT INTO fans (name, email) VALUES($1, $2) RETURNING *;
