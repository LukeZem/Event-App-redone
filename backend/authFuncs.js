const express = require('express');
const app = express();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


app.post('/login', async (req, res) => {
    // use model to put user in collection
    // should get the email and pass in the req.body
    // 1. get the user with this email
    let dbUser = await User.findOne({email: req.body.email});
    // compare
    // 2. compare entered password with pass of this user
    if (!dbUser) return res.status(400).send("email or password incorrect");

    bcrypt.compare(req.body.password, dbUser.password, (err, isMatch) => { 
        if (isMatch) {
            // let the frontend know that the login was successful!
            // dont want password
            dbUser.password = "";
            // now just email and username
            const token = jwt.sign({dbUser}, process.env.TOKEN_SECRET, { expiresIn: "1h" });
            res.status(200).send({token, dbUser});

            // log them in ( on frontend can do certain things, get info related to account, can do BACKEND stuff related to their account, permissions for CRUD functionality related to their account, allow only certain users to do certain things )
        } else {
            res.status(400).send("email or password incorrect")
        }
    })
})