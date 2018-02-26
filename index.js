//const Discord = require("discord.js");
const commando = require("discord.js-commando")
//const bot = new Discord.Client();
bot = new commando.Client({
    owner: "215315466564927501"
});

bot.registry.registerGroup("random", "Random");
bot.registry.registerDefaults();
bot.registry.registerCommands(__dirname + "/commands");

bot.login("NDE1NjczNTUxNTM0Njg2MjI4.DXTfDA.bwSaHnuJw0A4mQ8d6y8uX3Hjn5c");
