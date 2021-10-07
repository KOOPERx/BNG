const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "fishing",
  category: "Gamer",
  usage: "",
  description: "สร้างห้องเกมส์ Fishington",
  
  
  run: async (client, message, args, user, text, prefix) => {
	    if(!message.member.voice.channel) return message.reply('เข้าช่องก่อน');
        if(message.member.voice.channel) {
            client.discordTogether.createTogetherCode(message.member.voice.channelID, 'fishing').then(async invite => {
                return message.channel.send(`BNG | Fishington
ลิงค์เพื่อเข้าเกมส์: ${invite.code}`);
            });
        };
 }
}
