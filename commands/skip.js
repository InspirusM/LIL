const Discord = require('discord.js');
exports.run = async (client, message, args) => {
  try {
    const serverQueue = client.queue.get(message.guild.id);
  		if (!message.member.voiceChannel) return message.channel.send({ embed: { description: 'You Are Not Connected To A Voice Channel 🔇'}});
		if (!serverQueue) return message.channel.send({ embed: { description: 'There Is Nothing Playing In The Server Right Now'}});
		serverQueue.connection.dispatcher.end("Skipped the song!");
		return message.channel.send(`⏩ Successfully Skipped The Song!`)
  
} catch (err) {
  message.channel.send("Whoops! An Error Occured The Error Has Been Reported To Our Center.").then(m => m.delete(90000));
  let erlogs =  client.channels.get(`517751387623522354`);
  erlogs.send(`An Error Occured In Loop Command:\n\`\`\`${err}\`\`\``)
  }
}

exports.conf = {
   aliases: ['s','skp']
}

exports.help = {
  name: 'skip' 
} 
