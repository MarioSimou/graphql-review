import {
    findManyItems,
    findItem
} from '../../utils'

export const getUsers = (_,{query},{db}) => {
    if(!query) return {success: true, status: 200, body: db.users[0]}
    return {success: true, status: 200, body: findManyItems(query,...db.users)[0]}
}
export const getUser = (_,{query},{db}) => {
    return {success: true, status: 200, body: findItem(query,...db.users)}
}
export const getProducts = (_,__,{db}) => {
    return {success: true, status: 200, body: db.products[0]}
}