import {GraphQLObjectType, GraphQLString, GraphQLList, GraphQLNonNull} from 'graphql'
import User from './User'
import Product from './Product'
import * as resolvers from '../resolvers/Query'

export default new GraphQLObjectType({
    name: 'Query',
    description: 'The RootQueryType of the type system',
    fields: {
        getUsers: {
            type: GraphQLNonNull(GraphQLList(User)),
            description: 'Returns a the whole collection of users',
            resolve: resolvers.getUsers,
        },
        getProducts: {
            type: GraphQLNonNull(GraphQLList(Product)),
            description: 'Returns the whole collection of products',
            resolve: resolvers.getProducts,
        }
    }
})