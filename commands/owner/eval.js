const Discord = module.require("discord.js");
const ms = require("ms");

module.exports = {
  name: "eval",
  category: "Owner Only",
  aliases: ['eval'],
  cooldown: 0,

  execute(bot, message, args, guildConf) {
    try {
    
      if (message.channel.type == "dm") return message.author.send(`
**error | permissions bloquées 🚫**
il s'agit d'une commande strictement réservée au développeur.
                    `)

       if (message.author.id !== "523532144635543572" && message.author.id !== "367282213496160258") return message.channel.send(
      "<:STAFF:761276865675001856> commande strictement réservée au développeur (bouge en gros)"
                      ).then(m => m.delete({timeout: 5000}));

                      function clean(text) {
                        if (typeof text === "string") {
                          return text
                            .replace(/`/g, "`" + String.fromCharCode(8203))
                            .replace(/@/g, "@" + String.fromCharCode(8203));
                        } else {
                          return text;
                        }
                      }
                  
                      const hrStart = process.hrtime();
                      let hrDiff;
                      hrDiff = process.hrtime(hrStart);
                      const code = args.join(" ");
                  
                      try {
                  
                        
                        let evaled = eval(code);
                  
                        if (typeof evaled !== "string") {
                          evaled = require("util").inspect(evaled);
                        }
                        
                        
                      } catch (err) {
                        console.log(err)
                      }
                    } catch (err) {
                      return;
                    }
                  },
                  };
