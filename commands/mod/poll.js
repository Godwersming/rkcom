
const Discord = require("discord.js");

module.exports = {
  name: "poll",
  description: "poll",
  aliases: ['pl', 'sond', 'sondage'],
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
    .setDescription("<:STAFF:761276865675001856> vous n'avez pas les permissions suffisantes pour effectuer cette commande")

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.channel.send(err)
    
    if(!args[0]) return message.channel.send('saisissez la question');
        
    //convert the entire message to one string
    let msg = args.slice(0).join(' ');

    //create a new embed with the string and send it to the channel
    let embed = new Discord.MessageEmbed()
      .setColor("#0c0c0c")
      .setDescription(`${msg}`)
      .setAuthor(`Sondage/ ${message.author.tag} `)
        
    message.delete(); 


    message.channel.send(embed).then(messageReaction => {
      messageReaction.react('🟢');
      messageReaction.react('🟠');
      messageReaction.react('🔴');
    });
  } catch {err} {
    console.log()
  }
  }
}