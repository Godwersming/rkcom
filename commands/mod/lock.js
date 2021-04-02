const Discord = require('discord.js');

module.exports = {
  name: 'lock',
  description: 'Prevents members with the @everyone role from viewing/sending messages in a specific channel.',
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
**.lock [#channel-name/channel_id] <lock-mode>**
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
        if (!channel.permissionsFor(message.guild.roles.everyone).has('SEND_MESSAGES')) {
          const errorEmbed = new Discord.MessageEmbed()
            .setDescription(`<:nop:766641729901166614> | permissions [everyone] déjà bloquées dans ${channel.name}`)
            .setColor("#0c0c0c");
          return message.channel.send(errorEmbed);
        }
        else {
          channel.updateOverwrite(message.guild.roles.everyone, { SEND_MESSAGES: false }).then(() => {
            const msgEmbed = new Discord.MessageEmbed()
              .setDescription(`${channel.name} locked | type **${args[1]}**
              
<:warning:772121250780545044> **everyone** | vous n'êtes pas mute, un membre du staff à **lock** ce salon.
merci de bien vouloir éviter le spam dans les messages privés de notre équipe.
              `)
              .setColor("#0c0c0c");
            channel.send(msgEmbed);
          }).catch((error) => {
            console.log(error);
            const errorEmbed = new Discord.MessageEmbed()
              .setDescription(`<:nop:766641729901166614> | je n'arrive pas à lock le salon **${channel.name}**`)
              .setColor("#0c0c0c");
            unmutechannel.send(errorEmbed);
          });
        }
      }
      if (args[1] === 'view' || args[1] === 'read') {
        if (!channel.permissionsFor(message.guild.roles.everyone).has('VIEW_CHANNEL')) {
          const errorEmbed = new Discord.MessageEmbed()
            .setDescription(`<:nop:766641729901166614> | permissions [everyone] déjà bloquées dans ${channel.name}`)
            .setColor("#0c0c0c");
          return message.channel.send(errorEmbed);
        }
        else {
          channel.updateOverwrite(message.guild.roles.everyone, { VIEW_CHANNEL: false }).then(() => {
            const msgEmbed = new Discord.MessageEmbed()
              .setDescription(`${channel.name} locked | type **${args[1]}**
permissions everyone denied | n'ont plus accès au salon
              `)
              .setColor("#0c0c0c");
            channel.send(msgEmbed);
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
