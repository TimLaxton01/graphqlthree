const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const { once } = require("lodash");
require("dotenv").config();

const app = express();

// const database = process.env.CONNECTION_URI || 8000;
// mongoose.connect(database);
// mongoose.connection.once("open", () => {
//   console.log("Connected");
// });

mongoose
  .connect(
    "mongodb+srv://TimLaxton:123abc@movie.etjd2.mongodb.net/MovieQL?retryWrites=true&w=majority"
  )
  .then((connection) => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log(error.message);
  });

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
