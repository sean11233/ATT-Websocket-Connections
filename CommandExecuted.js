const { Client: AttClient } = require('att-client');
const bot = new AttClient(attConfig);



bot.on('connect', async (connection) => {

  connection.subscribe(`CommandExecuted`, message => {
    const { Command, WasSuccessful, Message } = message.data;

    if (Command === 'Respawn all') {
      connection.send(`player teleport * RespawnPoint`);
    };

  });

});
bot.start();