const { channel } = require("diagnostics_channel");
const https = require("https");
const { url } = require("inspector");
const DcCommands = require("../DiscordCommands/DcCommandsClass");
const URL = 'https://api.genelpara.com/embed/doviz.json'
const axios = require("axios").default
const classes = new DcCommands()
const currencyType = ["USD" , "EUR" , "GBP" , "ETH" , "XRP" , "BCH" , "LTC" , "GA" , "C" , "GAG" , "XU100"]

const whatUserWrite = function(res , message){

    getUser()
    .then(value => {
        var getCurrenyStatus = value[res]
        classes.sendMessageAChannel(String(`${res} : \n Satış : ${getCurrenyStatus.satis} \n Alış : ${getCurrenyStatus.alis} \n Değişim : ${currenyStatus(getCurrenyStatus.degisim)} \n :exclamation: Veriler www.genelpara.com tarafından sağlanmaktadır :exclamation:`) , message)
        currenyStatus(getCurrenyStatus.degisim)
    })
}

async function getUser() {
    var value = ""
    try {
        await axios.get(URL)
        .then(data => {
            return value = data.data
        })
    } catch (error) {
      return value = "err"
    }
    return value
}

function currenyStatus(change){
    var sliceText = change.split("-")
    if(sliceText[1] != null){
        return String(change+" :arrow_down_small:")
    }else{
        return String(change+" :arrow_up_small:")
    }
}

module.exports = {
    whatUserWrite,
}