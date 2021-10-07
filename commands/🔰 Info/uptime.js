const {
  MessageEmbed
} = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
const emoji = require(`../../botconfig/emojis.json`);
const {
  duration
} = require("../../handlers/functions")
module.exports = {
  name: "uptime",
  category: "🔰 Info",
  aliases: ["up"],
  cooldown: 10,
  usage: "uptime",
  description: "Returns the duration on how long the Bot is online",
  run: async (client, message, args, user, text, prefix) => {
	  let days = Math.floor(client.uptime / 86400000);
        let hours = Math.floor(client.uptime / 3600000) % 24;
        let minutes = Math.floor(client.uptime / 60000) % 60;
        let seconds = Math.floor(client.uptime / 1000) % 60;
        const uptime = new MessageEmbed()
            .setTitle(`**BNG | Uptime**`)
            .setColor("RANDOM")
            .setTimestamp()
            .setFooter(client.user.username, client.user.displayAvatarURL())
			.setDescription(`บอทออนไลน์มาเป็นเวลา: 🕧 \`${days} วัน\` \`${hours} ชั่วโมง\` \`${minutes} นาที\` \`${seconds} วินาที\``);
        return message.channel.send(uptime); 
  }
}