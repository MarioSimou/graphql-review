import {findItem, updateUserPointer} from '../../utils'
import faker from 'faker'

const newUser = data => ({id: faker.random.uuid() , fName: null, lName: null, phone:null, country: null, products: [], ...data})

export const createUser = (_,{data},{db}) => {
    const user = newUser(data)
    db.users.push(user)
    return user

}
export const updateUser = (_,{query,data},{db}) => {
    let user = findItem(query,...db.users)
    if(!user) throw new Error('User not found')
    updateUserPointer(user, data)
    return user
}
export const deleteUser = (_,{query},{db}) => {
    let user = findItem(query,...db.users)
    if(!user) throw new Error('User not found')
    db.users = db.users.filter(dbUser => user.id !== dbUser.id)
    return user
}