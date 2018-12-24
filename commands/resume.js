const { RichEmbed } = require('discord.js');

exports.run = async (client, message, args) => {
  try  {
  const serverQueue = client.queue.get(message.guild.id);
		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
			return message.channel.send({ embed: { description: '⏯ Successfully Resumed!'}});
		}
	return message.channel.send({ embed: { description: 'There Is Nothing Playing In The Server!'}});
		    } catch (err) {
    message.channel.send("Whoops! An Error Occured The Error Has Been Reported To Our Center.").then(m => m.delete(90000));
   let erlogs =  client.channels.get(`517751387623522354`);
   erlogs.send(`An Error Occured In Resume Command:\n\`\`\`${err}\`\`\``)
  }
}
exports.conf = {
  aliases: 'resu'
} 
