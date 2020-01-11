import {User} from '../types/objectTypes/User'
import models from '../../../models'
import {createWhereClause} from '../../utils'

export const getUsers = async (_,__,{pgClient}) => {
   try {
    const {rows:users} = await pgClient.query(
        ...models.User
        .select(
            models.User.columns.id,
            models.User.columns.fName,
            models.User.columns.lName,
            models.User.columns.email,
            models.User.columns.dob,
            models.User.columns.job,
            models.User.columns.country,
            models.User.columns.phone,
        )
        .from()
        .end
    )

    const {rows:userProducts} = await pgClient.query(
        ...models.UserProduct
        .select(
            models.UserProduct.columns.userId,
            models.UserProduct.columns.productId
        )
        .from()
        .where(
            models.UserProduct.columns.userId.in(...users.map(user => user.id))
        )
        .end
    )

    const userProductsHash = userProducts.reduce((m,userProduct)=> {
        if(m.has(userProduct.userId)) m.get(userProduct.userId).push(userProduct.productId)
        else m.set(userProduct.userId, [userProduct.productId])
        return m
    },new Map())

    const allUsers = users.map(user => new User({...user, products: userProductsHash.get(user.id)}))
    return {success:true, status:200, body: allUsers}
   } catch(e){
       return {success:false,status:400,message: e.message}
   }
}
export const getUser = async (_,{query},{pgClient}) => {
    try {
        const {rows:[user]} = await pgClient.query(
            ...models.User
            .select(
                models.User.columns.id,
                models.User.columns.id,
                models.User.columns.fName,
                models.User.columns.lName,
                models.User.columns.email,
                models.User.columns.dob,
                models.User.columns.job,
                models.User.columns.country,
                models.User.columns.phone,
            )
            .from()
            .where(createWhereClause(models.User,query))
            .end
        )
        if(!user) throw new Error('User not found')

        const {rows:products} = await pgClient.query(
            ...models.UserProduct
            .select(
                models.UserProduct.columns.productId
            )
            .from()
            .where(
                models.UserProduct.columns.userId.equal(user.id)
            )
            .end
        )
        return {success: true, status: 200, body: [new User({...user, products: products.map(product => product.productId)})]}        
    }catch(e){
        return {success:false, status:400, message: e.message}
    }
}