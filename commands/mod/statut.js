const Discord = require("discord.js");

module.exports = {
  name: "statut",
  description: "the help command, what do you expect?",
  aliases: ['st', 'rl'],
  cooldown: 10,

  execute(bot, message, args) {
      try {

        if (message.channel.type == "dm") return message.author.send(`
**error | permissions bloquées 🚫**
il s'agit d'une commande strictement réservée au développeur.
    `)

    if (message.author.id !== "523532144635543572" && message.author.id !== "367282213496160258") return message.channel.send(
        "<:STAFF:761276865675001856> commande strictement réservée au développeur"
      ).then(m => m.delete({ timeout: 5000 }));
        
          const status = args[0];
    if (!status) return message.reply("a status type must be provided.").then(m => m.delete({ timeout: 5000 }));

    const statusType = args[0].toLowerCase();

    if (statusType === "online" || statusType === "idle" || statusType === "dnd" || statusType === "invisible") {
      bot.user.setStatus(status);
      message.channel.send(`<:verif:777537098416390145> | Status successfully changed to **${statusType}**.`).then(m => m.delete({ timeout: 5000 }));
    } else {

      message.delete().catch()
      return message.channel.send(`"${statusType}" is not a valid status type.`)
    }
} catch (err) {
    console.log(err)
  }
},
};

