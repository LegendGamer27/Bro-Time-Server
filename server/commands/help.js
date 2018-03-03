module.exports = {
	id: "help",
	load: () => {},
	execute: (call) => {
    var pfx = call.message.data.prefix
		var input = call.params.readRaw();
    var help = `**${pfx}help** - Returns a list of commands and information about Bro Bot.`
    var ping = `**${pfx}ping** - Replies the amount of milliseconds it took the bot to reply to you.`
    var freerole = `**${pfx}freerole** - Allows the user to join or leave the ANN, GW and QOTD roles, which are each pinged for an individual purpose.`
    var gamerole = `**${pfx}gamerole** - Allows the user to join or leave game roles, each resembling a game. List of game roles in \`${pfx}gameroles\`.`
    var namecolor = `**${pfx}namecolor** - Allows the user to change the color of their name tag to the desired color. List of color roles in \`${pfx}colors\`.`
    var postgamenight = `**${pfx}postgamenight** - Begins a prompt that allows the user to post a game night in <#330920609435353090>`
    var postqotd = `**${pfx}postqotd** - Posts the specified question of the day, pinging the QOTD freerole in <#330920609435353090>`
    var mt = `**${pfx}mt** - Toggles the specified role from being able to be mentioned or not`
    var cc = `**${pfx}customcolor** - Begins a prompt that allows the user to create their own custom color roles if they have [donated](https://www.paypal.me/brotime).`
    call.message.channel.send({embed: {
        color: 1416804,
				if (input == null) {
					title: "Commands",
					description: "Hello! I'm Bro Bot, Bro Time's personal Discord bot assistant. Take a look!",
	        fields: [{
	            name: "Information Commands",
	            value: help+"\n"+ping
	          },
	          {
	            name: "Role Join Commands",
	            value: freerole+"\n"+gamerole+"\n"+namecolor
	          },
	          {
	            name: "Post Commands",
	            value: postgamenight+", if they have the Game Night Host role.\n"+postqotd+", if they have the QOTD Host role"
	          },
	          {
	            name: "Utility Commands",
	            value: mt+", if they have Moderator permissions"
	          },
	          {
	            name: "Donator Commands",
	            value: cc
	          }
	        ],
				} else if (input == "customcolor") {
					title: `${pfx}customcolor`,
					description: "**Preforms:**"+cc+`\n**Requires:** Donator\n**Usage:** \`${pfx}customcolor\` --> \`create/delete\``,
				} else if (input == "ping") {
					title: `${pfx}ping`,
					description: "**Preforms:**"+ping+`\n**Requires:** Nothing\n**Usage:** \`${pfx}ping\``,
				} else if (input == "freerole") {
					title: `${pfx}freerole`,
					description: "**Preforms:**"+freerole+`\n**Requires:** Nothing\n**Usage:** \`${pfx}freerole (ANN/GW/QOTD)\``,
				} else if (input == "gamerole") {
					title: `${pfx}gamerole`,
					description: "**Preforms:**"+gamerole+`\n**Requires:** Nothing\n**Usage:** \`${pfx}gamerole (game name)\``,
				} else if (input == "namecolor") {
					title: `${pfx}namecolor`,
					description: "**Preforms:**"+namecolor+`\n**Requires:** Nothing/Plus/Premium/Deluxe\n**Usage:** \`${pfx}namecolor (color name)\``
				} else if (input == "postgamenight") {
					title: `${pfx}postgamenight`,
					description: "**Preforms:**"+postgamenight+`\n**Requires:** Game Night Host\n**Usage:** \`${pfx}postgamenight\` --> \`game\` --> \`link\` --> \`info\``
				} else if (input == "postqotd") {
					title: `${pfx}postqotd`,
					description: "**Preforms:**"+postqotd+`\n**Requires:** QOTD Host\n**Usage:** \`${pfx}postqotd (message)\``
				} else if (input == "mt") {
					title: `${pfx}mt`,
					description: "**Preforms:**"+mt+`\n**Requires:** Mod Permissions\n**Usage:** \`${pfx}mt (role name)\``
				} else if (input == "help") {
					title: `${pfx}help,
					description: "**Preforms:**"+help+`\n**Requires:** Nothing\n**Usage:** \`${pfx}help (command name)\``
				} else {
					call.message.reply(`Invalid Usage. Example: ${pfx}help help`)
				}
        footer: {
          icon_url: call.message.author.avatarURL,
          text: `Run by ${call.message.author.username}`
        }
      }
    });
  },
};
