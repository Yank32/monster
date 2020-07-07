const { MessageEmbed } = require("discord.js")
const fetch = require('node-fetch');
const snekfetch = require("snekfetch")

 


exports.run = async (client, message, args) => {
        if (message.mentions.users.size < 1) return message.channel.send("você não pode dar palmas para ninguém")
        let user = message.guild.member(message.mentions.users.first());
              message.channel.send(`${user} Você acaba de receber aplausos de  ${message.author.username} :clap:`,{
                  embed: {
                      image: {
                          url: "https://i.imgur.com/pdt4kda.gif"
                      }
                  }
              })
  }
        
        
    


  module.exports.help = {
    name: "palmas"
  }