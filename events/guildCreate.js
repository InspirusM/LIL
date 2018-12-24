var Discord = require('discord.js');

exports.run = async (client, guild) => {
  try  {
 let bicon = client.user.displayAvatarURL;
  let support = new Discord.RichEmbed()
.setThumbnail(bicon)
.setColor("RANDOM")
.setTitle(`Hello I'm **${client.user.username}**`)
.addField(`My Prefix is **${client.prefix}**`,`and My Help Command is **${client.prefix}help**`)
.setTimestamp()
  guild.owner.send(support);
  } catch (err) {
    let erlogs =  client.channels.get(`517751387623522354`);
    erlogs.send(`An Error Occured In guildCreate Event:\n\`\`\`${err}\`\`\``)
  }
};
