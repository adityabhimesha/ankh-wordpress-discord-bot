const express = require("express")
const bodyParser = require("body-parser")

const Discord = require('discord.js');
const dotenv = require('dotenv');

dotenv.config();
const app = express()
const PORT = 3000
app.use(bodyParser.json())
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`))

app.post("/hook", (req, res) => {
    console.log("Webhook Received!")
    console.log(req.body) 
    res.status(200).end() 
})

//bot here
console.log('Bot Started!-----');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content === 'Is Abhi the best trader in the world?') {
        msg.reply('Hell Nah, he sucks!');
    }
});

client.login(process.env.BOT_TOKEN);