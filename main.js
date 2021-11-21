const Discord = require('discord.js');
const config = require('./config.json');
const fs = require('fs');


const prefix = config.PREFIX

const bot = new Discord.Client({
  disableEveryone: true
});
bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  bot.commands.set(command.name, command);
}

fs.readdir("./commands/everyone/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/everyone/${file}`);
    let commandName = file.split(".")[0];
    bot.commands.set(commandName, props);
  });
});

fs.readdir("./commands/mod/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/mod/${file}`);
    let commandName = file.split(".")[0];
    bot.commands.set(commandName, props);
  });
});

fs.readdir("./commands/fun/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/fun/${file}`);
    let commandName = file.split(".")[0];
    bot.commands.set(commandName, props);
  });
});


fs.readdir("./commands/owner/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/owner/${file}`);
    let commandName = file.split(".")[0];
    bot.commands.set(commandName, props);
  });
});

const cooldowns = new Discord.Collection();

bot.on('ready', () => {
  console.log(`⤯ ${bot.user.tag} ready
⤰ © Jordan Anderson
  `);
})

bot.on('message', message => {

  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const commandName = args.shift().toLowerCase();

  const command = bot.commands.get(commandName) ||
    bot.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

  if (!command) return;

  const errembed = new Discord.MessageEmbed()
  .setColor("#FF0000")
  .setDescription(`
**error | permissions bloquées 🚫**
  
impossible d'éxectuer une commande en privé | si vous pensez qu'il s'agit d'une erreur, merci de contacter le développeur [**.about**]
  `)
  .setThumbnail("https://cdn.discordapp.com/attachments/615566066164170799/758002692231790672/654823379928612874.gif")
  
  if (command.guildOnly && message.channel.type === 'dm') {
    return message.reply(errembed);
  }

  if (command.reqPermissions) {
    command.reqPermissions.map(p => {
      if (!message.guild.members.get(message.author.id).hasPermission(p)) {
        return message.channel.send("vous n'avez pas les permissons requises" + p);
      }
    })
  }
  const activities_list = [
    "lives de Ruusskov !",
    "vidéos de Ruusskov !",
  ];
  
  require('events').EventEmitter.defaultMaxListeners = 400;
  
  setInterval(() => {
    const LOOOOOOL = Math.floor(Math.random() * (activities_list.length - 1) + 1);
    bot.user.setActivity(`${activities_list[LOOOOOOL]}`, { type: 3 });
  }, 100000);

  if (!cooldowns.has(command.name)) {
    cooldowns.set(command.name, new Discord.Collection());
  }

  const now = Date.now();
  const timestamps = cooldowns.get(command.name);
  const cooldownAmount = (command.cooldown || 3) * 1000;

  if (!timestamps.has(message.author.id)) {
    timestamps.set(message.author.id, now);
    setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
  } else {
    const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

    if (now < expirationTime && !config.staff.includes(message.author.id)) {
      const timeLeft = (expirationTime - now) / 1000;
      return message.channel.send(`**Cooldown** | merci de patienter **${timeLeft.toFixed(1)}** seconde(s) avant de réutiliser cette commande [\`${command.name}\`]`).then(m => m.delete({timeout: 5000}));
    }

    timestamps.set(message.author.id, now);
    setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
  }

  try {
    command.execute(bot, message, args);
  } catch (err) {
    console.error(`erreur d'éxécution: ${err}`);
    message.channel.send("**uh.. a problem occurred** | " + `${err}
[on \`${command.name}\`] | **.about**
    `)
  }
});

bot.on("guildMemberAdd", member => {
    const welcomeChannel = member.guild.channels.cache.find(channel => channel.name === '『🎄』discussion-festive')
    welcomeChannel.send (`Welcome! ${member}`)
})

bot.login("XXX")
