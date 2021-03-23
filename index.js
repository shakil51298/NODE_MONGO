const express = require('express')

const app = express()


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
    const userDetails = users[userId];
    res.send(userDetails);
    console.log(userDetails);
    console.log(req.params.id);
})

app.listen(3000, ()=>{
    console.log("Listening to port 3000");
})