const {
  MessageEmbed
} = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
const emoji = require("../../botconfig/emojis.json");

module.exports = {
  name: "setwelcome",
  category: "⚙️ Settings",
  aliases: ["setwelcome"],
  usage: "setwelcome",
  description: "",
  memberpermissions: [`ADMINISTRATOR`],
  
 run: async (client, message, args, cmduser, text, prefix) => {
    let channel = message.mentions.channels.first()
    
    if(!channel) {
      return message.channel.send("ฝากบอกช่องก่อน")
    }
        
    (`welchannel_${message.guild.id}`, channel.id)
    
    message.channel.send(`ตั้งช่องต้อนรับเป็น ${channel}`)
  }
}