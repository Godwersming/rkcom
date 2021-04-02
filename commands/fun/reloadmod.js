const Discord = require("discord.js");

module.exports = {
  name: "reloadfun",
  description: "the help command, what do you expect?",
  aliases: ['restart', 'rlf'],
  cooldown: 10,

  execute(bot, message, args) {
      try {

        if (message.author.id !== "523532144635543572") return message.channel.send(
          "<:STAFF:761276865675001856> commande strictement réservée au développeur"
        );
        
        if(!args || args.length < 1) return message.reply("must provide a command name to reload.");
  const commandName = args[0];
  // Check if the command exists and is valid
  if(!bot.commands.has(commandName)) {
    return message.reply("that command does not exist");
  }
  // the path is relative to the *current folder*, so just ./filename.js
  delete require.cache[require.resolve(`./${commandName}.js`)];
  // We also need to delete and reload the command from the client.commands Enmap
  bot.commands.delete(commandName);
  const props = require(`./${commandName}.js`);
  bot.commands.set(commandName, props);
  message.reply(`<:verif:777537098416390145> | the command **${commandName}** has been reloaded`);

} catch (err) {
    console.log(err)
  }
},
};

