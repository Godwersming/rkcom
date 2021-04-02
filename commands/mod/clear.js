const Discord = require("discord.js");

module.exports = {
  name: "clear",
  description: "clear messages",
  aliases: ['cl', 'suppr'],
  cooldown: 0,
  
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
    let amount = message.content.split(" ").slice(1);
    if (amount.length == 0)
      return message.channel.send("<:nop:766641729901166614> | merci d'indiquer un nombre valide").then(m => m.delete({timeout: 5000}));
    amount = parseInt(amount) + 1;

    const err = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setDescription("<:STAFF:761276865675001856> vous n'avez pas les permissions suffisantes pour effectuer cette commande")

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.channel.send(err).then(m => m.delete({timeout: 5000}));
    
    if (isNaN(amount))
      return message.channel.send("<:nop:766641729901166614> | nombre invalide").then(m => m.delete({timeout: 5000}));
    if (amount < 1 || amount > 100)
      return message.channel.send(
        "<:nop:766641729901166614> | le nombre de message demandé est trop haut"
      ).then(m => m.delete({timeout: 5000}));

    message.channel.bulkDelete(amount, true).catch((err) => {
      message.channel.send(
        "erreur | réessayer la commande avec une autre valeur"
      ).then(m => m.delete({timeout: 5000}));
    });

  if(message.guild.channels.cache.find(x => x.name === "discussion-🌎") && !message.member.hasPermission("MANAGE_MESSAGES")) {
    return message.reply("<:nop:766641729901166614> | vous n'êtes pas autorisés a utiliser des commandes dans ce salon.").then(m => m.delete({timeout: 5000}));
}

  let unmutechannel = message.guild.channels.cache.find(x => x.name === "『⛔』log-mod")
  if (!unmutechannel) {
      return message.channel.send(`<a:alert:771118243384393729> | je trouve pas le salon **『⛔』log-mod** bro`).then(m => m.delete({timeout: 5000}));
  }

  function numToDateString(num) {
    let date = new Date(num)
    return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}

  const ins = new Discord.MessageEmbed()
  .setColor("#0c0c0c")
  .setAuthor(`[CLEAR] ${message.author.tag}`, "https://cdn.discordapp.com/attachments/706905565514956940/771302061031161896/messagedelete.png")
  .setDescription(`
**${message.author}** just cleared **${amount}** messages.
[Today at **${numToDateString(Date.now())}**]
  `)

  unmutechannel.send(ins)

  } catch (err) {
    return;
  }
},
};
