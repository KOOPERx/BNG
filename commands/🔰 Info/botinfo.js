const {
  MessageEmbed
} = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
const emoji = require("../../botconfig/emojis.json");
const moment = require("moment");

module.exports = {
    name: "botinfo",
    aliases: ["info"],
    category: "🔰 Info",
    description: "Sends detailed info about the client",
    usage: "botinfo",
    run: async (client, message, args, cmduser, text, prefix) => {
		const { version } = require("discord.js")
		if (prefix === null) prefix = config.prefix;
		let days = Math.floor(client.uptime / 86400000);
        let hours = Math.floor(client.uptime / 3600000) % 24;
        let minutes = Math.floor(client.uptime / 60000) % 60;
        let seconds = Math.floor(client.uptime / 1000) % 60;
   const embed = new MessageEmbed()
   .setTitle(':notepad_spiral: ข้อมูลบอท')
   .setThumbnail(client.user.avatarURL())
   .setDescription(`**Prefix**: ${prefix}

**ข้อมูลบอท:** 
**ไอดีบอท:** ${client.user.id}

**ข้อมูล:**
**เซิร์ฟเวอร์ที่เชื่อมต่อ:** ${client.guilds.cache.size}
**ช่องทั้งหมด:** ${client.channels.cache.size}
**ผู้ใช้:** ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)}
**ปิง:** ${(message.client.ws.ping)}ms

**ข้อมูลเวอร์ชั่น:**
**เวอร์ชั่น Node.js:** ${process.version}
**เวอร์ชั่น Discord.js:** ${version}
`)
   .setFooter(`บอทออนไลน์มา: 🕧 ${days} วัน ${hours} ชั่วโมง ${minutes} นาที ${seconds} วินาที`)
   .setColor('RANDOM');
   return message.channel.send(embed);	
    },
};
