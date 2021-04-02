const Discord = require('discord.js');
const moment = require('moment');

module.exports = {
  name: 'user',
  aliases: ['userinfo', 'user', 'ui'],
  description: 'Provides some info on the specified user.',
  cooldown: 10,
  execute(bot, message, args) {

    function numToDateString(num) {
        let date = new Date(num)
        return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
      }
  

    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username === args.slice(0).join(" ") || x.user.username === args[0]) || message.guild.members.cache.find((user) => user.user.username === `${args[0]}` || user.nickname === `${args[0]}`)

    if (args.length > 1) return message.channel.send("<:nop:766641729901166614> | [**err**] mentionne un seul utilisateur");
    if (!member) {
      return message.channel.send(`<:nop:766641729901166614> | merci de joindre un utilisateur!`)
      
    }
    else {
        if (member) {
      const roles = member.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString()).slice(0, -1);
        const tn = new Discord.MessageEmbed()
        .setColor(message.member.displayColor)
        .setAuthor(
          `[INFOS] ${member.user.tag}`,
          `${member.user.displayAvatarURL({
            dynamic: true,
            size: 4096,
          })}`
        )
        .setDescription(`
**Utilisateur:** ${member.displayName}
**Requested:** ${message.author}
[Today at **${numToDateString(Date.now())}**]
        `)
        .addField(`created:`, `${moment(member.user.createdTimestamp).format('MMMM D YYYY')}`)
        .addField(`joined:`, `${moment(member.joinedAt).format('MMMM D YYYY')}`)
        .addField(`roles [${roles.length}]:`, `${roles.length ? roles.join(', ') : 'None'}`)
        .setThumbnail(`${member.user.displayAvatarURL({
            dynamic: true,
            size: 4096,
          })}`)
    
      message.channel.send(tn);
        }
    }
  },
};
