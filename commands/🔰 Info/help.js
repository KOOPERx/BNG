const Discord = require("discord.js");
module.exports = {
  name: "help",
  description: "ข้อมูลเกี่ยวกับบอท",
  category: "🔰 Info",
  usage: "[command]",
  aliases: ["command", "commands", "cmd"],
 run: async (client, message, args, cmduser, text, prefix) => {  
    if (prefix === null) prefix = config.prefix;
let embed = new Discord.MessageEmbed()
  .setAuthor("คำสั่ง BNG", client.user.displayAvatarURL())
  .setDescription(` 
 (เพื่อให้บอทสามารถทำงานได้ทุกฟังก์ชั่นโปรดให้ Permissions: 
Administrator)
  `)
  .setImage("https://cdn.discordapp.com/attachments/851021537275936768/873507075559411722/standard_3.gif")
  .setColor('RANDOM')
  .addField("💭 ติดต่อผู้ดูแลระบบ", "┊``Discord`` https://discord.gg/Fyhv2tAbnZ\n╰``InviteBot`` [invite.bngbot.ml](https://invite.bngbot.ml/)")
  .setFooter('www.bngbot.ml', `${message.author.displayAvatarURL()}`)
  .setTimestamp()
  
let embed_music = new Discord.MessageEmbed()
  .setAuthor("🎵・คำสั่งเพลง")
  .setDescription(`
${prefix}play [ชื่่อเพลง] - <ชื่อเพลง | url> - เล่นเพลงบน (yt / sp)
${prefix}playlist เล่นเพลย์ลิสต์จาก youtube
${prefix}loop - วนเพลงปัจจุบัน
${prefix}resume - เล่นเพลงต่อ
${prefix}queue - แสดงเพลงที่เข้าคิวทั้งหมดในปัจจุบัน
${prefix}skip - ข้ามเพลงปัจจุบัน
${prefix}volume 1 - 100 - ตรวจสอบหรือเปลี่ยนระดับเสียงปัจจุบัน  
`)
  .setColor('RANDOM')
  .setFooter('www.bngbot.ml', `${message.author.displayAvatarURL()}`)
  .setTimestamp()
let embed_admin = new Discord.MessageEmbed()
  .setAuthor("⚙ คำสั่งตั้งค่าเซิฟเวอร์")
  .setDescription(`
${prefix}setprefix - ตั้งค่า prefix
${prefix}addemoji - ดึงอิโมจิจากเซิฟอื่น(เพิมได้ทีละ 3)
${prefix}setup - สร้างห้องสำหรับเล่นเพลง

${prefix}ban (@ชื่อ) (เหตุผล) - แบนสมาชิก
${prefix}kick (@ชื่อ) (เหตุผล) - เตะสมาชิก
${prefix}unban - เลิกแบนผู้ใช้ในเซิร์ฟเวอร์ของคุณ
`)
  .setColor('RANDOM')
  .setFooter('www.bngbot.ml', `${message.author.displayAvatarURL()}`)
  .setTimestamp()
  
let embed_default = new Discord.MessageEmbed()
  .setAuthor("📚・คำสั่งทั่วไป")
  .setDescription(`
${prefix}stats - รับข้อมูลเกี่ยวกับบอท
${prefix}help - ข้อมูลเกี่ยวกับบอท
${prefix}botinfo - เช็คข้อมูลบอท

${prefix}invite - เพื่อเชิญฉันเข้าสู่เซิร์ฟเวอร์ของคุณ
${prefix}uptime - ดูระยะเวลาที่บอทออนไลน์
${prefix}serverinfo - แสดงข้อมูลเกี่ยวกับเซิร์ฟเวอร์
${prefix}ping - เช็คความหน่วงของบอท
`)
  .setColor('RANDOM')
  .setFooter('www.bngbot.ml', `${message.author.displayAvatarURL()}`)
  .setTimestamp()

let embed_together = new Discord.MessageEmbed()
  .setAuthor("🎮・คำสั่งเล่นเกมส์")
  .setDescription(`
${prefix}ytt - สร้างห้องเกมส์ Youtube
${prefix}betrayal - สร้างห้องเกมส์  Betrayal
${prefix}poker - สร้างห้องเกมส์ Poker-Night
${prefix}fishing - สร้างห้องเกมส์ Fishington
${prefix}chess - สร้างห้องเกมส์ CHESS INTHE PARK
`)
  .setColor('RANDOM')
  .setFooter('www.bngbot.ml', `${message.author.displayAvatarURL()}`)
  .setTimestamp()

let goodbyeuser = new Discord.MessageEmbed()
  .setAuthor("BNG", client.user.displayAvatarURL())
  .setDescription("นายมันหมดเวลาการใช้งาน `b/help` แล้วนะหากต้องการใช้งานโปรดพิมพ์คำสั่งอีกครั้ง")
  .addField("💭 ติดต่อผู้ดูแลระบบ", "┊``Discord`` https://discord.gg/Fyhv2tAbnZ\n╰``Email`` bngbot.contact@gmail.com")
  .setColor('RANDOM')

let close_embed = new Discord.MessageEmbed()
  .setAuthor("BNG", client.user.displayAvatarURL())
  .setDescription("ปิดการใช้งาน Help แล้วนะ")
  .setColor('RANDOM')

  let author = message.author;
  let msg;
  if (await message.channel.permissionsFor(message.member).has("ADD_REACTIONS")) {
    msg = message.channel.send(embed);
  } else {
    message.channel.send("เราส่งคำสั่งไปส่วนตัวแล้วนะ")
    msg = message.author.send(embed);
  }

  msg.then(async (msg) => {
    await msg.react('🏠');
    await msg.react('📚');
    await msg.react('🔉');
    await msg.react('⚙');
	await msg.react('🎮');
    await msg.react('❌');
  })
  msg = await msg
  const filter = (reaction, user) => ['🏠', '📚', '🔉', '⚙', '🎮', '❌'].includes(reaction.emoji.name) && user.id === author.id;
  const collector = await msg.createReactionCollector(filter, {
    time: 1000 * 60 * 10
  });
  collector.on('collect', async r => {
    if (msg.guild) {
      let user = r.users.cache.last()
      user.id != client.user.id && r.users.remove(user);
    }
    let embedtosend;
    if (r.emoji.name === '🏠') {
      embedtosend = embed
    }
    if (r.emoji.name === '📚') {
      embedtosend = embed_default
    }
    if (r.emoji.name === '🔉') {
      embedtosend = embed_music
    }
    if (r.emoji.name === '⚙') {
      embedtosend = embed_admin
    }
	if (r.emoji.name === '🎮') {
	  embedtosend = embed_together
	}
    if (r.emoji.name === '❌') {
	  embedtosend = close_embed
    }
    msg.edit(embedtosend);
  });
  collector.on('end', () => {
    if (msg) msg.reactions.removeAll().then((msg) => {
      msg.edit(goodbyeuser)
    })
  });
  },
} 
