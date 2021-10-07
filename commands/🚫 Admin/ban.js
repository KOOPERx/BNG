/* eslint-disable no-unused-vars */
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "ban",
  category: "🚫 Admin",
  aliases: [""],
  usage: "",
  description: "แบนสมาชิก",
  memberpermissions: [],
  
run: async (client, message, args, { GuildDB }) => {
	
	if (!message.guild.me.hasPermission('BAN_MEMBERS')){
	  const embed1 = new MessageEmbed() 
	  .setTitle("❌ | คุณไม่ได้รับอนุญาตให้เรียกใช้คำสั่งนี้ที่นี่!")
      .setColor('RANDOM');
	  return message.channel.send(embed1)
    }	  
	if (!message.member.hasPermission('BAN_MEMBERS')){
	  const embed2 = new MessageEmbed() 
	  .setTitle("❌ | คุณไม่ได้รับอนุญาตให้เรียกใช้คำสั่งนี้ที่นี่!")
      .setColor('RANDOM');
	  return message.channel.send(embed2)
    }  
	if (!args[0]){
	const howtouse = new MessageEmbed()
        .setTitle("กรุณาแท็กผู้ใช้ที่จะแบน!")
        .setDescription("วิธีใช้: b/ban @ชื่อ [เหตุผล]")
        .setColor('RANDOM');	
	return message.channel.send(howtouse) 
   }
	const target = message.mentions.members.first() || await message.guild.members.fetch(args[0]).catch(e => {
	const embed3 = new MessageEmbed()
        .setTitle("ไม่พบสมาชิกที่ระบุ! ระบุ ID ที่ถูกต้อง!")
        .setColor('RANDOM');	
	return message.channel.send(embed3) 
    });

	if(target.id === message.author.id){ 
	  const embed4 = new MessageEmbed() 
	  .setTitle("แบนัวเองไม่ได้")
      .setColor('RANDOM');
	  return message.channel.send(embed4)	
    }
		
	if(target.id === client.user.id){ 
	  const embed5 = new MessageEmbed() 
	  .setTitle("ทำไมคุณถึงต้องการแบนฉัน")
      .setColor('RANDOM');
	  return message.channel.send(embed5)	
    }

	const reason = args.slice(1).join(' ');
	if (!target.bannable){
	const embed6 = new MessageEmbed()
        .setTitle("ไม่สามารถแบนสมาชิกที่ระบุได้! ตรวจสอบให้แน่ใจว่าฉัน")
        .setColor('RANDOM');	
	return message.channel.send(embed6)
	}
	
	const confirmationEmbed = new MessageEmbed()
		.setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
		.setTitle(`คุณแน่ใจหรือว่าต้องการแบน ${target.user.tag} ด้วยเหตุผล ${reason}?`);
	const mes = await message.reply({ embed: confirmationEmbed, allowedMentions: { repliedUser: false } });
	await mes.react('✔️');
	await mes.react('✖️');

	const filter = (reaction, user) => {
		return (reaction.emoji.name === '✔️' || reaction.emoji.name === '✖️') && user.id === message.author.id;
	};
	const collector = mes.createReactionCollector(filter, { max: 1, time: 1000 * 30 });
	collector.on('end', async collected => {
		if (collected.first().emoji.name === '✔️') {
			await target.ban({ reason: reason });
			const banEmbed = new MessageEmbed()
				.setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
				.setTitle(`แบน ${target.user.tag}! เหตุผล ${reason}`);
			await mes.edit(banEmbed);
			await mes.reactions.removeAll();
		}
		else {
			const cancelEmbed = new MessageEmbed()
				.setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
				.setTitle(`ยกเลิกการแบน ${target.user.tag}!`);
			await mes.edit(cancelEmbed);
			await mes.reactions.removeAll();
		}
	});	
	
   }
}