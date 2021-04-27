const db = require("../db");
const Brand = require("../models/brand");
const Product = require("../models/product");

db.on("error", console.error.bind(console, "MongoDB Connection Error!"));

const main = async () => {
  const brand1 = await new Brand({
    name: "Apple",
    url: "https://www.apple.com",
  });
  brand1.save();
  const brand2 = await new Brand({
    name: "Vespa",
    url: "https://www.vespa.com",
  });
  brand2.save();
  const brand3 = await new Brand({
    name: "New Balance",
    url: "https://www.newbalance.com",
  });
  brand3.save();
  const brand4 = await new Brand({
    name: "Tribe",
    url: "https://www.tribebicycles.com",
  });
  brand4.save();
  const brand5 = await new Brand({
    name: "Stumptown",
    url: "https://www.stumptowncoffee.com",
  });
  brand5.save();

  const products = [
    {
      title: "AirPods",
      description: "https://www.apple.com/airpods",
      price: "250",
      brand: brand1._id,
    },
  ];

  await Book.insertMany(books);
  console.log("Books Created with Publisher!");
};

const run = async () => {
  await main();
  db.close();
};

run();
