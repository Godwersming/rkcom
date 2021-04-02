const pagination = require("discord.js-pagination");
const Discord = require("discord.js");

module.exports = {
  name: "help",
  description: "the help command, what do you expect?",
  aliases: ['aide', 'h'],
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
      
    const help = new Discord.MessageEmbed()
      .setAuthor("Head Developper: Jordan Anderson", "https://images-ext-2.discordapp.net/external/FWDfSkvTrbC3yJa3xev3UkGH3nPiHcbGJAkHoUtia24/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/523532144635543572/f4dc56b3697ee5d5a547c7d54eb51eb3.webp?width=665&height=665")
      .setThumbnail(`${message.author.displayAvatarURL({
        dynamic: true,
      })}`)
      .setColor("#0c0c0c")
      .setDescription(`
Remerciments: Aminsx#9107 | sushi#2916

**développé uniquement pour le serveur RSK Com'**
bot discord **Kyvl** en projet [Jordan Anderson]

<:js:766641730749202472> Javascript x Discord/Node.js | **© Jordan Anderson** 
**liste des commandes:**
      `)
      .addField("**ball**", "posez une question au bot")
      .addField("**about**", "informations sur le bot", true)
      .addField("**server**", "toutes les infos sur le serveur", true)
      .addField("**faq**", "toutes les réponses a vos questions", true)    
      .addField("**reseaux**", "les réseaux de Ruusskov", true)
      .addField("**rps**", "joue à pierre feuille ciseaux", true)
      .addField("**hack**", "(fake) hack un utilisateur", true)
      .addField("**suggest**", "propose une suggestion [#suggestions-📯]")

      .setFooter("cooldown: 60s / alias: aide")
  
      const embedcd = new Discord.MessageEmbed()

.setAuthor("Head Developper: JordanGarrist#1213", "https://images-ext-2.discordapp.net/external/FWDfSkvTrbC3yJa3xev3UkGH3nPiHcbGJAkHoUtia24/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/523532144635543572/f4dc56b3697ee5d5a547c7d54eb51eb3.webp?width=665&height=665")
.setDescription("voici tout les **cooldowns** et les **alias** appliqués sur les commandes")

.addField("**ball**", `cooldown: **7s** / alias: **question**`)
.addField("**about**", "cooldown: **60s** / alias: **dev**", true)
.addField("**server**", "cooldown: **60s** / alias: **infos**")
.addField("**faq**", "cooldown: **20s** / alias: **fq**")
.addField("**reseaux**", "cooldown: **60s** / alias: **rs**", true)
.addField("**rps**", "cooldown: **10s** / alias: **shufumi**")
.addField("**hack**", "cooldown: **60s** / alias: **<:nop:766641729901166614>**")
.addField("**suggest**", "cooldown: **120s** / alias: **sgt**", true)


.setColor("#0c0c0c")

message.delete().catch()
message.author.send(help)
message.author.send(embedcd)

    const send = new Discord.MessageEmbed()
    .setThumbnail(`${message.author.displayAvatarURL({
      dynamic: true,
    })}`)
      .addField(
          
        `**${message.author.tag}**`
      , "message d'aide envoyé", 

    )
    .addField(`besoin d'aide ?`, "mentionne un Modérateur", true)
    .setColor("#0c0c0c")
      
    message.channel.send(send);

      } catch (err) {
        console.log(err)
      }
  },
};
