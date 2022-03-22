
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
module.exports = {
  name: "ready",
  once: true,
  execute(client) {
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
    console.log(`Kullanıcı İsmi     : ${client.user.username}`);
    console.log(`Sunucular          : ${client.guilds.cache.size.toLocaleString()} Sunucu`);
    console.log(`Kullanıcılar       : ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} Kullanıcı`);
    console.log(`Durum              : ${client.user.presence.status}!`);
    console.log(`Ram Kullanımı      : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`);
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  },
};
