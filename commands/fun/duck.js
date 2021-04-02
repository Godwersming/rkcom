const Discord = require("discord.js");

const { deletionTimeout, reactionError, reactionSuccess } = require('../../config.json');

const randomPuppy = require('random-puppy');

module.exports = {
    name: "meme",
    description: "gives you a meme",
    cooldown: 85,
    execute(bot, message, args) {

        if (message.author.id !== "430277114504151060") return message.channel.send(
            "⛔️ commande strictement réservée à **Akashii**"
          );

        const subReddits = ["duck", "ducklovers", "DuckMemes",]
        const random = subReddits[Math.floor(Math.random() * subReddits.length)]

        const img = randomPuppy(random);

        const embed = new Discord.MessageEmbed()
        .setColor("#FF5733")
        .setImage("https://cdn.discordapp.com/attachments/706905565514956940/778634569649225748/tenor_4.gif")
        .setDescription(`<a:canard:764820830432788530> C’est la danse des canards! `)

        message.react("🦆")
        message.channel.send(embed);
    }
}