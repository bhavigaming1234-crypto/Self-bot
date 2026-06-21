const config = require('../../config');

module.exports = {
  data: {
    name: 'removetrigger',
    description: 'Remove trigger message (Owner only)'
  },
  async execute(client, message, args) {
    if (message.author.id !== config.discord.ownerId) {
      return message.reply({ content: '❌ Owner only command', allowedMentions: { repliedUser: false } });
    }
    
    const trigger = args.join(' ').toLowerCase();
    if (!trigger) {
      return message.reply({ content: '❌ Please provide a trigger name', allowedMentions: { repliedUser: false } });
    }
    
    try {
      const triggers = client.triggerManager.loadTriggers();
      if (!triggers[trigger]) {
        return message.reply({ content: `⚠️ Trigger \`${trigger}\` not found`, allowedMentions: { repliedUser: false } });
      }
      
      delete triggers[trigger];
      client.triggerManager.saveTriggers(triggers);
      
      message.reply({ content: `✅ Removed trigger \`${trigger}\``, allowedMentions: { repliedUser: false } });
    } catch (error) {
      message.reply({ content: `❌ Error: ${error.message}`, allowedMentions: { repliedUser: false } });
    }
  }
};
