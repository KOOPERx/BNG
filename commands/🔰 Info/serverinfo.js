const { MessageEmbed } = require("discord.js");
function checkDays(date) {
    let now = new Date();
    let diff = now.getTime() - date.getTime();
    let days = Math.floor(diff / 86400000);
    return days + (days == 1 ? " day" : " วัน") + " ที่แล้ว";
};

module.exports = {
  name: "serverinfo",
  aliases: ["sinfo"],
  category: "🔰 Info",
  description: "Shows info about a server",
  usage: "serverinfo",
  run: async (client, message, args, cmduser, text, prefix) => {
    let verifLevels = ["ไม่มี", "ต่ำ", "ปานกลาง"];
    let region = {
        "brazil": "🇧🇷",
        "eu-central": "Central Europe",
        "singapore": "🇸🇬",
        "us-central": "U.S. Central",
        "sydney": "Sydney",
        "us-east": "U.S. East",
        "us-south": "U.S. South",
        "us-west": "U.S. West",
        "eu-west": "Western Europe",
        "vip-us-east": "VIP U.S. East",
        "london": "London",
        "amsterdam": "Amsterdam",
        "hongkong": "🇭🇰"
    };
   // For Getting Current Number of Emotes in server
    var emojis;
    if (message.guild.emojis.cache.size === 0) {
        emojis = 'None';
    } else {
        emojis = message.guild.emojis.cache.size;
    }
   // Used to get Max emotes by Boost Tier Level ( counting in both animated AND static )
    var tierLvl = message.guild.premiumTier;
    var tierEmote = message.guild.premiumTier;
    if (tierLvl === 0) tierEmote = Number(tierLvl + 1);
    if (tierLvl > 1) tierEmote = Number(tierLvl  + 1);
    if (tierLvl > 2) tierEmote = Number(tierLvl  + 2);
    let maxEmotes = Number(tierEmote * 50 * 2);

 const embed = new MessageEmbed()
  .setAuthor(message.guild.name, message.guild.iconURL() ? message.guild.iconURL() : client.user.displayAvatarURL())
  .setThumbnail(message.guild.iconURL())
  .setTimestamp()
  .addField("สร้าง", `${message.guild.createdAt.toString().substr(0, 15)},\n(${checkDays(message.guild.createdAt)})`, true)
  .addField("เจ้าของ", `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`, true)
  .addField("ภูมิภาค", region[message.guild.region], true)
  .addField("จำนวนผู้ใช้", message.guild.memberCount, true)
  .addField("จำนวนสมาชิก", message.guild.members.cache.filter(m => !m.user.bot).size, true)
  .addField("จำนวนบอท", message.guild.members.cache.filter(m => m.user.bot).size, true)
  .addField("AFK หมดเวลา", message.guild.afkTimeout / 60 + ' นาที', true)
  .addField("บทบาท", message.guild.roles.cache.size, true)
  .addField("ช่อง", message.guild.channels.cache.size, true)
  .addField("ระดับการตรวจสอบ", message.guild.verificationLevel, true)
  .setColor("RANDOM")
  message.channel.send({embed});
  }
}
