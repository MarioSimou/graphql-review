import { GraphQLUnionType, GraphQLList } from 'graphql'
import ProductType,{Product}  from '../objectTypes/Product'
import UserType,{User} from '../objectTypes/User'

export default new GraphQLUnionType({
    name: 'BodyType',
    description: 'Response body',
    types: [UserType, ProductType],
    resolveType: (value,ctx) => {
        console.log(value[0])
        if(value instanceof Product) return ProductType
        if(value instanceof User) return UserType
        if(value instanceof Array && value[0] instanceof Product) {
            console.log('return product')
            console.log('id: ', value.length)
            return ProductType
        }
        if(value instanceof Array && value[0] instanceof User) {
            console.log('returning users')
            return UserType     
        }
        console.log('continuing')
        return null   
    }
})