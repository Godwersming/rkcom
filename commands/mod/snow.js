const Discord = require("discord.js");

module.exports = {
  name: "snow",
  description: "the help command, what do you expect?",
  aliases: ['snowball', 'bdn'],
  cooldown: 15,

  execute(bot, message, args) {
      try {

        let password = [
          'glacée',
          'molle',
          'froide',
          'fraîche',
          'givrée',
        ]

        let randomPassword = password[Math.floor(Math.random() * password.length)];
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username === args.slice(0).join(" ") || x.user.username === args[0]) || message.guild.members.cache.find((user) => user.user.username === `${args[0]}` || user.nickname === `${args[0]}`)

        if (!member) return message.channel.send("<:nop:766641729901166614> | mentionne quelqu'un").then(m => m.delete({timeout: 5000}));
        if (!args[0]) return message.channel.send("<:nop:766641729901166614> | mentionne quelqu'un").then(m => m.delete({timeout: 5000}));

          const ball = new Discord.MessageEmbed()

          .setColor("#FFDFF0")
          .setAuthor(`Merry Christmas! ${member.user.tag}`, member.user.displayAvatarURL())
          .setDescription(`
**${message.author}** viens de jeter une boule de neige <a:snowww:784899307333222421> ${randomPassword} en direction de **${member}**
sa douleur est actuellement de **${Math.floor(Math.random() * 10) + 1}/10** | bien visé! <a:event:784895982369636412> <a:event2:784900355883532318>
          `)
          .setThumbnail("https://cdn.discordapp.com/attachments/706905565514956940/784898350989967370/giphy_4.gif")

          message.delete().catch()
          message.channel.send(ball)
    } catch (err) {
        console.log(err)
      }
    },
    };
    
