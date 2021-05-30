INSERT INTO Teacher(teacher_id, teacher_name, teacher_email) VALUES (1, 'Hand Bro', 'handbro@school.com');
INSERT INTO Teacher(teacher_id, teacher_name, teacher_email) VALUES (2, '瘦一slim便緊', 'slimbro@schoo.com');

INSERT INTO Course(course_id, course_name, course_description, course_price, course_start, teacher_id) VALUES (1, '食女心經', 'hand ching 專幫青頭仔食女', 10000, '2021-10-10 23:59:59', 1);
INSERT INTO Course(course_id, course_name, course_description, course_price, course_start, teacher_id) VALUES (2, '操身經', 'Slim Bro 有一系列嘅訓練幫你操fit body <3',20000, '2021-11-10 23:59:59', 2);

INSERT INTO Student(student_id, student_name, student_email) VALUES (1, 'Student A', 'studentA@school.com');
INSERT INTO Student(student_id, student_name, student_email) VALUES (2, 'Studnet B', 'studentB@school.com');

INSERT INTO Bill(bill_id, course_id, student_id, payment) VALUES (1, 1, 1, FALSE);
INSERT INTO Bill(bill_id, course_id, student_id, payment) VALUES (2, 2, 2, FALSE);