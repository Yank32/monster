const Discord = require('discord.js');
 
exports.run = (client, message, args) => {
 
    var embed = new Discord.MessageEmbed()
 
    .setTitle(`PING DO BOT`)
    .setDescription(`Meu ping esta em: **${parseInt(bot.ws.ping)}**`)
 
    message.channel.send(embed)
}
 
exports.help = {
    name: 'ping'
}