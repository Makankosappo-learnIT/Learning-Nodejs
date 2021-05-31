const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const add = require('./add');
const tools = require('./tools');
const app = express();

const port = process.env.PORT||8000;

tools.course_teacher(2);
add.add(1,1);

app.use(express.static('static'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', require('./routes/index'));
app.use('/form', require('./routes/form'));

app.get('/temp', function(req, res){
    res.sendFile(path.join(__dirname, 'public/temp.html'));
});


app.listen(port, ()=>{
    console.log(`the server is running n localhost: ${port}`)
})