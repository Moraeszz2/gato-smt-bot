const Discord = require('discord.js');

module.exports = {
    name: "ping",//Nome do comando
    aliases: [""],

    run: async(client, message, args) => {
        let embed = new Discord.EmbedBuilder()
        .setColor("Random")
        .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() })
        .setDescription(`Ola ${message.author}, seu ping está: \`Carregando...\`.`);

        let embed2 = new Discord.EmbedBuilder()
        .setColor("Random")
        .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() })
        .setDescription(`Ola, ${message.author}, seu ping está em \`${client.ws.ping}\`.`);

        message.reply({ embeds: [embed] }).then(msg => {
            setTimeout( () => {
                msg.edit({ embeds: [embed2] })  
            }, 3000)
        })
    }

}