const { Client: AttClient } = require('att-client');
const bot = new AttClient(attConfig);

const activePlayers = [];

var username = "username";

bot.on('connect', async (connection) => {

  connection.subscribe(`PlayerMovedChunk`, message => {
    const { player, newChunk, oldChunk } = message.data

    if (newChunk.startsWith(`Chunk 17-34`) && username === username) { 
      connection.send(`player message ${username} "Teleporting To Respawn" 4`);
      connection.send(`player teleport ${username} "RespawnPoint"`);
    };

    if (oldChunk.startsWith(`Chunk 21-33`) && username === username) { 
      connection.send(`Player set-stat ${username} speed 15`);
      connection.send(`Player set-stat ${username} damage 31`);
      connection.send(`Player god-mode ${username} true`);
      connection.send(`Player message ${username} "Stats Active" 5`);
    };

  });
});
bot.start();

/**
 * TODO:Make Neater Later
 */