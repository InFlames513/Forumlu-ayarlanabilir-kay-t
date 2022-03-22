//modüller baş
const fs = require("fs");
const Discord = require("discord.js");
const discord = require("discord.js");
const client = new discord.Client({intents: 32767});
const ayarlar = require("./ayarlar.json");
const db = require("inflames.db");
const discordModals = require('discord-modals');
discordModals(client);
client._cmd = new discord.Collection();
//modüller son
//kayıt form baş
client.on('modalSubmit', async (modal, interaction) => {
  if(modal.customId === 'kayıt') {
    const user = modal.guild.members.cache.get(modal.getTextInputValue('Id'));
    const name = modal.getTextInputValue('name');
    const age = modal.getTextInputValue('age');
        if(!user) return modal.reply("**Idsini girdiğin kullanıcı şu an sunucuda değil.**");
        var rol = db.get(`uyerolu_${modal.guild.id}`)
        user.roles.add(rol);
        user.setNickname(`${name} | ${age}`) //verilen ismi değiştirebilirsiniz tag vs ekleyebilirsiniz.
        modal.reply(`**${user.user.username}** isimli kullanıcı başarıyla **${name} | ${age}** ismi ile kayıt edildi.`)
    }
}); 
//kayıt form son
//command handler baş
client.once("ready", () => {
  console.log(`Logged in as @${client.user.tag}!`);
});

client.slashCommands = new Discord.Collection();
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./handler-mainkodları/", (err, files) => {
  if (err) console.error(err); //
  console.log(`${files.length} hand yüklenecek.`);
  files.forEach((f) => {
  require(`./handler-mainkodları/${f}`)(client);
  });
});
//command handler son
//token baş
client.login(ayarlar.token);
//token son
//ayrıntılı hata baş
process.on("warning", (e) => console.warn(e.stack));
//ayrıntılı hata son