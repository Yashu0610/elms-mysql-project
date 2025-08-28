-- 1. Create database
CREATE DATABASE elms_db;

-- 2. Use the database
USE elms_db;

-- 3. Users table
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    role VARCHAR(50) DEFAULT 'user'
);

-- 4. Courses table
CREATE TABLE courses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    description TEXT
);

-- 5. Enrollments table
CREATE TABLE enrollments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    course_id INT NOT NULL,
    enrollment_date DATE,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (course_id) REFERENCES courses(id)
);



-- Users
INSERT INTO users (name, email, password, role) VALUES
('Namratha', 'namratha@example.com', 'pass123', 'user'),
('AJ', 'aj@example.com', 'pass123', 'user'),
('Sree', 'sree@example.com', 'pass123', 'user');

-- Courses
INSERT INTO courses (title, description) VALUES
('Java Basics', 'Learn core Java from scratch'),
('Spring Boot', 'Build backend APIs with Spring Boot'),
('MySQL', 'Database fundamentals');

-- Enrollments
INSERT INTO enrollments (user_id, course_id, enrollment_date) VALUES
(1, 1, '2025-08-28'),
(2, 2, '2025-08-28'),
(3, 3, '2025-08-28');

USE elms_db;
SHOW TABLES;
SELECT * FROM users;
SELECT * FROM courses;
SELECT * FROM enrollments;
