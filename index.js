const express = require("express")

const Discord = require('discord.js');
const dotenv = require('dotenv');
//change these to get onto ANKH FX server
//const serverID = ''
const channelName = 'general';

dotenv.config();
const app = express()
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`))

app.get("/user_expires", (req, res) => {
    console.log("User Expired Webhook Received!")
    var data = req.query
    //console.log(data)

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

app.get("/user_renews", (req, res) => {
    console.log("User Renew Webhook Received!")
    var data = req.query
    //console.log(data)

    const channel = client.channels.cache.find(channel => channel.name === channelName)
    
    const msg = new Discord.MessageEmbed()
	.setColor('#cfa710')
	.setTitle(`Hello ${capitalize(data.username)}, ANKH FX Membership Renewed!`)
	.setURL('https://www.ankhfx.com/')
	.setDescription(`Hello ${capitalize(data.username)}, Your membership has been renewed, Please be patient while our admins give you access to the group!`)
	.setThumbnail('https://ankhfxcom-8047ed.ingress-daribow.easywp.com/wp-content/uploads/2021/03/cropped-ankh-3-e1614877224480.png')
	.setTimestamp()

    channel.send(msg);

    res.status(200).end() 
})

app.get("/new_user", (req, res) => {
    console.log("New User Webhook Received!")
    var data = req.query
    
    console.log(data)

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

//WELCOME MEMBER
client.on('guildMemberAdd', (member) => {
    console.log(`Welcome Member called!`);

    const channel = client.channels.cache.find(channel => channel.name === channelName)
    
    const msg = new Discord.MessageEmbed()
	.setColor('#cfa710')
	.setTitle(`Hello <@${capitalize(member.id)}>,GREETINGS, WELCOME TO ANKH FX!`)
	.setURL('https://www.ankhfx.com/')
	.setDescription(`Hello <@${capitalize(member.id)}>, Welcome to the best community in the game, Please read through our #introduction channel to effectively monetize ANKH FX!, PLEASE do be patient while our admins provide access, THANK YOU!`)
	.setThumbnail('https://ankhfxcom-8047ed.ingress-daribow.easywp.com/wp-content/uploads/2021/03/cropped-ankh-3-e1614877224480.png')
	.setTimestamp()

    channel.send(msg);


});

client.login(process.env.BOT_TOKEN);