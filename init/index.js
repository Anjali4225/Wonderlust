const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust"

main().then(() => {
  console.log("connected to DB");
})
.catch((err) => {
  console.log(err);
})

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({}); 
 
   initData.data = initData.data.map((obj) => ({...obj, owner: "68811ad2f8a722a6cf4f3c75"}));
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
}


initDB();
//cd init then node index.js then cd ..