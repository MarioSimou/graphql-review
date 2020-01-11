import { GraphQLUnionType } from 'graphql'
import ProductType,{Product}  from '../objectTypes/Product'
import UserType,{User} from '../objectTypes/User'

export default new GraphQLUnionType({
    name: 'BodyType',
    description: 'Response body',
    types: [UserType, ProductType],
    resolveType: (value,ctx) => {
        if(value instanceof Product) return ProductType
        if(value instanceof User) return UserType
        return null   
    }
})