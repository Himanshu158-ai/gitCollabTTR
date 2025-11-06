require('dotenv').config()
const express = require("express");
const app = express();
const cors = require("cors");


const User = require("./src/db/model");
const connectDB = require('./config/connectDB')
app.use(cors());
app.use(express.json());

connectDB()

app.get("/", (req, res) => {
    res.send("htt bsdk");
});

app.post("/signup", async (req, res) => {
    let { name,pass } = req.body;
    const newUser = await User.create({ name,pass });
    res.status(201).json({message:"user created successfully",newUser})
});

app.post("/login", async (req, res) => {
    let { name, pass } = req.body;
    if(!name || !pass){
        return res.status(401).send({ msg: "All field required..." });
    }
    const user = await User.findOne({ name });
    if (!user) {
        return res.status(401).send({ msg: "invalid credintial" });
    }

    if (user.pass !== pass) {
        return res.status(400).send("invalid credintial");
    }

    return res.status(200).json({ user:user });
});

app.listen(3000, (req, res) => {
    console.log("starteddd...");
});
