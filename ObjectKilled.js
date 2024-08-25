const { Client: AttClient } = require('att-client');
const bot = new AttClient(attConfig);

const killMessages = ["AHHHHH", "I had a wife and 2 kids...", "What have you done?", "Why did you do this to me..?", "I just wanted to live...", "How could you?", "You're a monster...", "(Death sounds)", "NOOOOO!", "I DON'T WANNA DIE!", "I'm just a mushroom guy... How could you?"];

bot.on('connect', async (connection) => {

  connection.subscribe(`ObjectKilled`, message => {
    const { name, killerPlayer } = message.data;

    if (killerPlayer && name) {

      if (name.includes("Schmeechee")) {
        connection.send(`player message ${killerPlayer.id} "'${killMessages[Math.floor(Math.random() * killMessages.length)]}' - Schmeechee" 5`);
      };
    };
    
  });


});
bot.start();