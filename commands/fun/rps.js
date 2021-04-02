const Discord = require("discord.js");


module.exports = {
  name: "rps",
  description: "rps",
  aliases: ['rockpaperscissors', 'shufumi'],
  cooldown: 10,

  execute(bot, message, args) {
    try {

    
    
      const errembed = new Discord.MessageEmbed()
      .setColor("#0c0c0c")
      .setDescription(`
**error | permissions bloquées 🚫**
      
impossible d'éxectuer une commande en privé | si vous pensez qu'il s'agit d'une erreur, merci de contacter le développeur [**.about**]
      `)
      .setThumbnail("https://cdn.discordapp.com/attachments/615566066164170799/758002692231790672/654823379928612874.gif")
      
      if (message.channel.type == "dm") return message.author.send(errembed)

      const rps = ['ciseaux','pierre', 'feuille'];
      const res = ['✂️ | ciseaux ',':rock: | pierre', '🀄️ | feuille'];
      
          let userChoice;
          if (args.length) userChoice = args[0].toLowerCase();

          if (!rps.includes(userChoice)) 
            return message.channel.send(`choix | **pierre**, **feuille**, **ciseaux** 
rééxécutez la commande [.rps choix]
            `).then(m => m.delete({timeout: 5000}));
          userChoice = rps.indexOf(userChoice);
          const botChoice = Math.floor(Math.random()*3);
          let result;

          if (userChoice === botChoice) result = 'wow! c\'est une égalité!';
          else if (botChoice > userChoice || botChoice === 0 && userChoice === 2) result = '<:BabyYes:706928422244581396> **Ruusskyy** a gagné!';
          else result = `<:BabyYes:706928422244581396> **${message.member.displayName}** a gagné!`;
          const embed = new Discord.MessageEmbed()
          .setAuthor(`${message.member.displayName} vs. Ruusskyy`, "https://cdn.discordapp.com/attachments/706905565514956940/764493427948650566/592319318780280845.gif")
            .addField(`${message.member.displayName} `, res[userChoice], true)
            .addField('Russkyy', res[botChoice], true)
            .addField('Resultat: ', result)

            .setColor("#0c0c0c");
          
          message.delete().catch()
          message.channel.send(embed);

} catch (err) {
  console.log(err)
}
},
};
