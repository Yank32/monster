const Discord = require("discord.js");
 
exports.run = (client, message, args) => {
 
    var membro = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if (!membro) return message.reply(`mencione um usuario! ex.: !ban @membro [motivo]`)
    if (membro === message.member) return message.reply(`vc nao pode banir vc mesmo.`)
 
    var motivo = args.slice(1).join(" ");
    if (!motivo) return message.reply(`escreva o motivo! ex.: !ban @membro [motivo]`)
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply(`vc precisa da permissao **Banir Membros**.`)
 
    var canal = client.channels.cache.get("724994006584655936");
 
    message.channel.send(`opa, vc realmente deseja punir esse usuario?`).then(msg => {
        msg.react("👍")
 
        let filtro = (reaction, usuario) => reaction.emoji.name === "👍" && usuario.id === message.author.id;
        let coletor = msg.createReactionCollector(filtro, {max: 1})
 
        coletor.on("collect", cp => {
            cp.remove(message.author.id);
            canal.send(`**MEMBRO PUNIDO**\n\nMembro: \`${membro.user.username}\`\nMotivo: **${motivo}**`)
            membro.ban();
        })
    })
}
 
exports.help = {
    name: 'ban'
}