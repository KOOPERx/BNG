const { Client, MessageEmbed, Message, Util} = require('discord.js')

module.exports = {
  name: "addemoji",
  category: "⚙️ Settings",
  aliases: [""],
  usage: "addemoji",
  description: "ดึงอิโมจิจากเซิฟอื่น(เพิมได้ทีละ 3)",
  memberpermissions: [],

 
run: async (client, message, args, { GuildDB }) => {
	
		if(message.member.hasPermission('ADMINISTRATOR')) {
        if(!args.length) return message.reply(new MessageEmbed()
        .setTitle('โปรดระบุอิโมจิ')
        .setColor('RED'))
        if(args.length > 5) return message.reply('ใส่อิโมจิเกินไป');
        
        for (const rawEmoji of args) {
            const parsedEmoji = Util.parseEmoji(rawEmoji);

            if(parsedEmoji.id) {
                //.gif .png
                const extension = parsedEmoji.animated ? ".gif" : ".png";
                const url = `https://cdn.discordapp.com/emojis/${parsedEmoji.id + extension}`;

                message.guild.emojis.create(url, parsedEmoji.name).then(emoji => {
                message.reply(new MessageEmbed()
                .setTitle('✅ เพิ่มอิโมจิเรียบร้อยแล้ว')
                .setDescription(`ชื่อ: "${emoji.name}" | ${emoji}`)
                .setColor('GREEN')
				)
            })
            }
        }
                } else {
	  const embed = new MessageEmbed() 
	  .setTitle("❌ | คุณไม่ได้รับอนุญาตให้เรียกใช้คำสั่งนี้ที่นี่!")
	  .setDescription('Permissions : ADMINISTRATOR')
      .setColor('RANDOM');
	  return message.channel.send(embed)  
      }
   }
}  