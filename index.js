const express = require("express")
const bodyParser = require("body-parser")

const Discord = require('discord.js');
const dotenv = require('dotenv');
//change these to get onto ANKH FX server
const serverID = '761279321188335666'
const channelName = 'general';

dotenv.config();
const app = express()
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`))

app.get("/user_expires", (req, res) => {
    console.log("Webhook Received!")
    var data = req.query
    console.log(data)

    const channel = client.channels.cache.find(channel => channel.name === channelName)
    
    const msg = new Discord.MessageEmbed()
	.setColor('#cfa710')
	.setTitle(`Hello ${capitalize(data.username)}, ANKH FX Membership Expired`)
	.setURL('https://www.ankhfx.com/')
	.setDescription(`Hello ${capitalize(data.username)}, Your membership has expired, Please visit the site and renew it to have continous uninterrupted access!`)
	.setThumbnail('https://ankhfxcom-8047ed.ingress-daribow.easywp.com/wp-content/uploads/2021/03/cropped-ankh-3-e1614877224480.png')
	.setTimestamp()

    channel.send(msg);

    res.status(200).end() 
})


const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

//bot here
console.log('Bot Started!----->');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    //const list = client.guilds.cache.get(serverID); 
    //list.members.cache.filter(member => console.log(client.users.fetch(member.user.id)));


});

client.login(process.env.BOT_TOKEN);