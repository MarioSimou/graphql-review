import { GraphQLObjectType, GraphQLNonNull, GraphQLInt, GraphQLBoolean, GraphQLString } from 'graphql'
import Body from '../union/Body'

export default new GraphQLObjectType({
    name: 'ResponseType',
    description: 'A response object return for any request',
    fields: {
        success: {
            type: GraphQLNonNull(GraphQLBoolean),
            description: 'Boolean flag showing if the request succeeds or fails'
        },
        status: {
            type: GraphQLNonNull(GraphQLInt),
            description: 'HTTP Status code'
        },
        message: {
            type: GraphQLString,
            description: 'Message return from any error'
        },
        body: {
            type: Body,
            description: 'Response body'
        }
    }
})