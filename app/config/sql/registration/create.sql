INSERT INTO registrations (name, email) VALUES($1, $2) RETURNING *;
