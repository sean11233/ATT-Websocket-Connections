const { Client: AttClient } = require('att-client');
const bot = new AttClient(attConfig);

const activePlayers = [];

bot.on('connect', async (connection) => {

  connection.subscribe(`AtmBalanceChanged`, message => {
    const { user, Change, CurrentBalance } = message.data;

    if (activePlayers && Change) {
      connection.send(`player message ${user.username} "${CurrentBalance}"`);
    };

  });

});
bot.start();