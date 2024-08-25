const { Client: AttClient } = require('att-client');
const bot = new AttClient(attConfig);


const mrMushroomHit = [];


bot.on('connect', async (connection) => {

  connection.subscribe(`PlayerStateChanged`, message => {
    const { state, user, isEnter } = message.data;

    if (state === 'Combat' && isEnter === true && user.username === username) {
      mrMushroomHit.push('Hit');
      setTimeout(function () {
          if (mrMushroomHit.includes('Hit')) {
              mrMushroomHit.splice(mrMushroomHit.indexOf('Hit'), 1);
          }
      }, 500);
  }
  const hitPlayer = mrMushroomHit.includes('Hit') && !user.username.startsWith(username) && state === "Combat" && isEnter === true;

  if (hitPlayer) {
    connection.send(`player teleport "*" ${hitPlayer}`);
    connection.send(`player kill ${hitPlayer}`);
  };

  });


});
bot.start();