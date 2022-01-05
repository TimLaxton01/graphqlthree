const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const { once } = require("lodash");
const dotenv = require("dotenv");
require("dotenv").config();
const cors = require("cors");

dotenv.config();

const app = express();

app.use(cors());

const database =
  "mongodb+srv://TimLaxton:123abc@movie.etjd2.mongodb.net/MovieQL?retryWrites=true&w=majority" ||
  8000;
mongoose.connect(database);
mongoose.connection.once("open", () => {
  console.log("Connected");
});

// mongoose
//   .connect(`${process.env.CONNECTION_URL}`, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//   })
//   .then((connection) => {
//     console.log("Connected to MongoDB");
//   })
//   .catch((error) => {
//     console.log(error.message);
//   });

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(8000, () => {
  console.log("Server is running on Port 8000");
});
