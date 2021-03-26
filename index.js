const express = require("express")
const bodyParser = require("body-parser")

const Discord = require('discord.js');
const dotenv = require('dotenv');
const serverID = '761279321188335666'
const channelName = '761279321871876101'

dotenv.config();
const app = express()
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`))

app.post("/user_expires", (req, res) => {
    console.log("Webhook Received!")
    var data = req.query
    
    console.log(data.username)
    console.log(data.user_email)

    const channel = client.channels.cache.find(channel => channel.name === channelName)
    channel.send(`Heads Up! ${data.username}, your monthly subscription has ended!`)

    res.status(200).end() 
})

//bot here
console.log('Bot Started!----->');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    const list = client.guilds.cache.get(serverID); 
    list.members.cache.filter(member => console.log(client.users.fetch(member.user.id)));
    //offlineMembers = list.members.cache.filter(member => console.log(member));


});

client.login(process.env.BOT_TOKEN);