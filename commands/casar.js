const { MessageEmbed } = require("discord.js")
const fetch = require('node-fetch');
const snekfetch = require("snekfetch")

 


exports.run = async (client, message, args) => {
      if (message.mentions.users.size < 1) return message.channel.send("você não pode se casar com ninguém")
      let user = message.guild.member(message.mentions.users.first());
            message.channel.send(`${user} Você se casou com! ${message.author.username} ❤`,{
                embed: {
                    image: {
                        url: "https://i.imgur.com/GunPqfk.gif"
                    }
                }
            })
}
        
        
    


module.exports.help = {
    name: "casar"
  }