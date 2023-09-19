const mongoose = require("mongoose");
const Chat = require("./models/chat");

main()
    .then(() => {
        console.log("connection successful");
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}


let allChats = ([
    {
        from: "neha",
        to: "priya",
        msg: "send me your exam sheet",
        created_at: new Date()
    },
    {
        from: "henu",
        to: "siya",
        msg: "wassup",
        created_at: new Date()
    },
    {
        from: "kritika",
        to: "meenu",
        msg: "hey sis",
        created_at: new Date()
    },
    {
        from: "advit",
        to: "priyanka",
        msg: "How are you?",
        created_at: new Date()
    },
    {
        from: "mitali",
        to: "seenu",
        msg: "Hello world",
        created_at: new Date()
    },

]);

Chat.insertMany(allChats);