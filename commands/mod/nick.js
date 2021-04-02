const Discord = require("discord.js");

module.exports = {
  name: "nick",
  description: "the help command, what do you expect?",
  aliases: ['nickname', 'ni'],
  cooldown: 10,

  execute(bot, message, args) {
      try {
        const err = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setDescription("<:STAFF:761276865675001856> vous n'avez pas les permissions suffisantes pour effectuer cette commande")
    
        if (!message.member.hasPermission("MANAGE_MESSAGES"))
        return message.channel.send(err)
        .then(m => m.delete({timeout: 5000}));

        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username === args.slice(0).join(" ") || x.user.username === args[0]) || message.guild.members.cache.find((user) => user.user.username === `${args[0]}` || user.nickname === `${args[0]}`)
        
        if (!member) return message.channel.send("<:nop:766641729901166614> | mentionne quelqu'un").then(m => m.delete({timeout: 5000}));
        if (!args[0]) return message.channel.send("<:nop:766641729901166614> | mentionne quelqu'un").then(m => m.delete({timeout: 5000}));
        if (!args.slice(1).join(" ")) return message.channel.send(`<:faq:770391445537292350> | indiquez le nickname de **${member}**`).then(m => m.delete({timeout: 5000}));

        message.delete().catch()
        member.setNickname(args.slice(1).join(" ")), message.channel.send(`<:verif:777537098416390145> | nickname de **${member}** modifié en **${args.slice(1).join(" ")}**`).then(m => m.delete({timeout: 5000}));
} catch (err) {
    console.log(err)
  }
},
};
