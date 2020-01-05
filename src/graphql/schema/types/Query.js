import {GraphQLObjectType, GraphQLString, GraphQLList, GraphQLNonNull} from 'graphql'
import * as Query from '../resolvers/Query'
import * as Input from './Input'
import Response from './Response'

export default new GraphQLObjectType({
    name: 'Query',
    description: 'The RootQueryType of the type system',
    fields: {
        getUsers: {
            description: 'Query that returns all users in the system',
            type: GraphQLNonNull(Response),
            resolve: Query.getUsers,
        },
        getUser: {
            description: 'Query that returns a user based on given parameters',
            args: {
                'query': {
                    description: 'Query parameter used to filter the users of the system',
                    type: Input.query,
                }
            },
            type: GraphQLNonNull(Response),
            resolve: Query.getUser,
        }
    }
})