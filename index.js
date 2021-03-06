const mongoose = require('mongoose');
const DB_URI = require('./config/config');
const app = require('./app');
const port = process.env.PORT || 3000;



async function start() {
  try {
    await mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    }, () => {
      console.log('Connected to DB');
    });
    app.listen(port, () => {
      console.log(`Server has been started on ${port} port.`);
    });
  } catch (err) {
    console.log(err);
  }
}

start();
