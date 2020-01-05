import { GraphQLObjectType, GraphQLNonNull, GraphQLBoolean, GraphQLInt, GraphQLString, GraphQLList } from 'graphql'
import User from './User'
export default new GraphQLObjectType({
    name: 'Response',
    fields: {
        success: {
            description: 'Determines whether the operation succeeds or fails',
            type: GraphQLNonNull(GraphQLBoolean),
        },
        status: {
            description: 'An HTTP status code that determines the result of the operation',
            type: GraphQLNonNull(GraphQLInt)
        },
        message: {
            description: 'A message that shows the cause of a mutation error',
            type: GraphQLString
        },
        user: {
            description: 'Any data returned from the mutation',
            type: User,
        },
        users: {
            type: GraphQLList(User),
        }
    }
})