const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()


app.use(cors())
app.use(bodyParser.json())
app.get('/', (req, res)=>{
    res.send({
        fruit: "banana",
        price:500,
        woner : "'shakil khan"
    })
})
// coustom data
app.get('/family/details', (req ,res) =>{
    res.send({
        name: "shaki khan",
        Father_Name : 'Shahadat Hossain',
        Mother_Name : "Rozina Begum",
        Brother_Name: "Shakil Khan, Siam Khan",
        Sister_Name : "Hapsa Khanom"
    })
})
// dynamic url
const users = ["Shakil khan","Shakib Khan", "Azad Khan", "Jibon khan","Al Bariul Khan"];

app.get('/user/:id',(req, res)=>{
    const userId = req.params.id;
    const name = users[userId];
    console.log(req.query);// query special
    res.send({name,userId});// dynamic data send
    console.log(name);
    console.log(req.params.id);
})

// post request
app.post("/addUser" , (req , res) =>{
    // save to database (kori nai akhn o.. akhan e korty hobe)
    const user = req.body
    user.id = 55;
    res.send(user);
    console.log(req.body);
    console.log("post request sent");
})

app.listen(3000, ()=>{
    console.log("Listening to port 3000");
})