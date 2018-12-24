const Discord = require("discord.js");
const moment = require("moment");

module.exports.run = async (client, message, args) => {
   try {
    let nop = args[0];
    let emjarg;
    if(args[0] = ('<:')) {
        emjarg = args[0].split(':').slice(-2)[0];
    } else {
        emjarg = args[0];
    }
    
    let emoji = message.guild.emojis.find(e => e.name  === `${args[1]}`) || message.guild.emojis.find(e => e.name === emjarg);
    if(!emoji) return message.channel.send(`** \:x: | Invalid Emoji Name**`);
    let emojiembed = new Discord.RichEmbed()
      .setAuthor('Emoji Info', 'https://discordemoji.com/assets/emoji/7872_blob_hero.png')
      .setColor(0x80FF00)
      .setThumbnail(`${emoji.url}`)
      .addField(`» Emoji Name`, `**${emoji.name}**`)
      .addField(`» Emoji ID`, `\`${emoji.id}\``)
      .addField(`» Emoji Created`, `${moment.utc(emoji.createdAt).format("DD/MM/YYYY")} At ${moment.utc(emoji.createdAt).format("HH")}h${moment.utc(emoji.createdAt).format("mm")}`, true)
      .addField(`» Emoji Link`, `**[Emoji Link](${emoji.url})**`)
      .setFooter(`» Requested By ${message.author.username}`, `${message.author.displayAvatarURL}`)
      message.channel.send(emojiembed)
        } catch (err) {
    message.channel.send("Whoops! An Error Occured The Error Has Been Reported To Our Center.").then(m => m.delete(90000));
   let erlogs =  client.channels.get(`517751387623522354`);
   erlogs.send(`An Error Occured In Emoji Command:\n\`\`\`${err}\`\`\``)
  }
}

    exports.conf = {
      aliases: [""]
    }