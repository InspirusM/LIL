exports.run = async (client, message, args) => {
  try {
  const serverQueue = client.queue.get(message.guild.id);
	if (!message.member.voiceChannel) return message.channel.send({ embed: { description: 'Please Connect To A Voice Channel To Disconnect!'}});
		
	serverQueue.songs = [];
	serverQueue.connection.dispatcher.end();
	return message.channel.send({ embed: { color: 0xef090, description: '⏹ Successfully Disconnected!'}});
  } catch (err) {
    message.channel.send("Whoops! An Error Occured The Error Has Been Reported To Our Center.").then(m => m.delete(90000));
   let erlogs =  client.channels.get(`517751387623522354`);
   erlogs.send(`An Error Occured In Disconnect Command:\n\`\`\`${err}\`\`\``)
  }
}

exports.conf = {
   aliases: ['leave', 'dc','stop']
}
 
