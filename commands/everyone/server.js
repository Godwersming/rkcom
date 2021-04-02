const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js")

module.exports = {
  name: "server",
  description: "server infos",
  aliases: ['serveur', 'infos', 'info'],
  cooldown: 60,

  execute(bot, message, args) {
    try {

      if(message.channel.id !== "777104501298954262") {
        message.delete().catch()
        return message.reply("<:nop:766641729901166614> | vous n'êtes pas autorisés a utiliser des commandes dans ce salon.").then(m => m.delete({timeout: 5000}));
    }
    
      const errembed = new Discord.MessageEmbed()
      .setColor("#0c0c0c")
      .setDescription(`
**error | permissions bloquées 🚫**
      
impossible d'éxectuer une commande en privé | si vous pensez qu'il s'agit d'une erreur, merci de contacter le développeur [**=about**]
      `)
      .setThumbnail("https://cdn.discordapp.com/attachments/615566066164170799/758002692231790672/654823379928612874.gif")
      
      if (message.channel.type == "dm") return message.author.send(errembed)
    
      
    let region;
    switch (message.guild.region) {
      case "europe":
        region = "🇪🇺 Europe";
        break;
      case "us-east":
        region = "🇺🇸 us-east";
        break;
      case "us-west":
        region = "🇺🇸 us-west";
        break;
      case "us-south":
        region = "🇺🇸 us-south";
        break;
      case "us-central":
        region = "🇺🇸 us-central";
        break;
    }

    const embed = new Discord.MessageEmbed()
      .setThumbnail(message.guild.iconURL({ dynamic: true }))
      .setColor("#0c0c0c")
      .setDescription(`** 🛠 RSK Com' Dashboard**`)
      .addFields(
        {
          name: "membres: ",
          value: `**${message.guild.memberCount}** users`,
          inline: true,
        },
        {
          name: "membres online: ",
          value: `**${
            message.guild.members.cache.filter(
              (m) => m.user.presence.status == "online"
            ).size
          }** users online`,
          inline: false,
        },
        {
          name: "boosters: ",
          value:
            message.guild.premiumSubscriptionCount >= 1
              ? `**${message.guild.premiumSubscriptionCount}** boosters 💖`
              : `**aucun** booster 💔`,
          inline: true,
        },
        {
          name: "création:",
          value: message.guild.createdAt.toLocaleDateString("en-us"),
          inline: true,
      
        },
      );
    
    message.delete().catch()
    message.channel.send(embed);
  } catch (err) {
    console.log(err)
  }
  }
}
