
const Discord = require("discord.js");

module.exports = {
  name: "faq",
  description: "faq",
  aliases: ['fq'],
  cooldown: 20,

  execute(bot, message, args) {
    try {

        if(message.guild.channels.cache.find(x => x.name === "discussion-🌎") && !message.member.hasPermission("MANAGE_MESSAGES")) {
            message.delete().catch()
            return message.reply("<:nop:766641729901166614> | vous n'êtes pas autorisés a utiliser des commandes dans ce salon.").then(m => m.delete({timeout: 5000}));
        }
        
        const errembed = new Discord.MessageEmbed()
        .setColor("#0c0c0c")
        .setDescription(`
**error | permissions bloquées 🚫**
        
impossible d'éxectuer une commande en privé | si vous pensez qu'il s'agit d'une erreur, merci de contacter le développeur [**.about**]
        `)
        .setThumbnail("https://cdn.discordapp.com/attachments/615566066164170799/758002692231790672/654823379928612874.gif")
        
        if (message.channel.type == "dm") return message.author.send(errembed)
    
            message.delete().catch();
    
            const embed0 = new Discord.MessageEmbed()
    
                .setDescription(`**merci de spécifier un numéro**

**1/** FAQ 1 - **Responsabilités**
**2/** FAQ 2 - **Lives et Vidéos**
**3/** FAQ 3 - **Sponsors**
**4/** FAQ 4 - **Avantages**
**5/** FAQ 5 - **Recrutement**

                `)
                .setColor("#0c0c0c")
                .setTimestamp()
                .setFooter("FAQ 0 - NoArgs")
    
    
            if (!args[0]) return message.channel.send({ embed: embed0 });
    
            const embed1 = new Discord.MessageEmbed()
                .setDescription(`**comment obtenir des responsabilités sur le serveur ?**
il vous suffit d'attendre un recrutement pour le rôle en question.
par exemple, le recrutement des Modérateurs Discord est géré par le Responsable Modérateur, qui annoncera un recrutement dans le salon **#📣-annonces-admins **`)
                .setColor("#0c0c0c")
                .setTimestamp()
                .setFooter("FAQ 1 - ServerMod")
    
    
            if (args[0] == "1") return message.channel.send({ embed: embed1 });
    
            const embed2 = new Discord.MessageEmbed()
    
                .setDescription(`**quand est-ce que Ruusskov live ?**
nous ne sommes pas toujours au courant lorsque Ruusskov lance un live.
nous essayons de prévoir, mais ce n'est pas toujours exact. 
en général, un live est effectué tout les deux jours.

des **webhooks** pour les salons **#annonces-lives-⭕** et **#annonces-vidéos-🎥** sont disponibles, n'hésitez pas à les ajouter à vos serveurs !

                `)
                .setColor("#0c0c0c")
                .setTimestamp()
                .setFooter("FAQ 2 - WhenLive")
    
            if (args[0] == "2") return message.channel.send({ embed: embed2 });
    
            const embed3 = new Discord.MessageEmbed() // remplacer EmbedX
            .setDescription(`**instructions sponsors**
1/ allez dans **Paramètres Utilisateur** puis dans **Connexions**

2/ appuyez sur **Ajouter** puis sur **Youtube**
           
3/ selectionnez votre compte Google [associé à YouTube]
           
 4/ attendez quelques minutes que le rôle sponsor se mette automatiquement *[jusqu'à quelques heures]*
           
/ vous pouvez envoyer votre **lien d'ami facebook** dans **#liens-sponsors**. Ruusskov passera dans le salon pour accepter vos demandes.
            
si des questions persistent, le **@Responsable Sponsors** est ouvert à vos questions
            `)
            .setImage("https://cdn.discordapp.com/attachments/615562532945395713/755782832907092098/20200916_153044.jpg")
            .setColor("#0c0c0c")
            .setTimestamp()
            .setFooter("FAQ 3 - Sponsors")


        if (args[0] == "3") return message.channel.send({ embed: embed3 });

        const embed4 = new Discord.MessageEmbed() 
                .setDescription(`**quels sont les avantages des rôles d'expériences ?**

**@Membre** s'obtient au level 5, **pseudo en couleur.**
**@Abonné** disponible au level 10. **utilisation d'émotes externes.**
**@Habitué** disponible au level 15.
**@Actif** disponible au level 20. **possibilité de la commande say**

**@Addict** disponible au level 30.
**@AccrᎧ** disponible au level 40, **possibilité de changement de pseudo.**
**@ɴᴏ ʟɪꜰᴇ** disponible au level 50.
**@𝖆𝖓𝖈𝖎𝖊𝖓** disponible au level 60, **salon privé.**

**𝟔𝐍𝐢𝐜𝐞𝟗** disponible au level 69 <a:Gy:700681784186110084>
**@𝖒𝖆𝖘𝖙𝖊𝖗** disponible au level 70.
**@𝕷𝖊𝖌𝖊𝖓𝖉𝖆𝖗𝖞** disponible au level 80.
**@𝕴𝖒𝖒𝖔𝖗𝖙𝖊𝖑** disponible au level 90.
**@ɢᴏᴅ** disponible au level 100.
                `)
                .setColor("#0c0c0c")
                .setTimestamp()
                .setFooter("FAQ 4 - Avantages")
    
    
            if (args[0] == "4") return message.channel.send({ embed: embed4 });

            const embed5 = new Discord.MessageEmbed() 
            .setDescription(`**comment rejoindre les clans de la communauté de Ruusskov ?**

il existe huit clans dans notre communauté: 

1/ **@FFR-Tidus** à partir de **6300** trophées
2/ **@FFR-Spira** à partir de **6200** trophées
3/ **@FFR-Auron** à partir de **5600** trophées
4/ **@FFR-Yuna** à partir de **5300** trophées 
5/ **@FFR-Wakka** à partir de **5200** trophées 
6/ **@FFR-Lulu** à partir de **5000** trophées 
7/ **@FFR-Rikku** à partir de **4600** trophées


il suffit de se rendre dans le salon **#recrutements-ffr-🛎** poster un screen de votre saison précédente et nombre de trophées actuels
nos **@🔗 | Recruteurs FFR** s'occuperont de vous afin de vous indiquer le clan le plus adapté à votre niveau de jeu !

            `)
            .setColor("#0c0c0c")
            .setThumbnail("https://cdn.discordapp.com/attachments/706909996180570133/756520205701611680/rIvZQ_H3hfmexC8vurmLczLtMNBFtxCEdmb2NwkSPz2ZuJJ5nRPD0HbSJ7YTyFGdADQ.png")
            .setTimestamp()
            .setFooter("FAQ 5 - Recrutement")

            if (args[0] == "5") return message.channel.send({ embed: embed5 });

            const embed6 = new Discord.MessageEmbed()
            .setColor("#0c0c0c")
            .setDescription(`
Vous souhaitez faire parvenir une idée aux administrateurs ? Vous avez un projet en tête ? le salon **#suggestions-📯** est fait pour ça. 
Rien de plus simple! Il suffit de suivre ces quelques indications et vous serez prêt afin de nous partager votre projet.
Il est important de connaître la commande [\`.suggest\`]
            
Après avoir saisi la commande, marquez votre suggestion. Le message se supprimera automatiquement et la suggestion apparaitra.
           
**Exemple** .suggest il faudrait un nouveau salon sur ...            
<:faq:770391445537292350> **ATTENTION:** Tout message troll sera sanctionné sévèrement.           
Merci d'avoir suivi ces lignes et bonne rédaction !
                       
            `)
            .setFooter("FAQ 6 - Suggests")
            .setTimestamp()

            if (args[0] == "6") return message.channel.send({ embed: embed6 });
        } catch (err) {
            return;
          }

        }
    }
