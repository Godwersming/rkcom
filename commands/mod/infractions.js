const Discord = require("discord.js");
const { deletionTimeout, reactionError, reactionSuccess, pinEmojiId } = require('../../config.json');
const Commando = require('discord.js-commando');
const fs = require("fs");

module.exports = {
  name: "infractions",
  description: "the help command, what do you expect?",
  aliases: ['inf'],
  cooldown: 10,

  execute(bot, message, args) {
    try {
        const err = new Discord.MessageEmbed()
        .setColor("#0c0c0c")
        .setDescription("<:STAFF:761276865675001856> vous n'avez pas les permissions suffisantes pour effectuer cette commande")
    
        if (!message.member.hasPermission("MANAGE_MESSAGES"))
        return message.channel.send(err).then(m => m.delete({timeout: 5000}));

        let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0])
            .then(m => m.delete({timeout: 5000}));
        if (!wUser) return message.reply("<:nop:766641729901166614> | je ne trouve pas l'utilisateur!").then(m => m.delete({timeout: 5000}));

        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username === args.slice(0).join(" ") || x.user.username === args[0]) || message.guild.members.cache.find((user) => user.user.username === `${args[0]}` || user.nickname === `${args[0]}`)
        let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));
        if (!warns[message.guild.id]) warns[message.guild.id] = {};//Create a new empty object fot this guild.
        if (!warns[message.guild.id][wUser.id]) warns[message.guild.id][wUser.id] = [] ///Create a new empty array fot this user.


        function numToDateString(num) {
            let date = new Date(num)
            return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
          }

        let userWarns = warns[message.guild.id][wUser.id];
        //Let's list warns by index
        if (userWarns.length > 0) {
            var warnMessage = `**infractions list/**`;
            userWarns.forEach((item, index) => {
                warnMessage = warnMessage + `
                [<:param:766641734859489342> id: **${index}**] **reason:** ${item}`;
            })

            const inf = new Discord.MessageEmbed()
        .setColor("#FFD800")
    
        .setAuthor(
            `infractions dashboard | all`,
          )
          .setThumbnail(
              `${message.mentions.users.first().displayAvatarURL({ dynamic: true })}`)
        .setDescription(`
Today at ${numToDateString(Date.now())}
l'utilisateur ${wUser} a **${userWarns.length} sanctions**.

${warnMessage}
        `)

            message.delete().catch()
            message.channel.send(inf)
        } else {
             message.channel.send(`<a:CatHeadPat:700343607759994900> | cet utilisateur n'a aucune sanction, good boy!`);
        }

    } catch (err) {
        console.log(err)
      }
  },
};


