const { Client: AttClient } = require('att-client');
const bot = new AttClient(attConfig);



bot.on('connect', async (connection) => {

  connection.subscribe(`InventoryChanged`, message => {
    const { user } = message.data;
  });


});
bot.start();