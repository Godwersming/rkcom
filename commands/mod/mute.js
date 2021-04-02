const Discord = require("discord.js");
const { deletionTimeout, reactionError, reactionSuccess, pinEmojiId } = require('../../config.json');
const ms = require("ms")

module.exports = {
  name: "mute",
  description: "the help command, what do you expect?",
  aliases: ['temp'],
  cooldown: 0,

  execute(bot, message, args) {
    try {

      if (message.channel.type == "dm") return message.author.send(`
**error | permissions bloquées 🚫**
il s'agit d'une commande strictement réservée au développeur.
                    `)
      .then(m => m.delete({timeout: 5000}));

          let tomute = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username === args.slice(0).join(" ") || x.user.username === args[0]) || message.guild.members.cache.find((user) => user.user.username === `${args[0]}` || user.nickname === `${args[0]}`) 
         
          const member = message.guild.members.cache.get(tomute.id);
      
          if (!tomute) return message.channel.send('je ne trouve pas l\'utilisateur').then(m => m.delete({timeout: 5000}));
          if (member.hasPermission("MANAGE_MESSAGES")) {
            return message.channel.send("<:nop:766641729901166614> | vous ne pouvez pas le mute!").then(m => m.delete({timeout: 5000}));
          }
      
          let muterole = message.guild.roles.cache.find(role => role.name === "Muted");
          if(!muterole) return message.channel.send(`<:nop:766641729901166614> | il n'y a pas de rôle appelé \`Muted\`, merci d'en créer un.`).then(m => m.delete({timeout: 5000}));
      
          let mutetime = args[1];
          if (!mutetime) {
            return message.reply("<:nop:766641729901166614> | vous n'avez pas précisé le temps!").then(m => m.delete({timeout: 5000}));
          }
      
          let reason = args.slice(2).join(' ') || "aucune raison précisée";
      
          let mutechannel = message.guild.channels.cache.find(x => x.name === "『⛔』log-mod");
          if (!mutechannel) {
            return message.channel.send(`<a:alert:771118243384393729> | je trouve pas le salon **『⛔』log-mod** bro`).then(m => m.delete({timeout: 5000}));
          }
      
          const muted = new Discord.MessageEmbed()
          .setColor("#0c0c0c")
          .setDescription(`
      
<:STAFF:761276865675001856> **${message.author.tag}** à muté ${tomute.user.tag} durant **${mutetime}**.  
pour la raison suivante | **${reason}**
[Today at **${numToDateString(Date.now())}**]
          `)
      
          .setAuthor(`[MUTE] ${member.user.tag}`)
      
          const mutedmp = new Discord.MessageEmbed()
          .setColor("#0c0c0c")
          .setDescription(`
      
<:STAFF:761276865675001856> **${message.author.tag}** vous à muté durant **${mutetime}**.  
pour la raison suivante | **${reason}**
[Today at **${numToDateString(Date.now())}**]
          `)
      
          .setAuthor(`[MUTE] ${member.user.tag} | ${numToDateString(Date.now())}`)

          function numToDateString(num) {
            let date = new Date(num)
            return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
          }
          message.delete().catch()
          mutechannel.send(muted);
      
         
      
      
          (member.roles.add(muterole.id));
          message.channel.send(`<:verifx:766678211781722230> | <@${tomute.id}> has been muted for ${ms(ms(mutetime))}`).then(m => m.delete({timeout: 5000}));
          tomute.send(mutedmp)
      
          setTimeout(function () {
            member.roles.remove(muterole.id);
          }, ms(mutetime));
    
            } catch (err) {
              console.log(err)
            }
        },
      };
      

