const Discord = require(`discord.js`);
const ms = require("ms");
let cpuStat = require("cpu-stat");
let os = require('os');

function convertMS(ms) {
    var d, h, m, s;
    s = Math.floor(ms / 1000);
    m = Math.floor(s / 60);
    s = s % 60;
    h = Math.floor(m / 60);
    m = m % 60;
    d = Math.floor(h / 24);
    h = h % 24;
    return {
        d: d
        , h: h
        , m: m
        , s: s
    };
};
  
exports.run = async(client, message, args) => {
  try {
  let u = convertMS(client.uptime);
 let uptime = u.d + " days : " + u.h + " hours : " + u.m + " minutes : " + u.s + " seconds";
  
let cpuLol;
  cpuStat.usagePercent(function(err, percent, seconds) {
    if (err) {
      return console.log(err);
    }
const embed = new Discord.RichEmbed()
.setColor(`#FA054C`)
.setAuthor(client.user.username)
.setDescription(`**__Tuney Creator's__**:\n**ĨNĐ ϟ Rajat#2019**\n**ĨNĐ ϟ Nitra#1883**\n**__Credits__**:\n**GØĐG ツDragon#2077**\n**Sharif#9781**\n**Panda Dev#6666**`)
.addField(`<:Servers:518054418130796604> Server Count: ${client.guilds.size}`, `Tuney Total Server Count`)
.addField(`👥 Total Members: ${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`, `Tuney Total Member`)
.addField(`📕 Total Channels: ${client.channels.size}`, `Tuney Total Channels`)
.addField(`🔊 Playing Music In ${client.queue.size} Server`, `Tuney Music Queue`)
.addField(`<:Upt:518056190492672000> Bot Uptime: ${uptime}`, `Tuney Uptime`)
.addField(`<:Upt:518056190492672000> CPU Usage: ${percent.toFixed(2)}%`, `Tuney CPU Usage`)
.addField(`<:Disk:518059803713732632> Memory Usage: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`, `Tuney Memory Usage`)
message.channel.send(embed);
  })
    } catch (err) {
    message.channel.send("Whoops! An Error Occured The Error Has Been Reported To Our Center.").then(m => m.delete(90000));
   let erlogs =  client.channels.get(`517751387623522354`);
   erlogs.send(`An Error Occured In Stats Command:\n\`\`\`${err}\`\`\``)
  }
}
                       
exports.conf = {
   aliases: ['stat','botinfo']
}