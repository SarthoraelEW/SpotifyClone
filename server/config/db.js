const mongoose = require('mongoose');

mongoose
  .connect(
    "mongodb+srv://" +
      process.env.DB_USER_PASS +
      "@cluster0.y5hrz.mongodb.net/spotify-clone",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );

const conn = mongoose.connection;

let bucket;
conn.on("connected", () => {
  let db = mongoose.connections[0].db;
  bucket = new mongoose.mongo.GridFSBucket(db, {
    bucketName: "newBucket"
  });
  //console.log(bucket);
})

conn.on('error', () => console.error.bind(console, 'connection error'));

conn.once('open', () => console.info('Connection to Database is successful'));
  
module.exports = conn;