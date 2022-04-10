class DcCommands{
    sendMessageAChannel(message , channel){
        if(message == null || message == "") return "err";
        channel.channel.send(message)
    }
}

module.exports = DcCommands