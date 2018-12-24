 exports.run = async (client, message, args) => {
   try {
   const serverQueue = client.queue.get(message.guild.id);

if (!message.member.voiceChannel) return message.channel.send({ embed: { color: 0xfc0505, description: 'You are not in a voice channel!'}});
    if(!serverQueue) return message.channel.send({ embed: { color: 0xfc0505, description: 'There Is nothing Playing In The Server Right Now!'}});
    if(serverQueue.songs.length  < 3) return message.channel.send({ embed: { color: 0xfc0505, description: 'Add Some More Song In Queue First!'}});
    const np = serverQueue.songs.shift();
    const shuffled = require('../util.js').shuffle(serverQueue.songs);
    shuffled.unshift(np);
    serverQueue.songs = shuffled;
    message.channel.send({ embed: { color: 0x2efc05, description: 'Successfully Shuffled The Queue Songs!'}});

	    } catch (err) {
    message.channel.send("Whoops! An Error Occured The Error Has Been Reported To Our Center.").then(m => m.delete(90000));
   let erlogs =  client.channels.get(`517751387623522354`);
   erlogs.send(`An Error Occured In Shuffle Command:\n\`\`\`${err}\`\`\``)
      }
}
 exports.conf = {
   aliases: []
}
