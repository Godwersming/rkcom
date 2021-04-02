const Discord = require("discord.js");

module.exports = {
  name: "reseau",
  description: "reseaux of Ruussky",
  aliases: ['rs', 'réseaux', 'insta', 'twitter', 'fb'],
  cooldown: 60,

  execute(bot, message, args, client) {
          try {
      
            if(message.channel.id !== "777104501298954262") {
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
            
          const help = new Discord.MessageEmbed()
          .setDescription(`**retrouvez ici les réseaux de Ruusskov !**`)
          .addField("**Instagram:**", "https://rb.gy/v2gboe", true)
          .addField("**Twitter:**", "https://rb.gy/35d6cy", true)
          .addField("**Twitch:**", "https://rb.gy/u9png1", true)
          .addField("**Discord:**", "https://discord.gg/AXuxkPt", true)
          .addField("**YouTube:**", "https://rb.gy/qnmqkj", true)
          .addField("**Chaine Secondaire:**", "https://rb.gy/zlxgku", true)
          .addField("**Site Developpeur**", "https://bit.ly/3ofAebx")
          .setColor("#0c0c0c")
      
      message.delete().catch()
      message.author.send(help)  
      message.channel.send(`displayed | **${message.author.tag} <:YES:762714634460463154>**`)
          
      
            } catch (err) {
              console.log(err)
            }
        },
      };
      