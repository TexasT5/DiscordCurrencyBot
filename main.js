const { Client, Intents , Permissions } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES ] });
const permission = new Permissions('MANAGE_NICKNAMES')
const config = require('./config.json')
const discordCommands = require("./command.json")
const commands = require("./TCommands/command.js");
const discordCommandClass = require('./DiscordCommands/DcCommandsClass')
const discordCommdans = new discordCommandClass()


client.on('ready' , () => {
  permission.add('MANAGE_NICKNAMES')
})


client.on("messageCreate", (message) => {
  if (!message.content.startsWith(config.prefix) || message.author.bot) return
  if (message.content.startsWith(`${config.prefix}${discordCommands.kur}`)) {
      var sliceText = message.content.split(`${config.prefix}${discordCommands.kur} `)
      if( sliceText[1] == null || sliceText[1] == "") message.channel.send('Error ! enter a valid currency')
      else commands.whatUserWrite(sliceText[1].toUpperCase() , message)
  }else if(message.content.startsWith(`${config.prefix}${discordCommands.kayit} `)){
    if (message.member.roles.cache.some(role => role.name === "💻┊Yönetim") == true) {
      if(message.guild.me.permissions.has('MANAGE_NICKNAMES') == false){
        message.channel.send('İznim yok bilader 1 dakika müsade et izini vereyim')
        message.guild.me.permissions.add('MANAGE_NICKNAMES')
        message.channel.send('Tamam verilmis olmasi gerekiyor tekrar dene')
      }else{
        var splitUsername  = message.content.split(`<@${message.mentions.members.first().id}> `)
        if(splitUsername[1] == null) return message.channel.send('Kullanıcı adı nere bilader kayıt etmiyorum s.g')
        else{
          if (discordCommdans.registerUser(splitUsername[1] , message) == 'err') return message.channel.send('Aga ufak bir hata oldu tekrar denesene')          
        }
      }  
    }else{
       message.channel.send('sen sg')
    }
  }
});

client.login(config.token)