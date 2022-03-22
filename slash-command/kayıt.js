const { Modal, TextInputComponent, showModal } = require('discord-modals')
const db = require("inflames.db");

module.exports = {
  name: "kayıt",
  description: "Üye kayıt etmek için yetkililere özel komut.",
  async execute(interaction, client) {
    if(!db.kontrol(`yetkili_${interaction.guild.id}`)) interaction.reply(`Bu swde kayıt komutlarını kullanmak için kurucunun bir yetkili rolü ayarlaması gerekiyor.  <@${interaction.guild.ownerId}>`)
    if(!db.kontrol(`uyerolu_${interaction.guild.id}`)) interaction.reply(`Bu swde kayıt komutlarını kullanmak için kurucunun bir kayıtlı rolü ayarlaması gerekiyor.  <@${interaction.guild.ownerId}>`)
    let yetkili = db.get(`yetkili_${interaction.guild.id}`)
    if(!interaction.member.roles.cache.has(yetkili)) return interaction.reply("Bu komutu kullanmak için yeterli yetkiye sahip değilsin!");

    const modal = new Modal()
      .setCustomId('kayıt')
      .setTitle('Kayıt Menüsü')
      .addComponents(      
        new TextInputComponent()
        .setCustomId('Id')
        .setLabel('Id yazınız.')
        .setStyle('SHORT')
        .setMinLength(18)
        .setMaxLength(18)
        .setPlaceholder('762420804066738186')
        .setRequired(true),

        new TextInputComponent()
        .setCustomId('name')
        .setLabel('İsim yazınız.')
        .setStyle('SHORT')
        .setMinLength(3)
        .setMaxLength(20)
        .setPlaceholder('InFlames')
        .setRequired(true),
        
        new TextInputComponent()
        .setCustomId('age')
        .setLabel('Yaş yazınız.')
        .setStyle('SHORT')
        .setMinLength(1)
        .setMaxLength(2)
        .setPlaceholder('99')
        .setRequired(true),
      );
      showModal(modal, { client, interaction });
  }
}