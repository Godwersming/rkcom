const Discord = require('discord.js');

module.exports = {
  name: 'unlock',
  description: 'Allows members with the @everyone role to view/send messages in a specific channel.',
  cooldown: 3,

  execute(bot, message, args) {

    const err = new Discord.MessageEmbed()
    .setColor("#0c0c0c")
    .setDescription("<:STAFF:761276865675001856> vous n'avez pas les permissions suffisantes pour effectuer cette commande")

    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(err)
        .then(m => m.delete({timeout: 5000}));

    if (message.member.hasPermission('MANAGE_CHANNELS')) {
      if (!args[0] || !args[1]) {
        
        const lockEmbed = new Discord.MessageEmbed()

        .setDescription(`
<:terminal:766641730740420638> **available** | **send** & **view**
**.unlock [#channel-name/channel_id] <lock-mode>**
        `)
        .setColor("#0c0c0c");
      return message.channel.send(lockEmbed).then(m => m.delete({ timeout: 5000 }));
      }

      const channel = bot.channels.cache.get(args[0]) || bot.channels.cache.get(args[0].match(/<#(\w+)>/)[1]);

      let unmutechannel = message.guild.channels.cache.find(x => x.name === "『⛔』log-mod")
      if (!unmutechannel) {
          return message.channel.send(`<a:alert:771118243384393729> | je trouve pas le salon **『⛔』log-mod** bro`).then(m => m.delete({timeout: 5000}));
      }

      if (args[1] === 'send') {
        if(channel.permissionsFor(message.guild.roles.everyone).has('SEND_MESSAGES')) {
          const errorEmbed = new Discord.MessageEmbed()
            .setDescription(`<:nop:766641729901166614> | permissions [everyone] déjà bloquées dans ${channel.name}`)
            .setColor("#0c0c0c");
          message.channel.send(errorEmbed).then(m => m.delete({ timeout: 5000 }))
        }
        else {
          channel.updateOverwrite(message.guild.roles.everyone, { SEND_MESSAGES: null }).then(() => {
            const msgEmbed = new Discord.MessageEmbed()
              .setDescription(`<:verif:777537098416390145> ${channel.name} unlocked | type **${args[1]}**`)
              .setColor("#0c0c0c");
            message.channel.send(msgEmbed).then(m => m.delete({ timeout: 5000 }))
          }).catch((error) => {
            console.log(error);
            const errorEmbed = new Discord.MessageEmbed()
            .setDescription(`<:nop:766641729901166614> | je n'arrive pas à lock le salon **${channel.name}**`)
            .setColor('#FFD800');
          unmutechannel.send(errorEmbed)
          });
        }
      }
      if (args[1] === 'view' || args[1] === 'read') {
        if(channel.permissionsFor(message.guild.roles.everyone).has('VIEW_CHANNEL')) {
          const errorEmbed = new Discord.MessageEmbed()
            .setDescription(`<:nop:766641729901166614> | permissions [everyone] déjà bloquées dans ${channel.name}`).then(m => m.delete({ timeout: 5000 }))
            .setColor("#0c0c0c");
          message.channel.send(errorEmbed).then(m => m.delete({ timeout: 5000 }))
        }
        else {
          channel.updateOverwrite(message.guild.roles.everyone, { VIEW_CHANNEL: null }).then(() => {
            const msgEmbed = new Discord.MessageEmbed()
              .setDescription(`<:verif:777537098416390145> | ${channel.name} unlocked | type **${args[1]}**`).then(m => m.delete({ timeout: 5000 }))
              .setColor("#0c0c0c");
            message.channel.send(msgEmbed).then(m => m.delete({ timeout: 5000 }))
          }).catch((error) => {
            console.log(error);
            const errorEmbed = new Discord.MessageEmbed()
            .setDescription(`<:nop:766641729901166614> | je n'arrive pas à lock le salon **${channel.name}**`)
            .setColor('#FFD800');
          unmutechannel.send(errorEmbed);
          });
        }
      }
    }
    else {
      const warningEmbed = new Discord.MessageEmbed()
        .setDescription('sorry')
        .setColor('#FFD800');
      message.channel.send(warningEmbed);
    }
  },
};
