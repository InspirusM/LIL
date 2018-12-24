
const { RichEmbed } = require('discord.js');
const { get } = require('node-superfetch'); 

exports.run = async(client, message, args, color) => { 
    try {
    var user = message.mentions.users.first() || client.users.get(args[0]);
  
    if (!user) return message.channel.send('You need to mention user you want to slap').then(m => m.delete(10000));
    
    const { body } = await get('https://nekos.life/api/v2/img/slap');
    
    var embed = new RichEmbed()
    embed.setDescription(`**${message.author.username}** slapped **${user.username}**`)
    embed.setImage(body.url)
    embed.setFooter(`Request by: ${message.author.tag} | ${client.user.username}`) 
    embed.setColor(`#FF3358`)
  
    return message.channel.send(embed);
    	    } catch (err) {
    message.channel.send("Whoops! An Error Occured The Error Has Been Reported To Our Center.").then(m => m.delete(90000));
   let erlogs =  client.channels.get(`517751387623522354`);
   erlogs.send(`An Error Occured In Slap Command:\n\`\`\`${err}\`\`\``)
  }
}
exports.conf = {
aliases: [""]
}