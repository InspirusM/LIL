const Discord = require(`discord.js`)  

exports.run = async(client, message, args) => {
try {
const embed = new Discord.RichEmbed()
.setColor('#FA054C')
.addField('If You Found Me Useful For Your Server Then Vote Me!',`[Click Here To Upvote Me](https://discordbots.org/bot/${client.user.id}/vote)`)
.addField('Want To Invite Me',`[Click Here To Invite Me](https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=2146958847)`)
.addField('Need Help or Support While Using The Bot Join My Server',`[Click Me To Join](https://discord.gg/GJ8zqEH)`)
.setThumbnail(client.user.avatarURL)
message.channel.send(embed);
    } catch (err) {
  message.channel.send("Whoops! An Error Occured The Error Has Been Reported To Our Center.").then(m => m.delete(90000));
  let erlogs =  client.channels.get(`517751387623522354`);
  erlogs.send(`An Error Occured In Vote Command:\n\`\`\`${err}\`\`\``)
  }
}
                       
exports.conf = {
   aliases: ['voteme']
}