const axios = require('axios');

module.exports = {
    name: 'ai',
    description: 'An AI command powered by Neuronspike, modified by joshua apostol',
    aliases: ['globalGPT'],
    cooldown: 3,
    nashPrefix: false,
    execute: async (api, event, args) => {
        const input = args.join(' ');

        if (!input) {
            api.sendMessage(
                `💬 𝗔𝗡𝗢𝗧𝗛𝗘𝗥-𝗠𝗘.🎮\n━━━━━━━━━\n\n𝚌𝚘𝚖𝚖𝚎ｎｔ ｐ𝚞𝚒-ｊ𝚎 ｔ'𝚊𝚒ｄ𝚎ｒ 𝚊𝚞ｊ𝚘𝚞ｒｄｈ'𝚞𝚒?🌐`,
                event.threadID,
                event.messageID
            );
            return;
        }

        api.sendMessage(`☘️.𝘃𝗼𝘁𝗿𝗲 𝗱𝗲𝗺𝗮𝗻𝗱𝗲 𝗲𝘀𝘁 𝗲𝗻 𝗰𝗼𝘂𝗿𝘀...🎲`, event.threadID, event.messageID);

        try {
            const { data } = await axios.get(`https://api.easy-api.online/v1/globalgpt?q=${encodeURIComponent(input)}`);
            const response = data.content;

            const finalResponse = `💬 𝗔𝗡𝗢𝗧𝗛𝗘𝗥-𝗠𝗘\n━━━━━━━━━━\n\n${response}\n\n━━━━━━━━━━\n`;
            api.sendMessage(finalResponse, event.threadID, event.messageID);
        } catch (error) {
            api.sendMessage('An error occurred while processing your request, please try sending your question again', event.threadID, event.messageID);
            console.error(error);
        }
    },
};
