module.exports = {
  name: 'mention',
  description: 'Responds when "𝘄𝗮𝗹𝗸𝗲𝗿," "𝗠𝗲𝘁𝗼𝘂𝘀𝗵𝗲𝗹𝗮," or "𝗠𝗲𝗴𝗮𝗻 𝗮𝗲" is mentioned',
  nashPrefix: false,
  execute(api, event, args) {
    const message = event.body.toLowerCase();
    if (message.includes('josh') || message.includes('𝘄𝗮𝗹𝗸𝗲𝗿') || message.includes('𝘄𝗮𝗹𝗸𝗲𝗿 𝗺𝗲𝘁𝗼𝘂𝘀𝗵𝗲𝗹𝗮..🎯')) {
      api.sendMessage("𝗗𝗼𝗻'𝘁🕸 𝗰𝗮𝗹𝗹🎮 𝗺𝘆🍵 𝗺𝗮𝘀𝘁𝗲𝗿🌐, 𝗱𝘂𝗱𝗲🥇", event.threadID, event.messageID);
    }
  },
};
