const { exec } = require('child_process');
const { RichEmbed } = require('discord.js');

exports.run = (client, message, args) => {
  try {
  if (!message.author.id == '465119467228364805' && !message.author.id == '437525938582847489') return message.channel.send('❌ | You Are Not My Owner To Use This Command!');
    
  
  if(!args.join(' ')) return message.channel.send('No parameter to execute.');
  const mu = Date.now();
  let command = `\`\`\`bash\n${args.slice(1).join(' ')}\`\`\``;
  const emb = new RichEmbed()
  .setColor('#81FF00')
  .addField('📥 INPUT', command);
  exec(args.slice(1).join(' '), async( error, stdout, stderr)=> {
  	if(stdout){
	  	let output = `\`\`\`bash\n${stdout}\`\`\``;
	  	if(stdout.length > 1024){
			output = await require('../util.js').hastebin(stdout);
		  }
			emb.addField('📤OUTPUT', output);
  	}else if(stderr){
  	    emb.setColor('#FF0000');
	  	let error = `\`\`\`bash\n${stderr}\`\`\``;
	  	if(stderr.length > 1024){
			error = await require('../util.js').hastebin(stderr);
		  }
			emb.addField('⛔ERROR', error);
  	}else{
	  	emb.addField('📤OUPUT', '```bash\n# Command executed successfully but returned no output.```');
  	}
	  return message.channel.send(emb.setFooter(`\`${Date.now() - mu}ms\``));
  });
   } catch (err) {
    message.channel.send("Whoops! An Error Occured The Error Has Been Reported To Our Center.").then(m => m.delete(90000));
   let erlogs =  client.channels.get(`517751387623522354`);
   erlogs.send(`An Error Occured In Exec Command:\n\`\`\`${err}\`\`\``)
  }
}

exports.conf = {
  aliases: ["exec"]
}
