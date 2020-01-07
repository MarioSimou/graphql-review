import {
    findManyItems,
    findItem
} from '../../utils'

export const getUsers = (_,{query},{db}) => {
    if(!query) return db.users
    return findManyItems(query,...db.users)
}
export const getUser = (_,{query},{db}) => {
    return findItem(query,...db.users)
}
export const getProducts = (_,__,{db}) => {
    return db.products
}