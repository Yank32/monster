const Discord = module.require('discord.js');

var fortunes = [
    "Sim",
    "Não",
    "Talvez",
    "Não sei",
    "Pode ser que sim",
    "Pode ser que não",
    "Claro",
    "Claro que não",
    "Ninguem é Perfeito",
    "Auh essa eu não sei a resposta ;-;",
    "Sim mais eu o amo mesmo assim",
    "Proxima pergunta por favor '-'",
    "Vai na fé",
    "Ah claro pode ser",
    "Eita melhor eu nem falar nada",
    "Sei não mais compra o vip ai",
    "Se comprar o vip eu te falo"
];


module.exports.run = async (client, message, args) => {
if(message.guild.systemChannelID === '725872394471866378'){

}
  
if(!args[0]){
  return message.channel.send(":erro: " + "| Digite uma pergunta que você gostaria de responder")
}
if (args[0]) message.channel.send(fortunes[Math.floor(Math.random() * fortunes.length)]);
else message.channel.send(":erro: " + "| Eu não sou capaz de ler isso :(");
}

module.exports.help = {
    name: "pergunta"
}