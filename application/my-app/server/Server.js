const express = require ("express");
const app = express();
const mysql = require('mysql2');
const cors = require ("cors");

app.use(cors());
app.use(express.json());

// Database connection
const db = mysql.createConnection({
    user:"root1",
    host: "34.94.242.160",
    password:"Team6password",
    database: "Team6",
})


app.post('/createMessage', (req, res) => {
    const sender = req.body.sender;
    const receiver = req.body.receiver;
    const message = req.body.message;
    const location = req.body.location
    const post = req.body.post;
    const time = req.body.time;
    db.query('INSERT INTO Messages (sender, receiver, message, location, time, post) VALUES (?,?,?,?,?,?)', 
    [sender, receiver, message, location, time, post], (err, result) => {
        if (err){
            console.log(err);
        } else{
            res.send("Values Inserted");
        }
    }
    );
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
    const user = req.body.user;
    const category = req.body.category;
    const pname = req.body.pname;
    const pdescription = req.body.pdescription;
    const pprice = req.body.pprice;
    const pimg = req.body.pimg;
    const pdata = req.body.pimg;
    const time = req.body.time;
    db.query('INSERT INTO Items (user, category, pname, pdescription, pprice, pimg, time, pdata) VALUES (?,?,?,?,?,?,?,?)', 
    [user, category, pname, pdescription, pprice, pimg, time, pdata], (err, result) => {
        if (err){
            console.log(err);
        } else{
            res.send("Values Inserted");
        }
    }
    );
})


app.get('/SignIn',(request,response)=>{
    const email = request.query.email;
    const password = request.query.password;
    db.query("SELECT * FROM Users WHERE email ='"+email+"' AND password ='"+password+"'",(err,result)=>{
        if(err){
            console.log(err);
        }
            response.send(result);
    });

});

app.get('/getMessages', (request, response) => {
    const user = request.query.user;
    db.query("SELECT u.fname AS sender, u.email, m.message, m.post, m.time, u.phone, i.pname, i.pid FROM Users u RIGHT JOIN Messages m on u.uid=m.sender RIGHT JOIN Items i on m.post=i.pid WHERE '"+user+"'=m.receiver", (err, result) => {
        if (err){
            console.log(err);
        } else{
            response.send(result);
        }
    })


});


// Axios GET API call to pull last three posts to be displayed on Home
app.get('/LastThree',(request,response)=>{
    db.query("SELECT * FROM Items WHERE approved=1 ORDER BY pid DESC LIMIT 3",(err,result)=>{
        if(err){
            console.log(err);
        }
            response.send(result);
    });

});

// API Get to grab Product using Product ID for display on Product Page
app.get('/SingleProduct', (request, response) => {
    const pid = request.query.pid;
    db.query("SELECT I.pid, I.pname, I.pdescription, I.pprice, I.pdata, U.uid, U.fname, U.lname, U.phone, U.email FROM Items I INNER JOIN Users U ON I.user=U.uid WHERE I.pid= '"+pid+"'"
    ,(err, result) => {
        if (err){
            console.log(err);
        } else{
            response.send(result);
        }
        // console.log(ptag+", "+pname);
    })

});

app.get('/MyPosts', (request, response) => {
    const user = request.query.user;
    db.query("SELECT * FROM Items WHERE user='"+user+"'", (err, result) => {
        if (err){
            console.log(err);
        } else{
            response.send(result);
        }
        // console.log(ptag+", "+pname);
    })

});



// API Get to grab Product using Product ID for display on Product Page
app.get('/SingleItem', (request, response) => {
    const pid = request.query.pid;
    db.query("SELECT * FROM Items WHERE pid='"+pid+"'", (err, result) => {
        if (err){
            console.log(err);
        } else{
            response.send(result);
        }
        // console.log(ptag+", "+pname);
    })

});

// AXIOS GET API call to pull all requested posts per user params
app.get('/Products', (request, response) => {
    const category = request.query.category;
    const pname = request.query.pname;
    if(category !== "*"){
    db.query("SELECT * FROM Items WHERE category='"+category+"' AND pname LIKE'"+pname+"%' AND approved=1", (err, result) => {
        if (err){
            console.log(err);
        } else{
            response.send(result);
        }
        console.log(category+", "+pname);
    })
}
    else{
        db.query("SELECT * FROM Items WHERE pname LIKE'%"+pname+"%' AND approved=1", (err, result) => {
            if (err){   
                console.log(err);
            } else{
                response.send(result);
            }
            console.log(category+", "+pname);
        })
    }
});

// Backend print statement to ensure server is up when testing
app.listen(3001, () => {
    console.log("Your server is running on port 3001");
})

