import {GraphQLObjectType, GraphQLID, GraphQLNonNull, GraphQLString} from 'graphql'
import {Node,Timestamp} from './Interface'

export default new GraphQLObjectType({
    name: 'User',
    interfaces: [ Node, Timestamp ],
    description: 'A user entity in the system',
    fields: {
        'id': {
            type: GraphQLID,
            description: 'A unique identifier of a user'
        },
        'username': {
            type: GraphQLNonNull(GraphQLString),
            description: 'A name assigned to each user. A username is unique for each user'
        },
        'email': {
            type: GraphQLNonNull(GraphQLString),
            description: 'An email address assigned to each user. An email is unique for each user'
        },
        'createdAt': {
            type: GraphQLNonNull(GraphQLString),
            description: 'The time of creation of a user express in ISOString'
        },
        'updatedAt': {
            type: GraphQLNonNull(GraphQLString),
            description: 'The time of update of a user express in ISOString'
        }
    },
})