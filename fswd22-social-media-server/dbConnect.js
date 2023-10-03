const mongoose = require("mongoose");
module.exports = async () => {
  const mongoUri =
  // authentisocialapp
    "mongodb+srv://aj357218:TKlRwtMUfuySrZEw@cluster0.qaptegw.mongodb.net/?retryWrites=true&w=majority";
  // TKlRwtMUfuySrZEw
 
  try {
    const connect = await mongoose.connect(mongoUri, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`monogdb connected : ${connect.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
