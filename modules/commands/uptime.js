module.exports.config = {
	name: "uptime",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "D-Jukie",
	description: "Kiα»m tra thα»i gian bot ΔΓ£ online",
	commandCategory: "Admin",
	cooldowns: 0
};
module.exports.run = async ({ api, event, args }) => {
	const { threadID, messageID } = event;
	const fast = require('fast-speedtest-api')
	const speedTest = new fast({
		token: "YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm",
		verbose: false,
		timeout: 10000,
		https: true,
		urlCount: 5,
		bufferSize: 8,
		unit: fast.UNITS.Mbps
	});
	const resault = await speedTest.getSpeed();
	const time = process.uptime() + global.config.UPTIME;
	const hours = Math.floor(time / (60 * 60))
	const minutes = Math.floor((time % (60 * 60)) / 60)
	const seconds = Math.floor(time % 60);
	return api.sendMessage(`[ ππΆππΊπ² π£πΏπΌπ·π²π°π ]\nβ― Time: ${hours}:${minutes}:${seconds}\nβ― Fast: ${resault}Mbs\nβ― Version: ${global.config.version}`, threadID, messageID);
}
