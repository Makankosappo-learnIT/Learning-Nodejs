-- Check which teacher in charge this course
SELECT Teacher.teacher_name, Course.course_id
FROM Teacher, Course
WHERE Course.teacher_id = Teacher.teacher_id AND course.course_id = 2