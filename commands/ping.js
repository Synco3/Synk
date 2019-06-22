module.exports.run = async (client, msg, args) => {
    msg.delete(0);
        msg.channel.send(`${client.ping}ms`).catch(e => require("../utils/error.js").error(client, e)).then(msg => msg.delete(5000));
    }
    module.exports.help = {
        name: 'ping',
        description: 'Shows the bots ping'
}