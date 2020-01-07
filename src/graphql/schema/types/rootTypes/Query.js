import {GraphQLObjectType, GraphQLString, GraphQLList, GraphQLNonNull} from 'graphql'
import User from '../objectTypes/User'
import Product from '../objectTypes/Product'
import queryUserManyInput from '../inputObjectTypes/queryUserManyInput'
import queryUserOneInput from '../inputObjectTypes/queryUserOneInput'
import * as resolvers from '../../resolvers/Query'


export default new GraphQLObjectType({
    name: 'Query',
    description: 'The RootQueryType of the type system',
    fields: {
        getUsers: {
            type: GraphQLNonNull(GraphQLList(User())),
            args: {
                'query': {type: queryUserManyInput }
            },
            description: 'Returns a the whole collection of users',
            resolve: resolvers.getUsers,
        },
        getUser: {
            type: User(),
            args: {
                query: { type: queryUserOneInput }
            } ,
            description: 'Returns a user from the collection',
            resolve: resolvers.getUser,
        },
        getProducts: {
            type: GraphQLNonNull(GraphQLList(Product())),
            description: 'Returns the whole collection of products',
            resolve: resolvers.getProducts,
        }
    }
})