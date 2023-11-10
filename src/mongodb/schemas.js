const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    id: { 
        type: Number, 
        required: [true, "You are missing the id!"], 
        unique: true 
    },
    first_name: {
        type: String, 
        required: [true, "You are missing the first name!"], 
        unique: true 
    }, 
    last_name: {
        type: String, 
        required: [true, "You are missing the last name!"], 
        unique: true 
    }, 
    email: {
        type: String, 
        required: [true, "You are missing the email!"], 
        unique: true 
    }, 
});


const docsSchema = new mongoose.Schema({
    id: { 
        type: Number, 
        required: [true, "You are missing the id!"], 
        unique: true 
    },
    user_id: { 
        type: Number, 
        required: [true, "You are missing the user_id!"], 
        unique: true 
    },
    title: {
        type: String, 
        required: [true, "You are missing the title!"], 
        unique: true 
    }, 
    body: {
        type: String, 
        required: False,
        unique: true 
    }, 
    created_at: {
        type: Date, 
        required: [true, "You are missing the date!"], 
        default: Date.now
    }, 
});

const users = mongoose.model('Users', userSchema);
const docs = mongoose.model('Docs', docsSchema);
mongoose.export = {users, docs};