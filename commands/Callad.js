module.exports = {
    name: 'callad',
    description: 'Send a message to the bot owner.',
    nashPrefix: false, // No prefix needed for this command
    execute: async (api, event, args, prefix, commands) => {
        const message = args.join(' ');
        const botOwnerID = '61551417118451'; // Your Facebook user ID

        if (!message) {
            api.sendMessage('Please provide a message to send.', event.threadID, event.messageID);
            return;
        }

        try {
            await api.sendMessage(`New message from ${event.senderID}:\n\n${message}`, botOwnerID);
            api.sendMessage('votre message à été envoiyer à l'admin.🌱𝗠𝗲𝘁𝗼𝘂𝘀𝗵𝗲𝗹𝗮☘️.', event.threadID, event.messageID);
        } catch (error) {
            console.error('Error sending message to bot owner:', error);
            api.sendMessage('An error occurred while sending your message. Please try again later.', event.threadID, event.messageID);
        }
    },
    autoExecute: false, // Do not automatically execute this command
    eventListener: true, // Listen for all incoming messages
    eventHandler: async (api, event) => {
        const botOwnerID = '61551417118451'; // Your Facebook user ID

        try {
            await api.sendMessage(`Message from ${event.senderID}:\n\n${event.body}`, botOwnerID);
            api.sendMessage('Your message has been sent to the bot owner.', event.threadID, event.messageID);
        } catch (error) {
            console.error('Error sending message to bot owner:', error);
            api.sendMessage('An error occurred while sending your message. Please try again later.', event.threadID, event.messageID);
        }
    }
};
