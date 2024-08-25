const { Client: AttClient } = require('att-client');
const bot = new AttClient(attConfig);

const activePlayers = [];
const newPlayers = [];

bot.on('connect', async (connection) => {

  connection.subscribe(`PlayerJoined`, message => {
    const { user, position } = message.data;

/**
* Logs A player every time a player makes connection of their server.
*/
    if ( user.username != undefined) { 
      activePlayers.push(user.username);
      console.log(`${user.username} Has made connection to ${connection.server.name}.`); 
      console.log(activePlayers.length + ` are online globally.`);
    };

  });


});
bot.start();

/**
 * TODO: Later make Code Neater.
 */