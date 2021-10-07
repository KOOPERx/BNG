const Discord = require("discord.js");
const {MessageEmbed} = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
const emoji = require(`../../botconfig/emojis.json`);
const moment = require('moment');
module.exports = {
  name: "userinfo",
  aliases: ["uinfo"],
  category: "🔰 Info",
  description: "Get information about a user",
  usage: "userinfo [@USER]",
  run: async (client, message, args, cmduser, text, prefix) => {
    let status = {
		"offline": "<:offline:851047989702950953> ออฟไลน์",
		"online": "<:online:851047990092496936> ออนไลน์",
		"dnd": "<:dnd:851047989706227723> ห้ามรบกวน",
		"idle": "<:idle:851047989988032512> ไม่อยู่"
	}
	let flags = [];
    let device = [];
	const targetMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
	if (!targetMember) return;
    if (targetMember.presence.clientStatus.mobile) device.push(`> กับโทรศัพท์`);
    if (targetMember.presence.clientStatus.web) device.push(`> กับเว็บ`);
    if (targetMember.presence.clientStatus.desktop) device.push(`> กับแอพบนคอม`);
  targetMember.user.flags.toArray().forEach((flagsz) => {
    let flagsx = flagsz; 
    if (flagsx == "BUGHUNTER_LEVEL_1") {
      flags.push(
        `<:BugHunterLevel1:851289820282224670>`
      );
    } else if (flagsx == "BUGHUNTER_LEVEL_2") {
      flags.push(
        `<:BugHunterLevel2:851289818717093948>`
      );
    } else if (flagsx == "DISCORD_EMPLOYEE") {
      flags.push(`<:DiscordEmployee:851289816967544862>`);
    } else if (flagsx == "DISCORD_NITRO") {
      flags.push(`<:Nitro:851346574227013672>`);
    } else if (flagsx == "DISCORD_PARTNER") {
      flags.push(`<:PartneredServerOwner:851290082454536242>`);
    } else if (flagsx == "EARLY_SUPPORTER") {
      flags.push(`<:Early_Supporter:851290427934900225>`);
    } else if (flagsx == "HOUSE_BALANCE") {
      flags.push(`<:HouseBalance:851290513499226132>`);
    } else if (flagsx == "HOUSE_BRAVERY") {
      flags.push(`<:HouseBravery:851290510429519912>`);
    } else if (flagsx == "HOUSE_BRILLIANCE") {
      flags.push(`<:HouseBrilliance:851290511960309790>`);
    } else if (flagsx == "HYPESQUAD_EVENTS") {
      flags.push(`<:HypeSquadEvents:851290192240836629>`);
    } else if (flagsx == "VERIFIED_DEVELOPER") {
      flags.push(`<:verifiedBot:814562343018954862>`);
    } else if (flagsx == "VERIFIED") {
      flags.push(
        `<:EarlyVerifiedBotDeveloper:851290426052837406>`
      );
    }
  })
	let tester = {
		"offline": "ออฟไลน์",
		"online": device.join(`, `),
		"dnd": device.join(`, `),
		"idle": device.join(`, `)
	}
	const embed = new MessageEmbed()
		.setColor("RANDOM")
		.setTitle('BNG | USERINFO')
		.setThumbnail(targetMember.user.avatarURL())
		.setAuthor(targetMember.displayName, targetMember.user.avatarURL())
        .setDescription(`**ชื่อ**: ${targetMember.user.tag}
**ไอดี**: ${targetMember.user.id}
**สร้างบัญชีเมื่อ**: ${moment(targetMember.user.createdTimestamp).format('DD/MM/YYYY')}
**สถานะ**: **${status[targetMember.user.presence.status]}**

**อุปกรณ์**: Credit by No-One
${tester[targetMember.user.presence.status]}

**ตรา**: Credit By No-One
${flags.join(`, `) || 'ไม่มี'}

**ยศสูงสุด**: ${targetMember.roles.highest.name}
**เข้าร่วมเซิฟเวอร์เมื่อวันที่**: ${moment(targetMember.joinedAt).format('DD/MM/YYYY | H:m')}
**ยศที่มีทั้งหมด**: 
${targetMember.roles.cache.size}`);

	message.reply({ embed: embed, allowedMentions: { repliedUser: false } });
  }
}
