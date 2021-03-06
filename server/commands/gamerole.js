var games = ["roblox", "minecraft", "cuphead", "fortnite", "undertale", "unturned", "vrchat",
	"pubg", "fnaf", "clash of clans", "clash royale", "sims", "terraria", "subnautica", "rocket league",
	"portal", "hat in time", "csgo", "splatoon", "mario", "starbound", "garry's mod", "overwatch",
	"call of duty", "destiny"];

module.exports = {
	id: "gamerole",
	load: () => {},
	execute: (call) => {
		var role = call.params.readRole();
		var game = role.name.toLowerCase();
		if (games.includes(game)) {
			if(call.message.member.roles.has(role.id)) {
				call.message.member.removeRole(role).then(() => {
					call.message.channel
						.send(`Since you already had the \`${game}\` game role, it has been removed from you!`);
				}).catch(() => {
					call.message.channel.send(`Unable to remove the \`${game}\` game role!`);
				});
			} else {
				call.message.member.addRole(role).then(() => {
					call.message.channel.send(`Successfully given you the \`${game}\` game role!`);
				}).catch(() => {
					call.message.channel.send(`Unable to give you the \`${game}\` game role!`);
				});
			}
		} else {
			call.message.channel
				.send(`\`${game} \` is not a valid game option.`);
		}
	}
};
