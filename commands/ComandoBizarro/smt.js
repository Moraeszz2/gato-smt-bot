const Discord = require('discord.js');

module.exports = {
    name: "oi",
    aliases: [""],

    run: async(client, message, args) => {
        let embed = new Discord.EmbedBuilder()
        .setColor("Random")
        .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() })
        .setDescription(`Ola  ${message.author}, SMT, Por Favor! 🥺🥺🥺🥺 `);
        message.reply({ embeds: [embed] })
    }

}