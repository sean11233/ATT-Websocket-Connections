const { Client: AttClient } = require('att-client');
const bot = new AttClient(attConfig);

var username = "username";

bot.on('connect', async (connection) => {

  connection.subscribe(`PlayerKilled`, message => {
    const { killedPlayer, killerPlayer } = message.data;

    if (killerPlayer && killedPlayer) {
      
      if (killerPlayer.username === username) { 
        connection.send(`player message ${username} "Teleporting ${killedPlayer.username} to you" 4`);
        setTimeout(function() { connection.send(`player teleport "${killedPlayer}" "${killerPlayer}"`)}, 5000);
      };
    };
  });


});
bot.start();