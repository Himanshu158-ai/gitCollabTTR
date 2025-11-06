const express = require('express');
const app = express();
const cors = require('cors');

const User = require('./src/db/model');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("htt bsdk");
})

app.post('/login', async (req, res) => {
    let { name } = req.body;
    const newuser = new User({ name });
    await newuser.save();
    res.json({ reply: `hello ${name}` });
})

app.post('/signup', async (req, res) => {
    let { name, pass } = req.body;
    const user = await User.findOne({ name });
    if (!user) {
        return res.status(401).send({ msg: 'invalid credintial' });
    }

    if (user.pass !== pass) {
        return res.status(400).send("invalid credintial");
    }

    return res.send({userId: user._id});
})

app.listen(3000, (req, res) => {
    console.log("starteddd...");
})