const mongoose = require('mongose');


module.exports = () => {
    mongoose.connect(
      "mongodb+srv://App_3_guruh:Show1234@cluster0.j19gi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true }
    );

    const db = mongoose.connection;
    db.on('error', (err) => {
        console.log('mongodbga ulanishda hatobor', err);
    });

    db.on('open', () => {
        console.log('mongodbga onlayn ulandik');
    });

}