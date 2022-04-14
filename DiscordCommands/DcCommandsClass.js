class DcCommands{
    sendMessageAChannel(message , channel){
        if(message == null || message == "") return "err";
        channel.channel.send(message)
    }

    registerUser(username , message){
        if(username == "" || username == null) return "err";
        if(message == null) return 'err'

        message.mentions.members.first().setNickname(`${username}`)
          .then(data =>{
            message.channel.send('Başarıyla değiştirildi aga bir kontrol et')
            message.guild.roles.cache.find(r => {
              if(r.id === "640155688081031182"){
                message.mentions.members.first().roles.add(r)
              }
            });
          })
          .catch(e =>{
            message.channel.send('Aga senin rütbenin üstündeki birinin ismini değiştiremezsin söyleyeyim. \nHa diyorsan ki amacım o değildi bir geliştirici ile konuşayım')
          })

    }


}

module.exports = DcCommands