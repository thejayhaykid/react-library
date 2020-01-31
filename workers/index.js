var CronJob = require('cron').CronJob;
const fetchPlex = require('./tasks/fetch-plex');

new CronJob('*/15 * * * *', fetchPlex, null, true, 'America/New_York');