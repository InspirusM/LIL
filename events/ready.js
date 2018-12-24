
exports.run = async (client) => {
    try {
     console.log("I'm Ready To Play Music")
     let statuses = [
        `${client.prefix}help | ${client.guilds.size} Servers`,
        `${client.prefix}help | ${client.users.size} Users`,
        `Need Help ? Try ${client.prefix}help`
    ]

    setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        client.user.setActivity(status, {type: "STREAMING", url:"https://twitch.tv/twitch"});

    }, 5000)
 
  } catch (err) {
    let erlogs =  client.channels.get(`517751387623522354`);
    erlogs.send(`An Error Occured In Ready Event:\n\`\`\`${err}\`\`\``)
  }
}
