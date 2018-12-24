  const { RichEmbed } = require('discord.js');

exports.run = async (client, message, args) => {
  try {

  const serverQueue = client.queue.get(message.guild.id);
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return message.channel.send({ embed: { description: '⏸ Successfully Paused!'}});
		}
		return message.channel.send({ embed: { description: 'There Is Nothing Playing In The Server!'}});
    } catch (err) {
    message.channel.send("Whoops! An Error Occured The Error Has Been Reported To Our Center.").then(m => m.delete(90000));
   let erlogs =  client.channels.get(`517751387623522354`);
   erlogs.send(`An Error Occured In Pause Command:\n\`\`\`${err}\`\`\``)
  }
}

exports.conf = {
   aliases: []
}

exports.help = {
  name: 'pause' 
} 
