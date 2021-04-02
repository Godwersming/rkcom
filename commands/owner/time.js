
const { MessageEmbed } = require('discord.js');
const moment = require('moment');
const Discord = require('discord.js')

module.exports = {
    name: "time",
    description: "the help command, what do you expect?",
    aliases: ['t', 'tm'],
  cooldown: 86400,
  
    execute(bot, message, args) {
        try {

          if (message.channel.type == "dm") return message.author.send(`
**error | permissions bloquées 🚫**
il s'agit d'une commande strictement réservée au développeur.
              `)
 if (message.author.id !== "523532144635543572") return message.channel.send(
"<:STAFF:761276865675001856> commande strictement réservée au développeur"
                );

    const d = moment.duration(message.client.uptime);
    const days = (d.days() == 1) ? `${d.days()} day` : `${d.days()} days`;
    const hours = (d.hours() == 1) ? `${d.hours()} hour` : `${d.hours()} hours`;
    const minutes = (d.minutes() == 1) ? `${d.minutes()} minute` : `${d.minutes()} minutes`;
    const seconds = (d.seconds() == 1) ? `${d.seconds()} second` : `${d.seconds()} seconds`;
    const date = moment().subtract(d, 'ms').format('dddd, MMMM Do YYYY');
    const embed = new MessageEmbed()
      .setTitle('RSK Community Uptime')
      .setThumbnail('https://cdn.discordapp.com/attachments/706914922197418114/758229300604043294/118886193_935904373553506_8853069749070254411_n_001_001_001_1.gif')
      .setDescription(`\`\`\`prolog\n${days}, ${hours}, ${minutes}, and ${seconds}\`\`\``)
      .addField('Date Launched | **© Jordan Anderson**', date) 
      .setColor("#0c0c0c")
    message.channel.send(embed);
} catch (err) {
    console.log()
  }
  }}