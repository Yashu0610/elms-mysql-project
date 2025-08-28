CREATE DATABASE IF NOT EXISTS elms_db;
USE elms_db;

-- Users Table (from Stashed changes, with more robust columns)
CREATE TABLE users (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL
);

-- Courses Table (from Stashed changes, with instructor_name)
CREATE TABLE courses (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    description TEXT,
    instructor_name VARCHAR(255)
);

-- Lessons Table (from Stashed changes)
CREATE TABLE lessons (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT,
    course_id BIGINT,
    FOREIGN KEY (course_id) REFERENCES courses(id)
);

-- Assignments Table (from Stashed changes)
CREATE TABLE assignments (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    due_date DATE,
    course_id BIGINT,
    FOREIGN KEY (course_id) REFERENCES courses(id)
);

-- Quizzes Table (from Stashed changes)
CREATE TABLE quizzes (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    course_id BIGINT,
    FOREIGN KEY (course_id) REFERENCES courses(id)
);

-- Enrollments Table (from Updated upstream, with BIGINT for consistency)
CREATE TABLE enrollments (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT NOT NULL,
    course_id BIGINT NOT NULL,
    enrollment_date DATE,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (course_id) REFERENCES courses(id)
);

-- --- SAMPLE DATA ---

-- Users Data (modified to fit the new 'username' column)
INSERT INTO users (username, password, role) VALUES
('namratha@example.com', 'pass123', 'user'),
('aj@example.com', 'pass123', 'user'),
('sree@example.com', 'pass123', 'user');

-- Courses Data (modified to include instructor_name)
INSERT INTO courses (title, description, instructor_name) VALUES
('Java Basics', 'Learn core Java from scratch', 'Dr. Evelyn Reed'),
('Spring Boot', 'Build backend APIs with Spring Boot', 'Dr. Evelyn Reed'),
('MySQL', 'Database fundamentals', 'Prof. David Chen');

-- Enrollments Data
INSERT INTO enrollments (user_id, course_id, enrollment_date) VALUES
(1, 1, '2025-08-28'),
(2, 2, '2025-08-28'),
(3, 3, '2025-08-28');