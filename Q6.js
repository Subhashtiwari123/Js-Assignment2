// You are workin. for an e-commerce company, and you are .iven an object containin. product-related
// information. Your task is to print the product-related information details as shown in the ima.e below.

const productDetails = {
    name: "Apple 2020 MacBok Air Laptop",
    price: 8200,
    color: "Grey",
    hardDisk: "256 GB"
};

console.log("Below are the product details.");
for (let keys of Object.keys(productDetails)) {
  console.log(`${keys} : ${productDetails[keys]}`);
}