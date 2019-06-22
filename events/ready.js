const config = require('../config');

exports.run = async (client) => {
    console.log(`Logged in as ${client.user.tag}`);
}