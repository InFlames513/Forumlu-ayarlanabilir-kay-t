const db = require("inflames.db");

module.exports = {
  name: "rol-yetkili",
  description: "Üye kayıt etmek için yetkililere özel komut.",
  option: {
        role: {
        name: "rol",
        description: "Yetkili rolünü etiketleyiniz.",
        required: true
     }
  },
  async execute(interaction, client) {
      if(interaction.member.id !== interaction.guild.ownerId) return interaction.reply("Bu komut sunucu sahibine özeldir!"); 
      let ytk = interaction.options.getRole('rol');
      db.yaz(`yetkili_${interaction.guild.id}`, ytk.id);
      interaction.reply(`**${ytk.name}** rolü başarıyla kayıt yetkilisi rolü olarak ayarlandı!`);
  }
}