const {
  MessageEmbed,
  splitMessage
} = require(`discord.js`);
const config = require(`../../botconfig/config.json`);
const ee = require(`../../botconfig/embed.json`);
const emoji = require(`../../botconfig/emojis.json`);
const db = require('quick.db');
const {
  inspect
} = require(`util`);
module.exports = {
  name: `blacklist`,
  category: `👑 Owner`,
  aliases: [`blist`],
  description: `blacklist`,
  usage: `blacklist`,
  run: async (client, message, args, cmduser, text, prefix) => {
	if (!config.ownerIDS.includes(message.author.id)) { 
		return message.reply('นี่เป็นคำสั่งสำหรับนักพัฒนาเท่านั้น.', { allowedMentions: { repliedUser: false } });
	}
	user = message.mentions.users.first() || client.users.cache.get(args[0])
	if(!user) return message.reply('กรุณาใส่ด้วยนะครับว่าจะระงับการใช้งานใคร')
	try {
		if(client.blacklist.includes(user.id)) return message.reply(new MessageEmbed()
			.setTitle('ผู้ใช้งานนี้ได้ถูกระงับการใช้งานอยู่แล้ว')
		.setColor('RED'));
		checking = new MessageEmbed()
		.setTitle('กำลังตรวจสอบว่ามีผู้ใช้งานนี้รึป่าว')
		.setColor("WHITE")
		ok = new MessageEmbed()
		.setTitle('ได้ทำการระงับการใช้งาน '+user.tag+' แล้ว')
		.setColor('GREEN');
		let msg = await message.channel.send(checking)
		
		setTimeout(function(){
			msg.edit(ok)
			db.push('blacklist.list', user.id)
			user.send(new MessageEmbed()
			.setTitle('ขออภัยบัญชีคุณโดนระงับการใช้งานบอท')
			.setDescription('กรุณาติดต่อเจ้าของบอทเพื่อให้เอาออก')
			.setColor('RED'))
		}, 5000)
	} catch (err) {
		console.log(err)
	}
  }
};
