const Discord = require("discord.js");

module.exports = {
  name: "rules",
  description: "dispatch rules",
  aliases: ['rl', 'rls', 'r'],
  cooldown: 0,

  execute(bot, message, args) {
    try {
      
        const errembed = new Discord.MessageEmbed()
        .setColor("#0c0c0c")
        .setDescription(`
  **error | permissions bloquées 🚫**
        
  impossible d'éxectuer une commande en privé | si vous pensez qu'il s'agit d'une erreur, merci de contacter le développeur [**=about**]
        `)
        .setThumbnail("https://cdn.discordapp.com/attachments/615566066164170799/758002692231790672/654823379928612874.gif")
        
        if (message.channel.type == "dm") return message.author.send(errembed)
        
        const err = new Discord.MessageEmbed()
        .setColor("#0c0c0c")
        .setDescription("<:STAFF:761276865675001856> vous n'avez pas les permissions suffisantes pour effectuer cette commande")
    
        if (!message.member.hasPermission("MANAGE_MESSAGES"))
        return message.channel.send(err)
    
            message.delete().catch();
    
            const embed0 = new Discord.MessageEmbed()
    
                .setDescription(`**merci de spécifier un numéro**

**1/** Règle 1 - **Pseudonymes**
**2/** Règle 2 - **Respect et Insultes**
**3/** Règle 3 - **Contenu Réglementé**
**4/** Règle 4 - **Publicité**
**5/** Règle 5 - **Contournements**
**6/** Règle 6 - **Autres**

Respect des TOS de Discord : https://discord.com/terms

                `)
                .setColor("#0c0c0c")
                .setTimestamp()
                .setFooter("Rule 0 - NoArgs")
    
    
            if (!args[0]) return message.channel.send({ embed: embed0 });
    
            const embed1 = new Discord.MessageEmbed()
                .setDescription(`__**Règle 1: pseudonymes:**__

les pseudonymes insultants, dénigrants et inappropriés sont interdits sur le serveur. L'usurpation d'identité est aussi interdite.
**Remarque:** si votre pseudo contient des caractères spéciaux qui rendent la mention impossible nous nous réservons le droit de vous rename selon vos indications.`)
                .setColor("#0c0c0c")
                .setTimestamp()
                .setFooter("Règle 1 - Pseudos")
    
    
            if (args[0] == "1") return message.channel.send({ embed: embed1 });

            const embed2 = new Discord.MessageEmbed()
                .setDescription(`__**Règle 2: le respect:**__

les insultes sont prohibées sur le serveur, toutes formes de provocations, discriminations ou autres remarques déplacées sont très sévèrement sanctionnés. Le second degré n'est pas pris en compte. L'homophobie et le jugement sur chacun est aussi sanctionné.
`)
                .setColor("#0c0c0c")
                .setTimestamp()
                .setFooter("Règle 2 - Respect")
    
    
            if (args[0] == "2") return message.channel.send({ embed: embed2 });

            const embed3 = new Discord.MessageEmbed()
                .setDescription(`__**Règle 3: contenu réglementé:**__

la présence de personnes jeunes nous oblige a réglementer le contenu. de ce fait, les emojis NSFW ainsi que les images et les photos de profils choquants et/ou a caractère sexuel ou violent seront immédiatement bannis après un avertissement ignoré.
    `)
                .setColor("#0c0c0c")
                .setTimestamp()
                .setFooter("Règle 3 - Contenu Réglementé")
    
    
            if (args[0] == "3") return message.channel.send({ embed: embed3 });

            const embed4 = new Discord.MessageEmbed()
            .setDescription(`__**Règle 4: publicité**__

la publicité de chaines YouTube, Twitch ainsi que tout réseau social est interdite. 
concernant **Discord**, la publicité de serveurs en privé ou non est sanctionnée uniquement la personne n'a que ce serveur en commun avec vous.
`)
            .setColor("#0c0c0c")
            .setTimestamp()
            .setFooter("Règle 4 - Publicité")


        if (args[0] == "4") return message.channel.send({ embed: embed4 });

        const embed5 = new Discord.MessageEmbed()
            .setDescription(`__**Règle 5: contournements:**__

il est interdit de demander à n'importe quel membre du staff une réduction ou une annulation d'une sanction, cela entrainera simplement un doublement immédiat de cette sanction. Le contournement de "banwords" est interdit et se soldera d'un avertissement.
    
`)
            .setColor("#0c0c0c")
            .setTimestamp()
            .setFooter("Règle 5 - Contournements")


        if (args[0] == "5") return message.channel.send({ embed: embed5 });

        const embed6 = new Discord.MessageEmbed()
            .setDescription(`__**Règle 6: Autres:**__
            
le dévoilement d'informations privées sans l'accord préalable du propriétaire de ses informations sera sanctionné très sévèrement, le spoil ainsi que le fake spoil sont interdit. 

❌ le trafic de comptes Clash Royale ou tout autre compte affilié Supercell se solde d'un ban définitf du serveur.
l'évocation ou la proposition de vente est elle aussi sanctionnée.

les langues autorisées sur le serveur sont le français :flag_fr:  et l'anglais :flag_gb: 
lien permanent du serveur: https://discord.gg/ruusskov
`)
            .setColor("#0c0c0c")
            .setTimestamp()
            .setFooter("Règle 6 - Autres")


        if (args[0] == "6") return message.channel.send({ embed: embed6 });
    } catch (err) {
        return;
      }
  }
}
