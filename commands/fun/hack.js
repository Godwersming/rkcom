const Discord = require("discord.js");


module.exports = {
  name: "hack",
  description: "the help command, what do you expect?",
  aliases: ['hack'],
  cooldown: 60,

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

          let password = [
          'password',
          '12345678',
          'incorrect',
          'gayestofthemall',
          'gardenissmart',
          'gayestboi',
          'hydrozz le plus beau'
          ]
          let dm = [
          'i love Wejdene :heart:',
          'eeeeee',
          'yeet',
          'poryafm12 is hot',
          'hydrozz le plus beau',
          'j\'espère que personne ne m\'a vu manger des cookies!',
          'wow c\'est petit',
          'ce bot est nul',
          'pepe',
          '<:HeheBoi:707524484650762242>'
          ]
          let domain =[
          'gmail.com',
          'yahoo.com',
          'msn.com',
          'hotmail.com'
          ]
          let email = [
          'isgay',
          'loveswejdene',
          'isnotbeaugosse',
          'damn',
          ]
          let ip = ['153.213.177.72','2.17.161.149','165.17.130.81','78.144.220.112','101.105.148.246','40.57.65.227','67.136.197.20'
          ,'187.80.239.11','204.48.20.44','140.117.141.251','59.234.133.205','162.76.240.85','238.163.1.197','90.95.215.99','9.210.105.248',
          '65.141.50.205','134.200.165.134','175.82.24.222','135.29.155.155','88.252.102.8','202.184.208.213','206.153.130.128',
          '254.244.80.21','231.232.27.192','95.124.196.4','143.180.98.217','78.146.91.202','253.225.72.73','186.73.41.34',
          '132.43.253.11','174.139.18.109','120.103.113.6','161.212.8.160','92.82.87.93','198.16.47.17','161.134.222.23','131.161.184.131',
          '135.174.199.47','43.190.193.93','197.232.0.35','42.83.91.92','150.32.127.46','83.23.199.66','87.40.202.95',
          '207.201.23.91','46.178.184.136','135.229.100.182','149.33.185.59','131.168.67.104','34.29.88.113']
          let randomPassword = password[Math.floor(Math.random() * password.length)];
          let randomDM = dm[Math.floor(Math.random() * dm.length)];
          let randomIP = ip[Math.floor(Math.random()*ip.length)];
          let randomEmail = email[Math.floor(Math.random() * email.length)];
          let randomDomain = domain[Math.floor(Math.random() * domain.length)];
          
          let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username === args.slice(0).join(" ") || x.user.username === args[0])
          if(!member){return message.channel.send('Woahh calm down, mentionne un utilisateur')}
        
        message.delete().catch()
         message.channel.send(`Hacking **${member.user.username}**...`).then(msg => {
              setTimeout(function(){
                msg.edit(`[<a:loading:740150607666741318>] recherche de l'adresse IP de **${member.user.username}** <a:yeet:764797853385883658>..`);
              }, 750)
              setTimeout(function(){
              msg.edit(`[<a:loading:740150607666741318>] recherche de l'adresse IP de **${member.user.username}** <a:yeet:764797853385883658>..`);
              }, 1500)
              setTimeout(function(){
              msg.edit(`[<a:loading:740150607666741318>] recherche de l'adresse IP de **${member.user.username}** <a:yeet2:764797847073718283>..`);
              }, 2250)
              setTimeout(function(){
              msg.edit(`[<a:loading:740150607666741318>] recherche de l'adresse IP de **${member.user.username}** <a:yeet2:764797847073718283>..`);
              }, 3000)
              setTimeout(function(){
              msg.edit(`[<a:loading:740150607666741318>] IP détectée <a:yeet2:764797847073718283>..`);
              }, 4750)
              setTimeout(function(){
              msg.edit(`[<a:loading:740150607666741318>] IP: **${randomIP}**`);
              }, 6500)
              setTimeout(function(){
              msg.edit(`[<a:loading:740150607666741318>] hacking Compte Discord <a:yeet:764797853385883658>..`);
              }, 8250)
              setTimeout(function(){
              msg.edit(`[<a:loading:740150607666741318>] hacking Compte Discord <a:yeet:764797853385883658>..`);
              }, 10000)
              setTimeout(function(){
              msg.edit(`[<a:loading:740150607666741318>] hacking Compte Discord <a:yeet2:764797847073718283>..`);
              }, 11750)
              setTimeout(function(){
              msg.edit(`[<a:loading:740150607666741318>] détails du Compte Discord <a:yeet2:764797847073718283>..`);
              }, 13500)
              setTimeout(function(){
              msg.edit(`**email:** ${member.user.username}${randomEmail}@${randomDomain}
**password:** \`${randomPassword}\``);
              }, 15250)
              setTimeout(function(){
              msg.edit(`[<a:loading:740150607666741318>] recherche du dernier message privé..`);
              }, 17000)
              setTimeout(function(){
              msg.edit(`[<a:loading:740150607666741318>] dernier dm\: **${randomDM}**`);
              }, 18750)
              setTimeout(function(){
              msg.edit(`[<a:loading:740150607666741318>] injection d'un virus..`);
              }, 20500)
              setTimeout(function(){
              msg.edit(`[<a:loading:740150607666741318>] revente des informations au gouvernement.. [**+ 768$**]`);
              }, 22250)
              setTimeout(function(){
              msg.edit(`[<a:loading:740150607666741318>] signalement du compte pour non-respect des ToS..`);
              }, 24000)
              setTimeout(function(){
              msg.edit(`<a:canard:764820830432788530> **${member.user.username}** est maintenant hors d'état de nuire`);
              }, 25750)})
            
     
} catch (err) {
  console.log(err)
}
},
};
