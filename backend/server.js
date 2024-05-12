const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet'); // adds a bunch of standard security to server
require('dotenv').config();
require('./config/db.js');
const Event = require('./models/Event.js');
const Person = require('./models/Person.js');
const path = require("path");
const auth = require('./authFuncs.js')
const PORT = 3000;

const app = express();


// ----------------------------------------START MIDDLEWARE---------------------------------------- //
app.use(express.json());
app.use(cors({
    origin: "*"
}));
app.use(morgan('dev'));
app.use(helmet());
app.use((req, res, next) => {
    if (req.path.startsWith('/server')) {
        req.url = req.url.replace('/server', ''); // strip /server from the path
    }
    next();
})


// ----------------------------------------END MIDDLEWARE---------------------------------------- //

app.use(express.static(path.join(__dirname, "../client/dist")));

// ----------------------------------------START ROUTES---------------------------------------- //


app.get("/events", async (req, res) => {
    let arrayOfEvents = await Event.find()
    res.status(201).send(arrayOfEvents);
})

// GET Persons
app.get("/people", async (req, res) => {
    let arrayOfPersons = await Person.find()
    res.status(201).send(arrayOfPersons);
})

app.post("/events", async (req, res) => {
    try {
        let response = await Event.create(req.body);
        res.status(201).send(response)
    } catch (err) {
        console.error(err)
        res.send("ERROR")
    }
});

// POST Person
app.post("/person", async (req, res) => {
    try {
        let response = await Person.create(req.body);
        res.status(201).send(response);
    } catch (err) {
        console.error(err);
        res.send("ERROR");
    }
});

// DELETE Event
app.delete("/events/:IdOfEvent", async (req, res) => {
    // .findByIdAndDelete
    let id = req.params.IdOfEvent;
    let response = await Event.findByIdAndDelete(id);
    console.log(response);
    res.send('deleted event');
});

// Create Event
app.put('/events/:idOfEvent', async (req, res) => {
    let id = req.params.idOfEvent;
    let response = await Event.findByIdAndUpdate(id, req.body, { new: true });
    console.log(response);
    res.send(response)
});



// app.post('/login', async (req, res) => {
//     // use model to put user in collection
//     // should get the email and pass in the req.body
//     // 1. get the user with this email
//     let dbUser = await User.findOne({email: req.body.email});
//     // compare
//     // 2. compare entered password with pass of this user
//     if (!dbUser) return res.status(400).send("email or password incorrect");

//     bcrypt.compare(req.body.password, dbUser.password, (err, isMatch) => { 
//         if (isMatch) {
//             // let the frontend know that the login was successful!
//             // dont want password
//             dbUser.password = "";
//             // now just email and username
//             const token = jwt.sign({dbUser}, process.env.TOKEN_SECRET, { expiresIn: "1h" });
//             res.status(200).send({token, dbUser});

//             // log them in ( on frontend can do certain things, get info related to account, can do BACKEND stuff related to their account, permissions for CRUD functionality related to their account, allow only certain users to do certain things )
//         } else {
//             res.status(400).send("email or password incorrect")
//         }
//     })
// })


app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
});

// ----------------------------------------END ROUTES---------------------------------------- //

app.listen(PORT, () => {
    console.log(`Server LIVE on port ${PORT}`);
});


