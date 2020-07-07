module.exports = { 


    run: async (bot, message, args) => {

        //!mute @user 1s/m/h/d

let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
if(!tomute) return message.channel.send("Please tag user to mute!");
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Sorry, you don't have permissions to use this!");
if(tomute.hasPermission("MANAGE_MESSAGES")) return message.channel.send("I cant mute this user");
if (tomute.id === message.author.id) return message.channel.send("You cannot mute yourself!");
let muterole = message.guild.roles.find(`name`, "Odar Mute");

if(!muterole){
  try{
    muterole = await message.guild.createRole({
      name: "Odar Mute",
      color: "#000000",
      permissions:[]
    })
    message.guild.channels.forEach(async (channel, id) => {
      await channel.overwritePermissions(muterole, {
        SEND_MESSAGES: false,
        ADD_REACTIONS: false
      });
    });
  }catch(e){
    console.log(e.stack);
  }
}

let mutetime = args[1];
  if(!mutetime) return message.channel.send("You didn't specify a time!");

  await(tomute.addRole(muterole.id));
  message.reply(`<@${tomute.id}> foi mutado por ${ms(ms(mutetime))}`);

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> foi desmutado automaticamente!`);
  }, ms(mutetime));

  message.delete();


//send an embed to the modlogs channel
let embed = new RichEmbed()
    .setColor(redlight)
    .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
    .addField("Moderation:", "mute")
    .addField("Mutee:", tomute.user.username)
    .addField("Moderator:", message.author.username)
    .addField("Time:", mutetime)
    .addField("Date:", message.createdAt.toLocaleString())

let sChannel = message.guild.channels.find(c => c.name === "🔨・advertencias")
sChannel.send(embed)
    }
}


module.exports.help = {
    name: 'mute',
    aliases: ['m']
};