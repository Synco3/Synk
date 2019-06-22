const config = require('../config.json');
const prefix = config.prefix;
exports.run = async (client, msg) => {
        if (msg.content === config.token) {
            msg.delete(0);
        }
        if (msg.author.bot) return;
        if (msg.channel.type === "dm") return;

        let messageArray = msg.content.split(/\s+/g);
        let command = messageArray[0].toLowerCase();
        let args = messageArray.slice(1);

        if (!command.startsWith(prefix)) return;
        let cmd = client.commands.get(command.slice(prefix.length));
        if (cmd) cmd.run(client, msg, args);
}
