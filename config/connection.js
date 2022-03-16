const { connect, connection } = require("mongoose");
//connect to mongoDB
const connectionString =
  process.env.MONGODB_URI || "mongodb://localhost:27017/socialNetworkDb";

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
