import {GraphQLObjectType, GraphQLNonNull} from 'graphql'
import queryUserManyInput from '../inputObjectTypes/queryUserManyInput'
import queryUserOneInput from '../inputObjectTypes/queryUserOneInput'
import * as resolvers from '../../resolvers/Query'
import Response from '../objectTypes/Response'

export default new GraphQLObjectType({
    name: 'QueryRootType',
    description: 'The RootQueryType of the type system',
    fields: {
        getUsers: {
            type: GraphQLNonNull(Response),
            args: {
                'query': {type: queryUserManyInput }
            },
            description: 'Returns a the whole collection of users',
            resolve: resolvers.getUsers,
        },
        getUser: {
            type: GraphQLNonNull(Response),
            args: {
                query: { type: GraphQLNonNull(queryUserOneInput) }
            } ,
            description: 'Returns a user from the collection',
            resolve: resolvers.getUser,
        },
        getProducts: {
            type: GraphQLNonNull(Response),
            description: 'Returns the whole collection of products',
            resolve: resolvers.getProducts,
        }
    }
})