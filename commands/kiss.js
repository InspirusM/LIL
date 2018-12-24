const { RichEmbed } = require('discord.js');
const { get } = require('node-superfetch'); 

exports.run = async(client, message, args, color) => { 
    try {
// user mention or id variable 
    var user = message.mentions.users.first() || client.users.get(args[0]);
// if there no user mentioned, return this
    if (!user) return message.channel.send('You need to mention user you want to kiss').then(m => m.delete(10000));
    
// the api will we get for image
    const { body } = await get('https://nekos.life/api/v2/img/kiss');
    
// making an embed
    var embed = new RichEmbed()
    if(user.id === message.author.id) {
        embed.setDescription(`**${message.author.username}**, Are you alone? Okay here some kisses for you.`)
        embed.setImage(body.url).setColor(color) 
        embed.setFooter(`Request by: ${message.author.tag} | ${client.user.username} v${client.version}`) 
        } else {
    embed.setDescription(`**${message.author.username}** kissed **${user.username}**`)
    embed.setImage(body.url)
    embed.setFooter(`Request by: ${message.author.tag} | ${client.user.username}`) 
    } 
    embed.setColor(`#FF3358`)
// send a embed with the image
    return message.channel.send(embed);
  } catch (err) {
    message.channel.send("Whoops! An Error Occured The Error Has Been Reported To Our Center.").then(m => m.delete(90000));
   let erlogs =  client.channels.get(`517751387623522354`);
   erlogs.send(`An Error Occured In Kiss Command:\n\`\`\`${err}\`\`\``)
  }
}
exports.help = {
name: "kiss"
}
exports.conf = {
aliases: [""]
}