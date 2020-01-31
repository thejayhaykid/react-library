// var fetch = require('node-fetch');
var moment = require('moment');
// const {promisify} = require('util');
// const getAsync = promisify(client.get).bind(client);
// const setAsync = promisify(client.set).bind(client);

async function fetchPlex() {
    const time = moment().format('MMMM Do YYYY, h:m:ss a');
    console.log(`${time} Format Plex`);
}

module.exports = fetchPlex;