const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js")

module.exports = {
  name: "ping",
  description: "measures bot answer",
  aliases: ['ping'],
  cooldown: 10,
  execute(bot, message, args) {
    try {

      if (message.channel.type == "dm") return message.author.send(`
**error | permissions bloquées 🚫**
          `)

      message.channel.send(`**loading**`).then((msg) => {
        const _ = new MessageEmbed() 
          .setColor("#0c0c0c")
          .addFields(
            {
              name: "**bot:**",
              value: `${Date.now() - message.createdTimestamp}` + " ms",
              inline: true,
            },
            {
              name: "**api:**",
              value: `${Math.round(bot.ws.ping)}` + " ms",
              inline: true,
            }
          )
        msg.edit(_);
        msg.edit("\u200B").catch();
      });
    } catch (err) {
      return;
    }
  },
};
