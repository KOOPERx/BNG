const {
  MessageEmbed,
  splitMessage
} = require(`discord.js`);
const config = require(`../../botconfig/config.json`);
const ee = require(`../../botconfig/embed.json`);
const emoji = require(`../../botconfig/emojis.json`);
const {
  inspect
} = require(`util`);
module.exports = {
  name: `eval`,
  category: `👑 Owner`,
  aliases: [`evaluate`],
  description: `eval Command`,
  usage: `eval <CODE>`,
  run: async (client, message, args, cmduser, text, prefix) => {
	if (!config.ownerIDS.includes(message.author.id)) { 
		return message.reply('นี่เป็นคำสั่งสำหรับนักพัฒนาเท่านั้น.', { allowedMentions: { repliedUser: false } });
	}
	args = args.join(' ');
	if(!args) return message.reply('ใส่ด้วย');
	try {
		let evaled;

		if (args.includes('await')) {
			evaled = await eval(`(async () => { ${args} })();`);
		}
		else {evaled = eval(args);}
		if (typeof evaled !== 'string') {
			evaled = require('util').inspect(evaled, { depth: 0 });
		}
		message.channel.send(`\`\`\`xl\n${clean(evaled)}\n\`\`\``);
	} catch (err) {
		message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
	}
  }
};

function clean(text) {
	if (typeof (text) === 'string') {
		return text.replace(/`/g, '`' + String.fromCharCode(8203)).replace(/@/g, '@' + String.fromCharCode(8203));
	}
	else {return text;}
}
