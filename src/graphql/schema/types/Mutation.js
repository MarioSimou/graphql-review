import { GraphQLObjectType, GraphQLNonNull } from 'graphql'
import User from './User'
import * as inputs from './Input'
import * as resolvers from '../resolvers/Mutation'
import Response from './Response'

export default new GraphQLObjectType({
    name: 'Mutation',
    description: 'Describes all mutations allowed in the system',
    fields: {
        'createUser': {
            description: 'Allow the creation of a user',
            args: {
                data: {
                    type: inputs.creatUserDataInput,
                },
            },
            type: GraphQLNonNull(Response),
            resolve: resolvers.createUser,
        },
        'updateUser': {
            description: 'Allows the update of a user',
            args: {
                query: { type: inputs.query },
                data: { type: inputs.updatUserDataInput }
            },
            type: GraphQLNonNull(Response),
            resolve: resolvers.updateUser,
        },
        'deleteUser': {
            description: 'Allows the deletion of a user',
            args: {
                query: { type: inputs.query }
            },
            type: GraphQLNonNull(Response), 
            resolve: resolvers.deleteuser,
        }
    }
})