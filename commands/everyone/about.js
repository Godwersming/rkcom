const Discord = require("discord.js");

module.exports = {
  name: "about",
  description: "dev command",
  aliases: ['a', 'ab', 'dev'],
  cooldown: 60,

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
      
    const embed = new Discord.MessageEmbed()
    .setColor("#0c0c0c")
    .setThumbnail("https://cdn.discordapp.com/attachments/706905565514956940/785628557187088424/5699_mlem.jpeg")
    .setAuthor("Information about Bot", "https://images-ext-2.discordapp.net/external/FWDfSkvTrbC3yJa3xev3UkGH3nPiHcbGJAkHoUtia24/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/523532144635543572/f4dc56b3697ee5d5a547c7d54eb51eb3.webp?width=665&height=665")
    .setDescription(`**Head Developper: Jordan Anderson**
bot créé uniquement pour le serveur RSK Com'

<:damn:764407232984907788> Version: **1.3.25**
codé en en Javascript x Discord/Node.js
Website: https://bit.ly/3ofAebx

Remerciments: **Aminsx#9107** | **sushi#2916**
**Disclaimer:** le code et la propriété du bot appartiennent à 
**© Jordan Anderson**.

pour tout problème, merci de contacter le développeur:
    `)
    .addField("Twitter/", "https://twitter.com/UntoldKay?s=09", true)
    .addField("Autres/", "linktr.ee/tibo.rua **|** tibofaura@gmail.com")

    message.delete().catch()
    message.channel.send(embed)
    } catch (err) {
        return;
      }
    },
    };
