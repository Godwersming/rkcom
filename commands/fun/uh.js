const Discord = require("discord.js");


module.exports = {
  name: "uh",
  description: "the help command, what do you expect?",
  aliases: ['uh'],
  cooldown: 60,

  execute(bot, message, args) {
    try {
      
      if(message.guild.channels.cache.find(x => x.name === "discussion-🌎") && !message.member.hasPermission("MANAGE_MESSAGES")) {
        message.delete().catch()
        return message.reply("<:nop:766641729901166614> | vous n'êtes pas autorisés a utiliser des commandes dans ce salon.").then(m => m.delete({timeout: 5000}));
    }
    
        const errembed = new Discord.MessageEmbed()
        .setColor("#0c0c0c")
        .setDescription(`
**error | permissions bloquées 🚫**
        
impossible d'éxectuer une commande en privé | si vous pensez qu'il s'agit d'une erreur, merci de contacter le développeur [**.about**]
        `)
        .setThumbnail("https://cdn.discordapp.com/attachments/615566066164170799/758002692231790672/654823379928612874.gif")
        
        if (message.channel.type == "dm") return message.author.send(errembed)
        
const yeet = new Discord.MessageEmbed()
.setColor("#0c0c0c")
.setImage("https://cdn.discordapp.com/attachments/706905565514956940/778029501149347870/tenor_3.gif")
.setTimestamp()
.setFooter("bravo! c'est une commande easteregg")

message.delete().catch()
message.author.send(yeet)
} catch (err) {
  console.log(err)
}
},
};
