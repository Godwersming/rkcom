const Discord = require("discord.js");
const { deletionTimeout, reactionError, reactionSuccess, pinEmojiId } = require('../../config.json');

const ms = require("ms")

module.exports = {
  name: "unmute",
  description: "the help command, what do you expect?",
  aliases: ['untemp'],
  cooldown: 20,

  execute(bot, message, args) {
    try {


        if (!message.member.hasPermission("BAN_MEMBERS")) {
            return message.channel.send("<nop:766641729901166614> vous avez besoin de la permission `KICK_MEMBERS` pour faire ça!")
                .then(m => m.delete({timeout: 5000}));
        }

        let muterole = message.guild.roles.cache.find(r => r.name === "Muted");

        let tomute = message.mentions.users.first() || client.users.fetch(args[0]);
        const member = message.guild.members.cache.get(tomute.id);
        if (member.hasPermission("KICK_MEMBERS")) {
            return message.channel.send("<nop:766641729901166614> | vous ne pouvez pas le mute!").then(m => m.delete({timeout: 5000}));
        }

       
  if(message.guild.channels.cache.find(x => x.name === "discussion-🌎") && !message.member.hasPermission("MANAGE_MESSAGES")) {
    return message.reply("<:nop:766641729901166614> | vous n'êtes pas autorisés a utiliser des commandes dans ce salon.").then(m => m.delete({timeout: 5000}));
}

  let unmutechannel = message.guild.channels.cache.find(x => x.name === "『⛔』log-mod")
  if (!unmutechannel) {
      return message.channel.send(`<a:alert:771118243384393729> | je trouve pas le salon **『⛔』log-mod** bro`).then(m => m.delete({timeout: 5000}));
  }


        if (!member.roles.cache.some(r => r.name === "Muted"))
            return message.channel.send("<nop:766641729901166614> | cet utilisateur n'est pas muté!").then(m => m.delete({timeout: 5000}));

            const muted = new Discord.MessageEmbed()
            .setColor("#0c0c0c")
            .setDescription(`
        
        <:STAFF:761276865675001856> | successfully unmuted **${tomute}**
        
            `)
        
            .setAuthor(`[UNMUTE] | at ${numToDateString(Date.now())}`)

        function numToDateString(num) {
            let date = new Date(num)
            return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
        }

        (member.roles.remove(muterole.id));
        unmutechannel.send(muted)
        message.channel.send(`<:verifx:766678211781722230> | **${tomute}** a été unmute!`).then(m => m.delete({timeout: 5000}));

    } catch (err) {
        console.log(err)
      }
  },
};


