const ms = require('ms');
const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js')

module.exports = {
  name: "slowmode",
  description: "the help command, what do you expect?",
  aliases: ['sl', 'slow', 'slowy'],
  cooldown: 0,

  execute(bot, message, args) {
    try {

        
      const currentCooldown = message.channel.rateLimitPerUser;
      const err = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setDescription("<:STAFF:761276865675001856> vous n'avez pas les permissions suffisantes pour effectuer cette commande")

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(err)
        .then(m => m.delete({timeout: 5000}));


      if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('You do not have **MANAGE_CHANNELS** permission!').then(m => m.delete({ timeout: 5000 }));

      if (!args[0]) return message.channel.send(`<:nop:766641729901166614> | vous n\'avez pas précisé le temps! [slowmode: **${currentCooldown}**]`).then(m => m.delete({ timeout: 5000}));


      const reason = args[1] ? args.slice(1).join(' ') : 'no reason';

      if (args[0] === 'off') {

          if (currentCooldown === 0) return message.channel.send('<:nop:766641729901166614> | le slowmode est déjà **off**').then(m => m.delete({ timeout: 5000 }));

          message.channel.send(`<:verif:777537098416390145> | slowmode set on [**${args[0]}**]`)
          return message.channel.setRateLimitPerUser(0, reason)

      }

      const time = ms(args[0]) / 1000;

      if (isNaN(time)) return message.channel.send('<:nop:766641729901166614> | temps **invalid**, please try again!').then(m => m.delete({ timeout: 5000 }));

      if (time >= 21600) return message.channel.send('<:nop:766641729901166614> | le slowmode demandé est trop haut [max:6h]').then(m => m.delete({ timeout: 5000 }));

      if (currentCooldown === time) return message.channel.send(`<:nop:766641729901166614> | valeur du slowmode actuel [**${args[0]}**s]`);

      message.channel.send(`<:verif:777537098416390145> | slowmode set on [**${args[0]}**]`)

      message.channel.setRateLimitPerUser(time, reason).then(m => m.send(embed));
      message.delete().catch()

            } catch (err) {
              console.log(err)
            }
        },
      };
     
