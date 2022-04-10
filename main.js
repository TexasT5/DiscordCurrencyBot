const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const config = require('./config.json')
const discordCommands = require("./command.json")
const commands = require("./TCommands/command.js")

client.on("messageCreate", (message) => {
  if (!message.content.startsWith(config.prefix) || message.author.bot) return
  if (message.content.startsWith(`${config.prefix}${discordCommands.kur}`)) {
      var sliceText = message.content.split(`${config.prefix}${discordCommands.kur} `)
      if( sliceText[1] == null || sliceText[1] == "") message.channel.send('Error ! enter a valid currency')
      else commands.whatUserWrite(sliceText[1].toUpperCase() , message)
  }
});

client.login(config.token)