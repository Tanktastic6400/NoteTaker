CREATE TABLE users(
user_id INT PRIMARY KEY AUTO_INCREMENT,
username VARCHAR(100) NOT NULL,
email VARCHAR(150) UNIQUE NOT NULL,
password VARCHAR(255) NOT NULL
);




CREATE TABLE notes(
note_id INT PRIMARY KEY AUTO_INCREMENT,
user_id INT NOT NULL,
title VARCHAR(200) NOT NULL,
content TEXT,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

CONSTRAINT fk_user_note
FOREIGN KEY (user_id)
REFERENCES users(user_id)
ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

DROP TABLE notes;

INSERT INTO users (username, email, password)
VALUES ('Tanktastic', 'amarino1994@yahoo.com', 'hashedpassword');

INSERT INTO notes (user_id, title, content)
VALUE (1, 'Test Note', 'This is a test note');

select * from users;

select * from notes;
select * from users, notes;

select * from notes WHERE user_id = 1;



INSERT INTO users (email, password, username)
VALUES
('alex@example.com', 'password123', 'Alex'),
('jordan@example.com', 'testpass', 'Jordan'),
('casey@example.com', 'letmein', 'Casey');



INSERT INTO notes (title, content, created_at, user_id)
VALUES
('Morning Thoughts', 'Started learning Spring Boot today.', NOW(), 1),
('Grocery List', 'Eggs, Milk, Bread, Coffee', NOW(), 1),
('Weekend Plans', 'Go hiking at Giant City State Park.', NOW(), 1),
('Project Ideas', 'Thinking about building a note-taking app.', NOW(), 2),
('Workout Log', 'Leg day was brutal but worth it.', NOW(), 2),
('Reading List', 'Finish “Clean Code” and “The Pragmatic Programmer”.', NOW(), 2),
('Trip Notes', 'Cape Girardeau looks beautiful this time of year.', NOW(), 3),
('Dream Journal', 'Flying over forests — felt free and calm.', NOW(), 3),
('Study Goals', 'Relearn React and Spring Boot basics.', NOW(), 3),
('Reminders', 'Apply for internships by December 2025.', NOW(), 3);

Select notes.title, notes.created_at
FROM notes
INNER JOIN users ON notes.user_id=users.id;
