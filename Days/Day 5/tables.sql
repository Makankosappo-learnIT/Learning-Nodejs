CREATE TABLE Teacher(
    teacher_id INT(3),
    teacher_name VARCHAR(20),
    teacher_email VARCHAR(30),
    PRIMARY KEY (teacher_id)
);

CREATE TABLE Course(
    course_id INT(3),
    teacher_id INT(3) NOT NULL,
    course_name VARCHAR(20),
    course_description VARCHAR(300),
    course_price INT(5),
    course_start DATETIME,
    PRIMARY KEY (course_id),
    FOREIGN KEY (teacher_id) REFERENCES Teacher(teacher_id)
);

CREATE TABLE Student(
    student_id INT(3),
    student_name VARCHAR(20),
    student_email VARCHAR(30),
    PRIMARY KEY (student_id)
);

CREATE TABLE Bill(
    bill_id INT(3),
    course_id INT(3) NOT NULL,
    student_id INT(3) NOT NULL,
    payment BOOLEAN,
    FOREIGN KEY (course_id) REFERENCES Course(course_id),
    FOREIGN KEY (student_id) REFERENCES Student(student_id)
);