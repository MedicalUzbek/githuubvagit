const mongoose = require('mongoose');


module.exports = () => {
    mongoose.connect(
      "mongodb+srv://App_3_guruh:123qwe123@cluster0.j19gi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
      { 
          useNewUrlParser: true, 
          useUnifiedTopology: true,
          useCreateIndex: true }
    );

    const db = mongoose.connection;
    db.on('open', () => {
        console.log('mongodbga onlayn ulandik ');
    });

    db.on('error', (err) => {
        console.log('mongodbga ulanishda hato', err );
    });

}