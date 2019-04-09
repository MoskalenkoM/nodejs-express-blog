/*eslint no-process-exit: "off"*/
const app = require('./app');
const database = require('./config/mongoose');
const config = require('./config/connect');

database()
  .then(info => {
    console.log(`Connect to ${info.host}:${info.port}/${info.name}`);
    app.listen(config.PORT, () => console.log(`Example app listening on port ${config.PORT}!`));
  })
  .catch(e => {
    console.error('Unable to connect to database');
    console.error(e);
    process.exit(1);
  });
