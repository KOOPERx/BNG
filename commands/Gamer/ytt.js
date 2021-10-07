const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "ytt",
  category: "Gamer",
  usage: "",
  description: "สร้างห้อง Youtube",
  
  
  run: async (client, message, args, user, text, prefix) => {
	    if(!message.member.voice.channel) return message.reply('เข้าช่องก่อน');
        if(message.member.voice.channel) {
            client.discordTogether.createTogetherCode(message.member.voice.channelID, 'youtube').then(async invite => {
                return message.channel.send(`BNG | YOUTUBE
ลิงค์เพื่อเข้า: ${invite.code}`);
            });
        };
 }
}
