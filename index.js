const express = require ('express');
const app = express();
const port = 8000;


// use express router

app.use('/', require('./routes'));


//set up view engine 

app.set('view engine', 'ejs');
app.set ('views', './views');



app.listen(port, function(err){
    if (err){

        console.log(`err in running the server : ${err}`);
    }

    console.log(`server is running on port : ${port}`);
});