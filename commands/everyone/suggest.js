const Discord = require("discord.js");
const { deletionTimeout, reactionError, reactionSuccess, pinEmojiId } = require('../../config.json');

module.exports = {
  name: "suggest",
  description: "the help command, what do you expect?",
  aliases: ['sgt'],
  cooldown: 0,

  execute(bot, message, args) {

     if (message.channel.id !== "777449003189141504") return message.channel.send("<:nop:766641729901166614> | you'r a dumb not the good chan"); {
        try {

          if (!args[0]) return message.channel.send("<:nop:766641729901166614> | merci d'indiquer le contenu de la suggestion").then(m => m.delete({timeout: 5000}));
            message.delete()

            let embed = new Discord.MessageEmbed()

            .setColor("#0c0c0c")
            .setAuthor(
              `Suggestion/ ${message.author.tag}`,
              message.author.displayAvatarURL()
            )
            .setDescription(`**<:param:766641734859489342> ID: ${Math.random().toString(36).substring(2, 15)}**
            
${message.content.substring(8, message.content.length)}`)
            .setTimestamp()
            message.channel.send(embed).then(embedMessage => {
                embedMessage.react('766678211781722230');
                embedMessage.react('766641729901166614');
            });

            } catch (err) {
              console.log(err)
            }
        }
      }
    }
