const Discord = require("discord.js");
const snekfetch = require('node-superfetch');
exports.run = async (client, message, args) => {
    try {
        const { body } = await snekfetch
        .get('https://liapi.glitch.me/memes')
        const embed = new Discord.RichEmbed()
        .setColor('#FF9301')
        .setImage(body.image)
        message.channel.send(embed)
  } catch (err) {
    message.channel.send("Whoops! An Error Occured The Error Has Been Reported To Our Center.").then(m => m.delete(90000));
   let erlogs =  client.channels.get(`517751387623522354`);
   erlogs.send(`An Error Occured In Memes Command:\n\`\`\`${err}\`\`\``)
  }
}
exports.conf = {
aliases: [""]
}