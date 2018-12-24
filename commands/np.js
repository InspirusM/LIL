const { RichEmbed } = require('discord.js');
exports.run = async(client, message, args) => {
  try { 
  const serverQueue = client.queue.get(message.guild.id);
 if(!serverQueue) return message.channel.send({ embed: { color: 0x1D82B6, description:'There Is Nothing Playing In The Server Right Now!'}});
//  if(serverQueue.voiceChannel.id !== msg.member.voiceChannel.id) return msg.channel.send({ embed: { color: 0xf91d1d, description: `You Must Be In **${serverQueue.voiceChannel.name}** To Loop The Song`}});
  const duration = (serverQueue.songs[0].duration.minutes*60000) + ((serverQueue.songs[0].duration.seconds%60000)*1000);
  const persentase = serverQueue.connection.dispatcher.time/duration;
  const curentDurationMinute = Math.floor(serverQueue.connection.dispatcher.time/60000) < 10 ? `0${Math.floor(serverQueue.connection.dispatcher.time/60000)}` : Math.floor(serverQueue.connection.dispatcher.time/60000);
  const currentDurationSeconds = Math.floor((serverQueue.connection.dispatcher.time%60000)/1000) < 10 ? `0${Math.floor((serverQueue.connection.dispatcher.time%60000)/1000)}` : Math.floor((serverQueue.connection.dispatcher.time%60000)/1000);
  const endDurationMinute = serverQueue.songs[0].duration.minutes < 10 ? `0${serverQueue.songs[0].duration.minutes}` : serverQueue.songs[0].duration.minutes;
  const endDurationSeconds = serverQueue.songs[0].duration.seconds < 10 ? `0${serverQueue.songs[0].duration.seconds}` : serverQueue.songs[0].duration.seconds;
  
  const emb = new RichEmbed()
  .setColor('RANDOM')
  .setAuthor(serverQueue.songs[0].author.tag, serverQueue.songs[0].author.avatarURL)
  .setTitle(serverQueue.songs[0].title)
  .setURL(serverQueue.songs[0].url)
  .setThumbnail(serverQueue.songs[0].thumbnail)
 .setDescription(`▶ ${progressBar(persentase)} \`[${curentDurationMinute}:${currentDurationSeconds} - ${endDurationMinute}:${endDurationSeconds}]\``);
  
  return message.channel.send('🎶 **Now playing...**', { embed: emb});
    } catch (err) {
    message.channel.send("Whoops! An Error Occured The Error Has Been Reported To Our Center.").then(m => m.delete(90000));
   let erlogs =  client.channels.get(`517751387623522354`);
   erlogs.send(`An Error Occured In NowPlaying Command:\n\`\`\`${err}\`\`\``)
  }
}

function progressBar(percent){
	let num = Math.floor(percent*12);
	if(num === 1){
		return '🔵▬▬▬▬▬▬▬▬▬▬▬';
	}else if(num === 2){
		return '▬🔵▬▬▬▬▬▬▬▬▬▬';
	}else if(num === 3){
		return '▬▬🔵▬▬▬▬▬▬▬▬▬';
	}else if(num === 4){
		return '▬▬▬🔵▬▬▬▬▬▬▬▬';
	}else if(num === 5){
		return '▬▬▬▬🔵▬▬▬▬▬▬▬';
	}else if(num === 6){
		return '▬▬▬▬▬🔵▬▬▬▬▬▬';
	}else if(num === 7){
		return '▬▬▬▬▬▬🔵▬▬▬▬▬';
	}else if(num === 8){
		return '▬▬▬▬▬▬▬🔵▬▬▬▬';
	}else if(num === 9){
		return '▬▬▬▬▬▬▬▬🔵▬▬▬';
	}else if(num === 10){
		return '▬▬▬▬▬▬▬▬▬🔵▬▬';
	}else if(num === 11){
		return '▬▬▬▬▬▬▬▬▬▬🔵▬';
	}else if(num === 12){
		return '▬▬▬▬▬▬▬▬▬▬▬🔵';
	}else{
		return '🔵▬▬▬▬▬▬▬▬▬▬▬';
  } 
} 
exports.conf = {
   aliases: ['nowplaying']
}

exports.help = {
  name: 'np' 
} 