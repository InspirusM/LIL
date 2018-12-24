exports.run = (client, message ,args) => {
  try {
  const serverQueue = client.queue.get(message.guild.id);
 	if (!message.member.voiceChannel) return message.channel.send({ embed: { description: 'Please Connect To A Voice Channel To Loop The Song!'}});
		if (!serverQueue) return message.channel.send({ embed: { description: 'There Is Nothing Playing In The Server Right Now'}});
  serverQueue.loop = !serverQueue.loop;
  client.queue.set(message.guild.id, serverQueue);
  if(serverQueue.loop) return message.channel.send({ embed: { description: '🔁 Looping Current Song.'}});
  return message.channel.send({ embed: { description: 'Sucessfully Loop off.'}});

    } catch (err) {
    message.channel.send("Whoops! An Error Occured The Error Has Been Reported To Our Center.").then(m => m.delete(90000));
   let erlogs =  client.channels.get(`517751387623522354`);
   erlogs.send(`An Error Occured In Loop Command:\n\`\`\`${err}\`\`\``)
  }
}
exports.conf = {
   aliases: ["repeat"]
}
exports.help = {
name: "loop"
}
