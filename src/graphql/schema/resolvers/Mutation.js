import {Product} from '../types/objectTypes/Product'
import {User} from '../types/objectTypes/User'
import models from '../../../models'
import {createWhereClause, createInsertClause, createUpdateClause} from '../../utils'

export const createUser = async (_,{data},{pgClient}) => {
    try {
        const {rows:[user]} = await pgClient.query(...models.User
            .insertInto()
            .values(createInsertClause(models.User,data))
            .returning(
                models.User.columns.id,
                models.User.columns.fName,
                models.User.columns.lName,
                models.User.columns.email,
                models.User.columns.dob,
                models.User.columns.job,
                models.User.columns.country,
                models.User.columns.phone,
            )
            .end)
        console.log('USER: ', user)
        return {success: true, status: 200, body: [new User(user)]}
    } catch(e){
        return {success: false, status: 400, message: e.message}
    }

}

export const updateUser = async (_,{query,data:{products, ...other}},{pgClient}) => {
    try {
        const {rows:[user]} = await pgClient.query(...models.User
            .select(models.User.columns.id)
            .from()
            .where(createWhereClause(models.User,query))
            .end
        )
        if(!user) throw new Error('User not found')

        const {rows:[updatedUser]} = await pgClient.query(...models.User
            .update()
            .set(...createUpdateClause(models.User,other))
            .returning(
                models.User.columns.id,
                models.User.columns.fName,
                models.User.columns.lName,
                models.User.columns.email,
                models.User.columns.dob,
                models.User.columns.job,
                models.User.columns.country,
                models.User.columns.phone,
            )
            .end
        )

        if(products) {
            for(let productId of products){
                const {rows:[product]} = await pgClient.query(
                    ...models.Product
                    .select(
                        models.Product.columns.id
                    )
                    .from()
                    .where(
                        models.Product.columns.id.equal(productId)
                    )
                    .end
                )
                if(!product) throw new Error(`Product with id ${productId} does not exist`)

                await pgClient.query(
                    ...models.UserProduct
                    .insertInto()
                    .values([
                        models.UserProduct.columns.userId.equal(user.id),
                        models.UserProduct.columns.productId.equal(productId)
                    ])
                    .end
                )
            }
        }
        
        return {success: true, status: 200, body: [new User({...updatedUser, products})]}
    } catch(e){
        return {success: false, status: 400, message: e.message}
    }
}
export const deleteUser = async (_,{query},{pgClient}) => {
    try {
        const {rows:[user]} = await pgClient.query(...models.User
            .select(models.User.columns.id)
            .from()
            .where(createWhereClause(models.User,query))
            .end
        )
        if(!user) throw new Error('User not found')
    
        await pgClient.query('BEGIN')
    
        const {rows:userProducts} = await pgClient.query(
            ...models.UserProduct
            .deleteFrom()
            .where(
                models.UserProduct.columns.userId.equal(user.id)
            )
            .returning(
                models.UserProduct.columns.productId
            )
            .end
        )

        const {rows:[deletedUser]} = await pgClient.query(...models.User
            .deleteFrom()
            .where(createWhereClause(models.User, query))
            .returning(
                models.User.columns.id,
                models.User.columns.fName,
                models.User.columns.lName,
                models.User.columns.email,
                models.User.columns.dob,
                models.User.columns.job,
                models.User.columns.country,
                models.User.columns.phone,
            )
            .end
        )
        await pgClient.query('COMMIT')
        return {success: true, status: 200, body: [new User({...deletedUser, products: userProducts.map(userProduct => userProduct.productId) })]}
    }catch(e){
        console.log('ERROR: ', e )
        await pgClient.query('ROLLBACK')
        return {success: false, status: 400, message: e.message }
    }
}

export const createProduct = async (_,{data},{pgClient}) => {
    try {
        const {rows:[product]} = await pgClient.query(...models.Product
            .insertInto()
            .values(createInsertClause(models.Product,data))
            .returning(
                models.Product.columns.id,
                models.Product.columns.name,
                models.Product.columns.price,
                models.Product.columns.material
            )
            .end)
        return {success: true, status: 200, body: [new Product(product)] }    
    } catch(e){
        return {success: false, status: 400, message: e.message }
    }
}