import faker from "faker";
import { promisify } from "util";
import fs from "fs";
import path from 'path'

const fns = (fs => {
  const generateUser = () => ({
    id: faker.random.uuid(),
    fName: faker.name.firstName(),
    lName: faker.name.lastName(),
    email: faker.internet.email(),
    dateOfBirth: faker.date.past(),
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

  const writeTypeFile = (ext, toType) => (fileName, data) =>
    promisify(fs.writeFile).call(
      fs,
      path.resolve(__dirname,`${fileName}.${ext}`),
      toType(data),
      {
        encoding: "utf8",
        flag: "w+"
      }
    )

  const writeJson = writeTypeFile('json', data => JSON.stringify(data,null,4))
  const writeCSV = writeTypeFile('csv', data => data.map(item => Object.values(item).join(',')).join("\n"))

  const generateNumber = (min, max) => () =>
    Math.round(Math.random() * (max - min - 1)) + min;

  return { generateUser, generateProduct, write: { json: writeJson, csv: writeCSV }, generateNumber };
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
      fns.write.csv("products", products), // array
      fns.write.csv("users", users), // array
    ])
    // await fns.write.json("data", {products, users})
  } catch (e) {
    console.log("Error: ", e);
  }
});
