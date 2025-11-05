const mongoose = require('mongoose');

// console.log('model');
mongoose.connect('mongodb://127.0.0.1:27017/practice').then(()=>{
    console.log("connected db..");
})
.catch((err)=>{
    console.log("db error :",err);
})

const UserSchema = new mongoose.Schema({
    name:String,
    pass:String,
});

const User = mongoose.model("User",UserSchema);
module.exports = User;