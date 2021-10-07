/* eslint-disable no-unused-vars */
const { MessageEmbed } = require("discord.js");


module.exports = {
  name: "kick",
  category: "🚫 Admin",
  aliases: [""],
  usage: "",
  description: "เตะสมาชิก",
  memberpermissions: [],
  
run: async (client, message, args, { GuildDB }) => {
	if (!message.guild.me.hasPermission('KICK_MEMBERS')){
          const embed1 = new MessageEmbed()
           .setTitle("❌ | คุณไม่ได้รับอนุญาตให้เรียกใช้คำสั่งนี้ที่นี่!")
           .setColor('RANDOM');
		 return message.channel.send(embed1) 
	}
	if (!message.member.hasPermission('KICK_MEMBERS')){
          const embed2 = new MessageEmbed()
           .setTitle("❌ | คุณไม่ได้รับอนุญาตให้เรียกใช้คำสั่งนี้ที่นี่!")
           .setColor('RANDOM');
		 return message.channel.send(embed2) 	
    }
	
	const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
	const reason = args.slice(1).join(' ') || 'ไม่มีเหตุผล!';
	if (!member){
      const howtouse = new MessageEmbed()
        .setTitle("กรุณาแท็กผู้ใช้ที่จะเตะ!")
        .setDescription("วิธีใช้: b/kick @ชื่อ [เหตุผล]")
        .setColor('RANDOM');	
	return message.channel.send(howtouse) 
   }
    if(member.id === message.author.id){
      const howtouse = new MessageEmbed()
        .setTitle("คุณไม่สามารถเตะตัวเองได้!")
        .setColor('RANDOM');	
	return message.channel.send(howtouse) 
   }
   
	if(!member.bannable){
      const howtouse = new MessageEmbed()
        .setTitle("ไม่สามารถเตะผู้ใช้คนนั้นได้!!")
        .setColor('RANDOM');	
	return message.channel.send(howtouse) 
   }	
	
  member.kick(reason).then(mem => {
      const embed = new MessageEmbed()
        .setTitle(`เตะโดย: ${message.author.tag}`)
        .setDescription(`เตะ ${mem.user.tag} จากเซิร์ฟเวอร์เรียบร้อยแล้ว`)
        .setColor('RANDOM');	
	return message.channel.send(embed)
	});
  }
}