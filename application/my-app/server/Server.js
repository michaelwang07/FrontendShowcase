const express = require ("express");
const app = express();
const mysql = require('mysql2');
const cors = require ("cors");
// const e = require("express");
app.use(cors());
app.use(express.json());

// Database connection
const db = mysql.createConnection({
    user:"root1",
    host: "34.94.242.160",
    password:"Team6password",
    database: "Team6",
})


// Axios POST API call to create a user in the backend
app.post('/CreateUser', (req, res) => {
    const fname = req.body.fname;
    const lname = req.body.lname;
    const phone = req.body.phone;
    const email = req.body.email;
    const password = req.body.password;
    const usertype = 2;

    db.query('INSERT INTO Users (fname, lname, phone, email, password, usertype) VALUES (?,?,?,?,?,?)', 
    [fname, lname, phone, email, password, usertype], (err, result) => {
        if (err){
            console.log(err);
        } else{
            res.send("Values Inserted");
        }
    }
    );
})


app.post('/CreateItem', (req, res) => {
    const user = 1;
    const category = req.body.category;
    const pname = req.body.pname;
    const pdescription = req.body.pdescription;
    const pprice = req.body.pprice;
    const pimg = req.body.pimg;
    db.query('INSERT INTO Items (user, category, pname, pdescription, pprice, pimg) VALUES (?,?,?,?,?,?)', 
    [user, category, pname, pdescription, pprice, pimg], (err, result) => {
        if (err){
            console.log(err);
        } else{
            res.send("Values Inserted");
        }
    }
    );
})

// Axios GET API call to pull last three posts to be displayed on Home
app.get('/LastThree',(request,response)=>{
    db.query("SELECT * FROM Products ORDER BY pid DESC LIMIT 3",(err,result)=>{
        if(err){
            console.log(err);
        }
            response.send(result);
    });

});

// AXIOS GET API call to pull all requested posts per user params
app.get('/Products', (request, response) => {
    const ptag = request.query.ptag;
    const pname = request.query.pname;
    if(ptag !== "*"){
    db.query("SELECT * FROM Products WHERE ptag='"+ptag+"' AND pname LIKE'"+pname+"%'", (err, result) => {
        if (err){
            console.log(err);
        } else{
            response.send(result);
        }
        console.log(ptag+", "+pname);
    })
}
    else{
        db.query("SELECT * FROM Products WHERE pname LIKE'"+pname+"%'", (err, result) => {
            if (err){   
                console.log(err);
            } else{
                response.send(result);
            }
            console.log(ptag+", "+pname);
        })
    }
});

// Backend print statement to ensure server is up when testing
app.listen(3001, () => {
    console.log("Your server is running on port 3001");
})

