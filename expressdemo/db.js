const mongoose = require('mongoose');


let connectDatabase = async() =>{
    let conn = await mongoose.connect('mongodb://localhost/workoutdb', {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });

    console.log(`Database connected to ${conn.connection.host}`.cyan.underline.bold)
}

module.exports = connectDatabase

