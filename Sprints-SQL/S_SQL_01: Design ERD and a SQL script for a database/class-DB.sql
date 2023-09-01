-- Create the Students table
CREATE TABLE Students (
    student_id INT PRIMARY KEY,
    name VARCHAR(50),
    age INT,
    address VARCHAR(100)
);

-- Create the Courses table
CREATE TABLE Courses (
    course_id INT PRIMARY KEY,
    name VARCHAR(50),
    credits INT
);

CREATE TABLE Subjects (
    subject_id INT PRIMARY KEY,
    student_id INT,
    course_id INT,
    grade INT,
    FOREIGN KEY (student_id) REFERENCES Students(student_id),
    FOREIGN KEY (course_id) REFERENCES Courses(course_id)
);
