const Discord = require("discord.js");

module.exports = {
  name: "mp",
  description: "the help command, what do you expect?",
  aliases: ['dm'],
  cooldown: 10,

  execute(bot, message, args) {

    const errembed = new Discord.MessageEmbed()
    .setColor("#0c0c0c")
    .setDescription(`
**error | permissions bloquées 🚫**
    
impossible d'exectuer cette commande en privé, si vous pensez qu'il s'agit d'une erreur, merci de contacter le développeur [**.about**]
    `)
    .setThumbnail("https://cdn.discordapp.com/attachments/615566066164170799/758002692231790672/654823379928612874.gif")
    
    if (message.channel.type == "dm") return message.author.send(errembed)

    const err = new Discord.MessageEmbed()
    .setColor("#0c0c0c")
    .setDescription("<:STAFF:761276865675001856> vous n'avez pas les permissions suffisantes pour effectuer cette commande")

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.channel.send(err)

    if(message.member.hasPermission("MANAGE_MESSAGES")) {

        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username === args.slice(0).join(" ") || x.user.username === args[0])
        if(!member) return message.channel.send(`votre syntaxe est incorrecte [.mp @user message]`)
        let arg = message.content.split(" ").slice(2);
        let content_msg = arg.join(" ");

        if(!args[0]) return message.channel.send(`votre syntaxe est incorrecte [.mp @user message]`);

        if(!args[1]) return message.channel.send("saississez un message à envoyer")

        const mp = new Discord.MessageEmbed()
        .setColor("#0c0c0c")
        .setDescription(`
**<:tick:766652983098212353> ${message.author.tag} vous a écrit :**
*notification envoyée par l'équipe de modération*

${content_msg}

`)

member.send(mp)

message.author.send(`Votre message privé a bien été envoyé à **${member.user.tag}**`)
message.delete().catch();
    }
}}