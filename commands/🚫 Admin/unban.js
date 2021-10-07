const { MessageEmbed } = require("discord.js");


module.exports = {
  name: "unban",
  category: "🚫 Admin",
  aliases: [""],
  usage: "",
  description: "เลิกแบนผู้ใช้ในเซิร์ฟเวอร์ของคุณ",
  memberpermissions: [],
  
run: async (client, message, args, { GuildDB }) => {
const targetMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
	if (!message.member.hasPermission('BAN_MEMBERS')){
      const embed = new MessageEmbed()
        .setTitle("❌ | คุณไม่ได้รับอนุญาตให้เรียกใช้คำสั่งนี้ที่นี่!")
        .setColor('RANDOM');	
	return message.channel.send(embed) 
   }
		
	if (!message.guild.me.hasPermission('BAN_MEMBERS')){
      const embed2 = new MessageEmbed()
        .setTitle("ฉันไม่ได้รับอนุญาตให้ยกเลิกการแบนสมาชิก!")
        .setColor('RANDOM');	
	return message.channel.send(embed2) 
   }
		
	if (!args[0]){
     const embed3 = new MessageEmbed()
        .setTitle("โปรดระบุ ID ผู้ใช้เพื่อเลิกแบน!")
        .setColor('RANDOM');	
	return message.channel.send(embed3)
	}
	
	const toUnBan = client.users.cache.get(args[0].match(/[1234567890]{18}/igm)[0]) || await client.users.fetch(args[0], true, true);
	
	if (!toUnBan){ 
     const embed4 = new MessageEmbed()
        .setTitle("คุณไม่ได้ระบุผู้ใช้ที่ถูกต้อง!")
        .setColor('RANDOM');	
	return message.channel.send(embed4)	
	}
	
	try {
		(await message.guild.fetchBan(toUnBan));
	}
	
	catch (err) {	
     const embed5 = new MessageEmbed()
        .setTitle(`**ผู้ใช้**: ${targetMember.user.tag} ไม่ได้ถูกแบน!`)
        .setColor('RANDOM');	
	return message.channel.send(embed5)
	}
	
	message.guild.members.unban(toUnBan);
	     const embed6 = new MessageEmbed()
        .setTitle(`${toUnBan.username} ตอนนี้เลิกแบนแล้ว!`)
        .setColor('RANDOM');	
	return message.channel.send(embed6)	
	
  }
}	