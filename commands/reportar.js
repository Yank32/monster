module.exports = { 
    config: {
        name: "reportar",
        description: "reportar membros do servidor",
        usage: "-reportar <user> <reason>",
        accessableby: "Members",
    },
    run: async (client, message, args) => {

        message.delete()
        // mentioned or grabbed user
        let target = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if(!target) return message.channel.send("Mensione um usuario").then(m => m.delete(15000))

        // reasoning definition
        let reason = args.slice(1).join(" ")
        if(!reason) return message.channel.send(`Qual o movito do reporte? **${target.user.tag}**`).then(m => m.delete(15000))

        // grab reports channel
        let sChannel = client.channels.cache.get("728889389182091264");

        // send to reports channel and add tick or cross

        message.channel.send("Seu reporte foi enviado aos staffs,obrigado e tenha paciencia ate que seja investigado!").then(m => m.delete(15000))
        sChannel.send(`**${message.author.tag}** reportou **${target.user.tag}** por **${reason}**.`).then(async msg => {
            await msg.react("✅")
            await msg.react("❌")
        })

  }
}