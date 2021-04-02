const Discord = require("discord.js");
const { rangeTransformDependencies } = require("mathjs");
const ms = require("ms");


module.exports = {
  name: "rmd",
  description: "rmd command",
  aliases: ['reminder', 'rmd'],
  cooldown: 10,

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
        
      let rmd = message.content.split(`.rmd`).join("");
      let timer = args[0];

      if (!rmd) {
        return message.channel.send(
          `<:nop:766641729901166614> | utilisation incorrecte de commande - **.rmd time text**`
        );
      }

      if (!args[0]) {
        return message.channel.send(
          `<:nop:766641729901166614> | utilisation incorrecte de commande - **.rmd time text**`
        );
      }

      if (!message.guild) return;
      let text = args.slice(1).join(" ");
   
      message.channel.send( `<:in:766641735282458636> rappel de **${text}** dans **${ms(ms(timer), { long: true })}**`);
      setTimeout(function () {

message.author.send(`**<:time:766683486198824960> ${ms(ms(timer), { long: true })}** | ${text}`)

      }, ms(timer))
    } catch (err) {
        return;
      }
    },
    };
