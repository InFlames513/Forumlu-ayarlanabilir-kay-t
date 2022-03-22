const db = require("inflames.db");

module.exports = {
  name: "rol-kayıtlı",
  description: "Üye kayıt etmek için yetkililere özel komut.",
  option: {
        role: {
          name: "rol",
          description: "Kayıtlı rolünü etiketleyiniz.",
          required: true
     }
  },
  async execute(interaction, client) {
      if(interaction.member.id !== interaction.guild.ownerId) return interaction.reply("Bu komut sunucu sahibine özeldir!"); 
      var uye = interaction.options.getRole('rol');
      db.yaz(`uyerolu_${interaction.guild.id}`, uye.id);
      interaction.reply(`**${uye.name}** rolü başarıyla kayıtlı rolü olarak ayarlandı!`);
  }
}