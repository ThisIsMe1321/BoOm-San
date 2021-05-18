module.exports = {
    name: 'kick',
    description: "this is a ping command!",
    execute(message, args){
if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Invalid Permissions")
let User = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0])
if (!User) return message.channel.send("Invalid User")
if (User.hasPermission("KICK_MEMBERS")) return message.reply("Invalid Permissions")
let kickReason = args.join(" ").slice(22);
if (!kickReason) {
  kickReason = "None"
}

User.kick({reason: kickReason})
    }
}