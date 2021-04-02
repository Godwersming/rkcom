const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js")

module.exports = {
name: "cmd",
  description: "server infos",
  aliases: ['cmd'],
  cooldown: 0,
  execute(bot, message, args) {
    try {
  
    if (message.channel.type == "dm") return message.author.send(`
**error | permissions bloquées 🚫**
il s'agit d'une commande strictement réservée au développeur.
    `).then(m => m.delete({ timeout: 5000 }));

    if (message.author.id !== "523532144635543572" && message.author.id !== "367282213496160258") return message.channel.send(
        "<:STAFF:761276865675001856> commande strictement réservée au développeur"
      );
        const embed = new Discord.MessageEmbed()

        .setColor("#0c0c0c")
        .setAuthor("Developper Dashboard", "https://images-ext-2.discordapp.net/external/FWDfSkvTrbC3yJa3xev3UkGH3nPiHcbGJAkHoUtia24/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/523532144635543572/f4dc56b3697ee5d5a547c7d54eb51eb3.webp?width=665&height=665")
        .setDescription(`**dashboard:** https://dashboard.heroku.com/apps/rskcomy/
**github:** https://github.com/tiborua/rskcom
**link:** ||https://discord.com/api/oauth2/authorize?client_id=748593462412050505&permissions=8&scope=bot||
<:terminal:766641730740420638> **eval** |  **up_time** | **debug** | **exec** | **statut**
        `)
        .setThumbnail("https://i.pinimg.com/originals/e0/81/8a/e0818a2510c87e07d2ee7bcddf7e6de7.gif")


        message.channel.send(embed)
    } catch (err) {
        console.log(err)
      }
      }
    }
    
