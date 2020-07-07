const { MessageEmbed } = require("discord.js")
const fetch = require('node-fetch');
const snekfetch = require("snekfetch")

 


exports.run = async (client, message, args) => {
        if (message.mentions.users.size < 1) return message.channel.send("você não pode se divorciar de ninguém")
        let user = message.guild.member(message.mentions.users.first());
              message.channel.send(`${user} Você se divorciou de ${message.author.username} :broken_heart:`,{
                  embed: {
                      image: {
                          url: "https://i.imgur.com/BPS4A5M.gif"
                      }
                  }
              })
  }
        
        
    


  module.exports.help = {
    name: "divorcio"
  }