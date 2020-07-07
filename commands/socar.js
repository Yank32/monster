const { MessageEmbed } = require("discord.js")
const fetch = require('node-fetch');
const snekfetch = require("snekfetch")

 


exports.run = async (client, message, args) => {
        if (message.mentions.users.size < 1) return message.channel.send("você não pode dar um soco em ninguém")
      let user = message.guild.member(message.mentions.users.first());
            message.channel.send(`${user} Você recebeu um soco de ${message.author.username} ❤`,{
                embed: {
                    image: {
                        url: "https://i.imgur.com/9BBkTv5.gif"
                    }
                }
            })
}
        
        
    
module.exports.help = {
    name: 'socar'
}
