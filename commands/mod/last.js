const Discord = require("discord.js");
const fs = require("fs")

module.exports = {
  name: "last",
  description: "the help command, what do you expect?",
  cooldown: 10,

  execute(bot, message, args) {
      try {

        const errembed = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setDescription(`
    **error | permissions bloquées 🚫**
        
    impossible d'éxectuer une commande en privé | si vous pensez qu'il s'agit d'une erreur, merci de contacter le développeur [**.about**]
        `)
        .setThumbnail("https://cdn.discordapp.com/attachments/615566066164170799/758002692231790672/654823379928612874.gif")
        
        if (message.channel.type == "dm") return message.author.send(errembed)
    
        const err = new Discord.MessageEmbed() 
      .setColor("#FF0000")
      .setDescription("<:STAFF:761276865675001856> vous n'avez pas les permissions suffisantes pour effectuer cette commande")
    
      if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send(err)

        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username === args.slice(0).join(" ") || x.user.username === args[0]) || message.guild.members.cache.find((user) => user.user.username === `${args[0]}` || user.nickname === `${args[0]}`)
        if (!member) return message.channel.send('command usage: `last <@user>`');
    
        const lastMsg = message.guild.member(member).lastMessage;
        if (!lastMsg) return message.channel.send("le dernier message de cet utilisateur n'a pas pu être trouvé, ou il se peut simplement qu'il n'ait envoyé aucun message ici.");
                    
        const embed = new Discord.MessageEmbed()
          .setColor(message.guild.member(member).displayColor)
          .setDescription(`
#${message.channel.name}
message: **${lastMsg}**
          `)

        message.delete().catch()
        message.channel.send({ embed });

    } catch (err) {
        console.log(err)
      }
    },
    };
    
    
