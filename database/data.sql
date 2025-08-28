USE elms_db;

-- Users (Password is 'password'. It should be hashed in a real app)
INSERT INTO users (username, password, role) VALUES
('student@elms.com', '$2a$10$AbcdeFGHIJklmnoPQRSTu.vwxyzABCDEFGHIJKLMNOPQRSTU', 'STUDENT'),
('instructor@elms.com', '$2a$10$abcdefghijklmnopqrstuv.wxyzABCDEFGHIJKLMNOPQRSTU', 'INSTRUCTOR');

-- Courses
INSERT INTO courses (title, description, instructor_name) VALUES
('Java Full-Stack Mastery', 'Master Java, Spring Boot, and React to build powerful web applications.', 'Dr. Evelyn Reed'),
('Data Science with Python', 'From basics to advanced machine learning models with Python, Pandas, and Scikit-learn.', 'Prof. David Chen');

-- Lessons for Java Course (course_id = 1)
INSERT INTO lessons (title, content, course_id) VALUES
('Introduction to Spring Boot', 'Video content placeholder for setting up your first Spring Boot application.', 1),
('Building REST APIs', 'Learn how to create robust and scalable RESTful web services.', 1);

-- Assignments for Java Course (course_id = 1)
INSERT INTO assignments (title, description, due_date, course_id) VALUES
('Todo List API', 'Create a simple REST API for a Todo application.', '2025-09-15', 1);

-- Quiz for Java Course (course_id = 1)
INSERT INTO quizzes (title, course_id) VALUES
('Spring Boot Fundamentals', 1);