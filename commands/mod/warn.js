const Discord = require("discord.js");
const { deletionTimeout, reactionError, reactionSuccess, pinEmojiId } = require('../../config.json');
const Commando = require('discord.js-commando');
const fs = require("fs");

module.exports = {
  name: "warn",
  description: "the help command, what do you expect?",
  aliases: ['warn'],
  cooldown: 10,

  execute(bot, message, args) {
    try {

        const err = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setDescription("<:STAFF:761276865675001856> vous n'avez pas les permissions suffisantes pour effectuer cette commande")
    
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(err)
            .then(m => m.delete({timeout: 5000}));
    
        let wUser = message.mentions.users.first() || bot.users.fetch(args[0]);
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username === args.slice(0).join(" ") || x.user.username === args[0]) || message.guild.members.cache.find((user) => user.user.username === `${args[0]}` || user.nickname === `${args[0]}`)

        if (!args[0]) return message.channel.send("<:nop:766641729901166614> | mentionne quelqu'un").then(m => m.delete({timeout: 5000}));
        if (!wUser) return message.channel.send("<:nop:766641729901166614> | je ne trouve pas l'utilisateur!").then(m => m.delete({timeout: 5000}));
        if (member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("<:nop:766641729901166614> | je ne peut pas sanctionner un membre du staff").then(m => m.delete({timeout: 5000}));
        let wReason = args.slice(1).join(" ");
        if (!wReason) return message.channel.send("<:nop:766641729901166614> | merci de spécifier une raison valable!").then(m => m.delete({timeout: 5000}));
    
        let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));
        if (!warns[message.guild.id]) warns[message.guild.id] = {};//Create a new empty object fot this guild.
        if (!warns[message.guild.id][wUser.id]) warns[message.guild.id][wUser.id] = [] ///Create a new empty array fot this user.
    
        warns[message.guild.id][wUser.id].push(wReason);
    
        //Writes the warning to a file
        fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
          if (err) console.log(err)
        });
    
        //Finds the warn embed
        let warnchannel = message.guild.channels.cache.find(x => x.name === "『⛔』log-mod");
        if (!warnchannel) return message.channel.send(`<:nop:766641729901166614> | je ne trouve pas le salon logs`).then(m => m.delete({timeout: 5000}));
    
        function numToDateString(num) {
          let date = new Date(num)
          return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
        }
    
        const tn = new Discord.MessageEmbed()
        .setColor("#FFD800")
        .setAuthor(
          `[WARN] ${wUser.tag} | ${numToDateString(Date.now())}`,
          `${wUser.displayAvatarURL({
            dynamic: true,
            size: 4096,
          })}`
        )
        .setDescription(`
**Utilisateur:** ${wUser}
**Modérateur:** ${message.author}
**Raison:** ${wReason}
        `)
    
    
        message.delete().catch()
        warnchannel.send(tn);
         message.channel.send(tn).then(m => m.delete({timeout: 5000}));
         wUser.send(tn);
    
        let WarnAmount = warns[message.guild.id][wUser.id].length;
    
        //Kicks for X amount of warns
        if (WarnAmount === 10) {

          const alert = new Discord.MessageEmbed()
          .setColor("#FFD800")
          .setAuthor(`[AUTOWARN] **${wUser.tag}**`)
          .setDescription(`<:warning:772121250780545044> | **${wUser.tag}** a désormais **10 warns**`)
          .setFooter("NF Limited Warn database User")
          .setTimestamp()

          warnchannel.send(`\`[${numToDateString(Date.now())}]\` **${message.author.tag}** kicked **${wUser.tag}** | **10 warns atteinds**`);
        }
            } catch (err) {
              console.log(err)
            }
        },
      };
      

