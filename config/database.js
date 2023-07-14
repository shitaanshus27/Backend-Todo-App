const mongoose = require("mongoose");

//data is loaded in process object
require("dotenv").config();

const dbConnect = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("DB Connected Successfully"))
    .catch((error) => {
      console.log("DB is Not Connected");
      console.error(error.message);
      process.exit(1);
    });
};

module.exports = dbConnect;
