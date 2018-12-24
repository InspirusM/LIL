const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  try {
  let inviteembed = new Discord.RichEmbed()
      .setTitle('You Want Me In Your Server?')
      .setDescription('Hello Buddies! You Want A Amazing Bot For Your Server.Click Below To Invite Me!')
      .setColor('#22B0FA')
      .addField("Invite", `[Click Here](https://discordapp.com/oauth2/authorize?client_id=489076647727857685&scope=bot&permissions=2146958847)`)
      .setTimestamp()
  message.channel.send(inviteembed)

    } catch (err) {
    message.channel.send("Whoops! An Error Occured The Error Has Been Reported To Our Center.").then(m => m.delete(90000));
   let erlogs =  client.channels.get(`517751387623522354`);
   erlogs.send(`An Error Occured In Invite Command:\n\`\`\`${err}\`\`\``)
  }
}
exports.conf = {
aliases: ["invme"]
}
module.exports.help = {
  name: "invite"
}
