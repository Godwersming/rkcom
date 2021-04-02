const Discord = require("discord.js");

module.exports = {
  name: "ball",
  description: "answer questions",
  aliases: ['question', 'ball'],
  cooldown: 7,

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
    if (!args[0]) return message.reply("<:nop:766641729901166614> | pose moi une question").then(m => m.delete({timeout: 5000}));

    let replies = [
      "c'est certain", "c'est décidé", "sans aucun doute", "oui", "certainement", "vous pouvez vous y fier",
      "selon moi, oui.", "très probablement.", "les perspectives sont bonnes.", "oui.", "les signes indiquent que oui",
      "demandez plus tard", "mmh", "mieux vaut ne pas vous le dire maintenant", "impossible de prévoir maintenant", "concentrez-vous et demandez à nouveau",
      "ne comptez pas dessus.", "ma réponse est non.", "mes sources disent non.", "perspective pas très bonne.", "très douteux."
                        ]

    let result = Math.floor(Math.random() * replies.length);

    message.channel.send(replies[result]);
  } catch (err) {
    console.log(err)
  }
},
};
