const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config();

var db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE 
});

db.connect((error)=>{
    if(error){
        console.log(error);
        console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!');
    }else{
        console.log('MYSQL is connected!');
    }
});

var tools = {
    course_teacher: function(course_id){
        var sql = "SELECT Teacher.teacher_name, Course.course_id FROM Teacher, Course WHERE Course.teacher_id = Teacher.teacher_id AND course.course_id = " + course_id.toString();
        db.query(sql, function(error, result){
            if(error){
                console.log(error);
            }else{
                console.log(result);
                return result;
            }
        });
    },
    input_data: function(student_name, student_email){
        var sql = "INSERT INTO Student(student_name, student_email) VALUES ('" + student_name + "', '" + student_email + "')";
        db.query(sql, function(error, result){
            if(error){
                console.log(error);
            }else{
                console.log(result);
            }
        });
    }
};

module.exports = tools