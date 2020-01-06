import faker from "faker";
import { promisify } from "util";
import fs from "fs";
import path from 'path'

const fns = (fs => {
  const generateUser = () => ({
    id: faker.random.uuid(),
    fName: faker.name.firstName(),
    lName: faker.name.lastName(),
    job: faker.name.jobTitle(),
    country: faker.address.country(),
    phone: faker.phone.phoneNumber(),
    products: [],
  });

  const generateProduct = () => ({
    id: faker.random.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    material: faker.commerce.productMaterial(),
    users: [],
  });

  const writeJson = (fileName, data) =>
    promisify(fs.writeFile).call(
      fs,
      path.resolve(__dirname,`${fileName}.json`),
      JSON.stringify({ [fileName]: data },null,4),
      {
        encoding: "utf8",
        flag: "w+"
      }
    );
  const generateNumber = (min, max) => () =>
    Math.round(Math.random() * (max - min - 1)) + min;

  return { generateUser, generateProduct, writeJson, generateNumber };
})(fs);

const init = cb => cb();

init(async () => {
  try {
    const n = 100;
    const products = [];
    const users = [];
    const genUsersProductNumber = fns.generateNumber(0, 100);
    const genNumOfMatches = fns.generateNumber(0, 5);

    for (let i = 0; i < n; i++) {
      products.push(fns.generateProduct());
      users.push(fns.generateUser());
    }

    for(let user of users){
        const numOfMatches = genNumOfMatches()
        for(let i=0; i < numOfMatches; i++){
            const index = genUsersProductNumber()
            const product = products[index]
            product.users = [...product.users, user.id]
            user.products = [...user.products, product.id]
        }
    }

    await Promise.all([
      fns.writeJson("products", products),
      fns.writeJson("users", users)
    ]);
  } catch (e) {
    console.log("Error: ", e);
  }
});
