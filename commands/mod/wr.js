const Discord = require("discord.js");
const { deletionTimeout, reactionError, reactionSuccess, pinEmojiId } = require('../../config.json');
const Commando = require('discord.js-commando');
const fs = require("fs");

module.exports = {
  name: "warnremove",
  description: "the help command, what do you expect?",
  aliases: ['wr'],
  cooldown: 10,

  execute(bot, message, args) {
      try {

        if(message.guild.channels.cache.find(x => x.name === "discussion-🌎") && !message.member.hasPermission("MANAGE_MESSAGES")) {
            return message.reply("<:nop:766641729901166614> | vous n'êtes pas autorisés a utiliser des commandes dans ce salon.").then(m => m.delete({timeout: 5000}));
        }

        const err = new Discord.MessageEmbed()
        .setColor("#0c0c0c")
        .setDescription("<:STAFF:761276865675001856> vous n'avez pas les permissions suffisantes pour effectuer cette commande")
    
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(err)
            .then(m => m.delete({timeout: 5000}));

        let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0])
            .then(m => m.delete({timeout: 5000}));
        if (!wUser) return message.channel.send("<:nop:766641729901166614> | je ne trouve pas l'utilisateur!").then(m => m.delete({timeout: 5000}));

        let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));
        if (!warns[message.guild.id]) warns[message.guild.id] = {};//Create a new empty object fot this guild.
        if (!warns[message.guild.id][wUser.id]) warns[message.guild.id][wUser.id] = [] ///Create a new empty array fot this user.

        if (warns[message.guild.id][wUser.id].length === 0 ) {
            return message.channel.send("<:nop:766641729901166614> | cet utilisateur n'as aucun warn.").then(m => m.delete({timeout: 5000}));
        }

        if (isNaN(args[1]) || args[1] < 0 || args[1] >= warns[message.guild.id][wUser.id].length) {
            return message.reply("<:nop:766641729901166614> | merci d'orthographier correctement l'**ID**!").then(m => m.delete({timeout: 5000}));
        }

        let removedWarn = warns[message.guild.id][wUser.id].splice(args[1], 1); //Remove the warn.

        fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
            if (err) console.log(err);

            let warnchannel = message.guild.channels.cache.find(x => x.name === "『⛔』log-mod");
            if (!warnchannel) {
                return message.channel.send(`<:nop:766641729901166614> | je ne trouve pas le salon **log-mod-⛔**`).then(m => m.delete({timeout: 5000}));
            }

            function numToDateString(num) {
                let date = new Date(num)
                return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
            }

            let member = message.mentions.users.first();

            function numToDateString(num) {
                let date = new Date(num)
                return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
              }

            const wr = new Discord.MessageEmbed()
            .setColor("#FFAA00")
            .setAuthor(
                `[WARN Removed] for ${member.tag}`,
                `${message.mentions.users.first().displayAvatarURL({ dynamic: true })}`
              )
              .setDescription(`
Today at ${numToDateString(Date.now())}
**Modérateur:** ${message.author}
**Utilisateur:** ${member}

**Warn:** ${removedWarn[0]}
**Data ID:** ${warns[message.guild.id][wUser.id].length}
              
              `)

            warnchannel.send(wr);
            message.channel.send(`<:verifx:766678211781722230> | warn **${removedWarn[0]}** deleted`);
        });
    } catch (err) {
        console.log(err)
      }
  },
};


