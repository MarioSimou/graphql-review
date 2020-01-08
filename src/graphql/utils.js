export const findItem = (query, ...items) => {
    const matches = []
    for(let item of items){
        for(let [key,value] of Object.entries(query)){
            if(item[key] == value) matches.push(item)
        }
    }
    if(matches.length === 0) return null
    return matches.length > 1 ? matches : matches[0]
}

export const findManyItems = (fn => (...args) => {
    const items = fn(...args)
    return items instanceof Array ? items : [items]
})(findItem)

export const newItem = (item, data) => ({...item, ...data})

export const updateUserPointer = (user, data) => {
    for(let [key,value] of Object.entries(data)){
        if(user[key] !== undefined) user[key] = value
    }
    return user
}
export const updateProductPointer = (product,data) => {
    for(let [key,value] of Object.entries(data)){
        if(product[key] !== undefined) product[key] = value
    }
    return product
}

export const convertTo = (convRates => (price, to) => {
    const convPrice = convRates[to] * price
    if(!convPrice) return null
    return parseFloat(convPrice).toFixed(2)        
})({
    eur: 1.18,
    usd: 1.31,
    gbr: 1,
})