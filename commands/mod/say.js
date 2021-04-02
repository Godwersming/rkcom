const Discord = require("discord.js");
module.exports = {
  name: "say",
  description: "say something",
  aliases: ['dit', 'répète'],
  cooldown: 120,

  execute(bot, message, args) {
    try {

      const errembed = new Discord.MessageEmbed()
      .setColor("#0c0c0c")
      .setDescription(`
**error | permissions bloquées 🚫**
      
impossible d'éxectuer une commande en privé | si vous pensez qu'il s'agit d'une erreur, merci de contacter le développeur [**.about**]
      `)
      .setThumbnail("https://cdn.discordapp.com/attachments/615566066164170799/758002692231790672/654823379928612874.gif")
      
      if (message.channel.type == "dm") return message.author.send(errembed)

    const err = new Discord.MessageEmbed()
    .setColor("#0c0c0c")
    .setDescription("<:STAFF:761276865675001856> il te faut le niveau **20** MEE6 pour utiliser cette commande!")

    if (!message.member.hasPermission("SEND_MESSAGES"))
    return message.channel.send(err)

    let say = message.content.split(`.say`).join("");
    if (!say)
      return message.channel.send(`
      réessayer la commande **${message.author}**
exemple: .say j'aime la pizza`);
    if (!message.guild) return;
    let text = args.join(" ");
    message.delete().catch();
    
      message.channel.send(text)
  } catch (err) {
    return;
  }
},
};
