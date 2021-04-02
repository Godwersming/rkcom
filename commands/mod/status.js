const Discord = require("discord.js");
module.exports = {
    name: "status",
    description: "the status command, what do you expect?",
    aliases: ['name', 'st'],
    cooldown: 10,

    execute(bot, message, args) {
        try {
            bot.user.setActivity("Lives de Ruusskov !", {
                type:"WATCHING",
                           });


        } catch (err) {
            console.error(err);
        }
    },
}