const { EmbedBuilder } = require('discord.js');
const config = require('../../config');

module.exports = {
  data: {
    name: 'viewaiusers',
    description: 'View allowed AI users (Owner only)'
  },
  async execute(client, message, args) {
    if (message.author.id !== config.discord.ownerId) {
      return message.reply({ content: '❌ Owner only command', allowedMentions: { repliedUser: false } });
    }
    
    try {
      const allowedUsers = client.allowedUsersManager.loadAllowedUsers();
      
      if (allowedUsers.length === 0) {
        return message.reply({ content: '📭 No users allowed for AI responses', allowedMentions: { repliedUser: false } });
      }
      
      const userList = allowedUsers.map((userId, index) => `${index + 1}. <@${userId}> (\`${userId}\`)`).join('\n');
      
      const embed = new EmbedBuilder()
        .setColor('Blue')
        .setTitle('🤖 Allowed AI Users')
        .setDescription(userList)
        .setFooter({ text: `Total: ${allowedUsers.length} users` });
      
      message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } });
    } catch (error) {
      message.reply({ content: `❌ Error: ${error.message}`, allowedMentions: { repliedUser: false } });
    }
  }
};
