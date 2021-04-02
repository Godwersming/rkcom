const Discord = require("discord.js");
const { deletionTimeout, reactionError, reactionSuccess, pinEmojiId } = require('../../config.json');
const superagent = require("superagent")

module.exports = {
  name: "enlarge",
  description: "the help command, what do you expect?",
  aliases: ['en'],
  cooldown: 5,

  execute(bot, message, args) {
    try {

        const arg = message.content.split(" ");

        if(message.guild.channels.cache.find(x => x.name === "discussion-🌎") && !message.member.hasPermission("MANAGE_MESSAGES")) {
            message.delete().catch()
            return message.reply("<:nop:766641729901166614> | vous n'êtes pas autorisés a utiliser des commandes dans ce salon.").then(m => m.delete({timeout: 5000}));
        }

        const emojiRegEx2 = /([<]a?:[a-zA-Z_]{1,32}:[0-9]{18}>)/g;
        if (!emojiRegEx2.test(arg[1])) return message.channel.send("<:nop:766641729901166614> | ce message n'inclue pas d'emojis!").then(m => m.delete({timeout: 5000}));

        const emoji = arg[1].split("<")[1].split(">")[0];
        const emojiID = emoji.split(":")[2];
        const emojiLink = `https://cdn.discordapp.com/emojis/${emojiID}${emoji.split(":")[0] === "a" ? ".gif?v=1" : ".png?v=1"}`;
        
        message.delete().catch()
        message.channel.send({
            files: [emojiLink]
        })
    
    } catch (err) {
        console.log(err)
      }
  },
};

