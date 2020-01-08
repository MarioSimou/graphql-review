import {findItem, updateUserPointer, updateProductPointer} from '../../utils'
import faker from 'faker'

const newUser = data => ({id: faker.random.uuid() , fName: null, lName: null, phone:null, country: null, products: [], ...data})
const newProduct = data => ({id: faker.random.uuid(), name: null, price: null, material: null, users: [], ... data})

export const createUser = (_,{data},{db}) => {
    const user = newUser(data)
    db.users.push(user)
    return user

}
export const updateUser = (_,{query,data},{db}) => {
    let user = findItem(query,...db.users)
    if(!user) throw new Error('User not found')
    user = { ...user, ...data}
    return user
}
export const deleteUser = (_,{query},{db}) => {
    let user = findItem(query,...db.users)
    if(!user) throw new Error('User not found')
    db.users = db.users.filter(dbUser => user.id !== dbUser.id)
    return user
}

export const createProduct = (_,{data},{db}) => {
    const product = newProduct(data)
    db.products.push(product)
    return product
}

export const updateProduct = (_,{query,data},{db}) => {
    let product = findItem(query,...db.products)
    if(!product) throw new Error('Product not found')
    product = {...product, ...data}
    return product
}

export const deleteProduct = (_,{query},{db}) => {
    const product = findItem(query, ...db.products)
    if(!product) throw new Error('Product not found')
    db.products = db.products.filter(productId => product.id !== productId)
    return product
}