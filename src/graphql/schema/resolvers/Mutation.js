import {findItem} from '../../utils'
import {Product} from '../types/objectTypes/Product'
import {User} from '../types/objectTypes/User'
import faker from 'faker'

const newUser = user => new User({fName: user.fname, lName: user.lname,products:[], ...user})
const newProduct = product => new Product({users: [], ...product})

export const createUser = async (_,{data},{sql}) => {
    try {
        const [user] = await sql`INSERT INTO users ${sql(data)} RETURNING *`
        return {success: true, status: 200, body: newUser(user)}
    } catch(e){
        return {success: false, status: 400, message: e.message}
    }

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

export const createProduct = async (_,{data},{sql}) => {
    try {
        const [product] = await sql`INSERT INTO products ${sql(data)} RETURNING *`
        return {success: true, status: 200, body: newProduct(product) }    
    } catch(e){
        return {success: false, status: 400, body: e.message }
    }
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