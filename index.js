const config = require("./config.json");
const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.login(config.BOT_TOKEN);

client.on("messageCreate", (message) => {
    if (message.author.bot) return;
    message.channel.send("Fais la gueule.");

});