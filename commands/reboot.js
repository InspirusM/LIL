const Discord = require('discord.js');
module.exports.run = async (client, message, args) => { 
  try {
  if (!message.author.id == '465119467228364805' && !message.author.id == '437525938582847489') return message.channel.send('❌ | You Are Not My Owner To Use This Command!');

           let embed = new Discord.RichEmbed()
  .setColor("#BE11E9")
  .setTitle("Bot is Restarting..")
     
  await message.channel.send(embed).then(c => c.delete(5000))
  
    client.destroy();
    process.exit(1)
        .then(() => client.login(process.env.BOT_TOKEN))

    	    } catch (err) {
    message.channel.send("Whoops! An Error Occured The Error Has Been Reported To Our Center.").then(m => m.delete(5000));
   let erlogs =  client.channels.get(`517751387623522354`);
   erlogs.send(`An Error Occured In Reboot Command:\n\`\`\`${err}\`\`\``)
  }
}
exports.conf = {
aliases: ["restart"]
}
