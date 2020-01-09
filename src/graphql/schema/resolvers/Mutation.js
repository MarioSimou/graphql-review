import {findItem} from '../../utils'
import {Product} from '../types/objectTypes/Product'
import {User} from '../types/objectTypes/User'
import faker from 'faker'

const newUser = data => new User({id: faker.random.uuid() , fName: null, lName: null, phone:null, country: null, products: [], ...data})
const newProduct = data => new Product({id: faker.random.uuid(), name: null, price: null, material: null, users: [], ... data})

export const createUser = (_,{data},{db}) => {
    const user = newUser(data)
    db.users.push(user)
    return {success: true, status: 200, body: user}

}
export const updateUser = (_,{query,data},{db}) => {
    let user = findItem(query,...db.users)
    if(!user) throw new Error('User not found')
    user = new User({ ...user, ...data})
    return {success: true, status: 200, body: user}
}
export const deleteUser = (_,{query},{db}) => {
    let user = findItem(query,...db.users)
    if(!user) throw new Error('User not found')
    db.users = db.users.filter(dbUser => user.id !== dbUser.id)
    return {success: true, status: 200, body: user }
}

export const createProduct = (_,{data},{db}) => {
    const product = newProduct(data)
    db.products.push(product)
    return {success: true, status: 200, body: product }
}

export const updateProduct = (_,{query,data},{db}) => {
    let product = findItem(query,...db.products)
    if(!product) throw new Error('Product not found')
    product = new Product({...product, ...data})
    return {success: true, status: 200, body: product }
}

export const deleteProduct = (_,{query},{db}) => {
    const product = findItem(query, ...db.products)
    if(!product) throw new Error('Product not found')
    db.products = db.products.filter(productId => product.id !== productId)
    return {success: true, status: 200, body: product }
}