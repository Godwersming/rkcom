const pagination = require("discord.js-pagination");
const Discord = require("discord.js");

module.exports = {
    name: "mod",
    description: "the help command, what do you expect?",
    aliases: ['hm', 'helpmodo'],
    cooldown: 60,

  execute(bot, message, args, perms) {
    try {

      const errembed = new Discord.MessageEmbed()
      .setColor("#0c0c0c")
      .setDescription(`
**error | permissions bloquées 🚫**
      
impossible d'éxectuer une commande en privé | si vous pensez qu'il s'agit d'une erreur, merci de contacter le développeur [**.about**]
      `)
      .setThumbnail("https://cdn.discordapp.com/attachments/615566066164170799/758002692231790672/654823379928612874.gif")
      
      if (message.channel.type == "dm") return message.author.send(errembed)

      const err = new Discord.MessageEmbed()
      .setColor("#0c0c0c")
    .setDescription("<:STAFF:761276865675001856> vous n'avez pas les permissions suffisantes pour effectuer cette commande")

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.channel.send(err).then(m => m.delete({timeout: 5000}));
      
    const help = new Discord.MessageEmbed()
      .setAuthor("Head Developper: JordanGarrist#1213", "https://images-ext-2.discordapp.net/external/FWDfSkvTrbC3yJa3xev3UkGH3nPiHcbGJAkHoUtia24/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/523532144635543572/f4dc56b3697ee5d5a547c7d54eb51eb3.webp?width=665&height=665")
      .setThumbnail(`${message.author.displayAvatarURL({
        dynamic: true,
      })}`)
      .setColor("#0c0c0c")
      .setDescription(`Commandes de Modération.
  pour tout problème, s'adresser à **JordanGarrist#1213**
  informations: **.about**
  **lock et unlock add**
      `)
      .addField("**say**", "say things",true )
      .addField("**rules**", "affiche les règles", true)
      .addField("**clear**", "clear messages", true)
      .addField("**poll**", "sondages", true)
      .addField("**mp**", "bot dm un user", true)
      .addField("**warn**", "permet d'avertir user")
      .addField("**infractions**", "regarde les infractions user")
      .addField("**warnremove**", "enlève un warn user")
      .setFooter("cooldown: 60s / alias: hm")
  
      const embedcd = new Discord.MessageEmbed()

.setAuthor("Head Developper: JordanGarrist#1213", "https://images-ext-2.discordapp.net/external/FWDfSkvTrbC3yJa3xev3UkGH3nPiHcbGJAkHoUtia24/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/523532144635543572/f4dc56b3697ee5d5a547c7d54eb51eb3.webp?width=665&height=665")
.setDescription(`voici tout les **cooldowns** et les **alias** appliqués sur les commandes
toutes les commandes de modération sont protégées et aucun cooldown n'est appliqué dessus
      `)

.addField("**user**", `cooldown: **10s** / alias: **ui**`, true)
      .addField("**say**", "cooldown: **0s** / alias: **dit**", true)
      .addField("**rules**", "cooldown: **0s** / alias: **rl**", true)
      .addField("**clear**", "cooldown: **0s** / alias: **cl**", true)
      .addField("**poll**", "cooldown: **2m** / alias: **pl | sond**", true)
      .addField("**mp**", "cooldown: **10s** / alias: **dm**", true)
      .addField("warn", "cooldown: **10s** / alias: <:nop:766641729901166614>", true)
      .addField("**warnrem**", "cooldown: **10s** / alias: **wr**", true)
      .addField("**infractions**", "cooldown: **20s** / alias: **inf**", true)

.setColor("#FF0000")

message.delete().catch()
message.author.send(help)
message.author.send(embedcd)

const send = new Discord.MessageEmbed()
  .addField(
      
    `**Staff: ${message.author.tag}**`
  , "message d'aide envoyé :gear:", 

)
  .setColor("#FF0000")
  
message.channel.send(send);

  } catch (err) {
    console.log(err)
  }
},
};
