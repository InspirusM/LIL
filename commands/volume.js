exports.run = async(client, message, args) => {
    try {
    const serverQueue = client.queue.get(message.guild.id);
if (!message.member.voiceChannel) return message.channel.send({ embed: { description: 'You Are Not Connected To A Voice Channel'}});
		if (!serverQueue) return message.channel.send({ embed: { description: 'There Is Nothing Playing In The Server Right Now!'}});
    var botRoleColorSync = message.guild.member(client.user).highestRole.color;
		if (!args[1]) return message.channel.send({embed: { color: 0x32ffe7,  description: `The current volume is: **${serverQueue.volume}**%`}});
		serverQueue.volume = args[1];
    if (args[1] > 100) return message.channel.send({ embed: { description: `${message.author}, Volume limit is 100%!`}});
    serverQueue.volume = args[1];
    if (args[1] > 100) return !serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 100) +
    message.channel.send({ embed: { description: `${message.author}, Volume limit is 100%!`}});
 
    if (args[1] < 101) return serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 100) + message.channel.send({ embed: { description: `I set the volume to: __**${args[1]}**%__`}});
    
    } catch (err) {
    message.channel.send("Whoops! An Error Occured The Error Has Been Reported To Our Center.").then(m => m.delete(90000));
   let erlogs =  client.channels.get(`517751387623522354`);
   erlogs.send(`An Error Occured In Volume Command:\n\`\`\`${err}\`\`\``)
  }
}

exports.conf = {
   aliases: ['v']
}
