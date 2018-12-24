const Discord = require(`discord.js`);

exports.run = (client, guild) => {
    try {
    const join = client.channels.get("517749949413457938"); //CHANGE TO YOUR CHANNEL-ID TO GET NOTIFICATIONS

    let rbnEmbed = new Discord.RichEmbed()
    .setTitle(`Stoped Serving In **${guild.name}**`)
    .setColor(`GREEN`)
    .setDescription(`**Guild Owner**: ${guild.owner}\n**Guild Name**: ${guild.name}\n**Guild ID**: ${guild.id}\n**Guild Channels Count**: ${guild.channels.size} \n**Members Lost**: ${guild.memberCount}\n**Now I Have**: ${client.guilds.size}`)
    join.send(rbnEmbed);
  } catch (err) {
    let erlogs =  client.channels.get(`517751387623522354`);
    erlogs.send(`An Error Occured In guildDelete Event:\n\`\`\`${err}\`\`\``)
  }
};
