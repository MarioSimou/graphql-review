export const getUsers = (_,__,{db}) => {
    return db.users.map(user => ({...user, products: user.products.map(productId => db.products.find(product => product.id === productId))}))
}
export const getProducts = (_,__,{db}) => {
    return db.products
}