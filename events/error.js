exports.run = (client, error) => {
  try {
	console.log(error);
  client.channels.get("517751387623522354").send(error);
  } catch (err) {
    let erlogs =  client.channels.get(`517751387623522354`);
    erlogs.send(`An Error Occured In Error Event:\n\`\`\`${err}\`\`\``)
  }
};
