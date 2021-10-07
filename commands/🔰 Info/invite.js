const {
  MessageEmbed
} = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
const emoji = require(`../../botconfig/emojis.json`);
module.exports = {
  name: "invite",
  category: "🔰 Info",
  aliases: ["add"],
  cooldown: 5,
  usage: "invite",
  description: "Gives you an Invite link for this Bot",
  run: async (client, message, args, user, text, prefix) => {
    let embed = new MessageEmbed()
      .setAuthor(
        "เชิญ " + client.user.tag + " ไปยังเซิร์ฟเวอร์ของคุณ",
        client.user.displayAvatarURL()
      )
      .setColor("BLUE")
      .setDescription(
        `สามารถเชิญได้โดยการคลิก [ที่นี่](https://discord.com/api/oauth2/authorize?client_id=849563397679087626&permissions=1077164158&scope=bot)`
      );
    message.channel.send(embed);
  }
}
