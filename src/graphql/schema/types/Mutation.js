import { GraphQLObjectType, GraphQLNonNull } from 'graphql'
import User from './User'
import * as resolvers from '../resolvers/Mutation'
import * as inputs from './Inputs'

export default new GraphQLObjectType({
    name: 'Mutation',
    description: 'Describes all mutations allowed in the system',
    fields: {
        createUser: {
            args: {
                data: {
                    type: GraphQLNonNull(inputs.dataCreateUserInput),
                }
            },
            type: User,
            resolve: resolvers.createUser,
        },
        updateUser: {
            args: {
                query: {
                    type: GraphQLNonNull(inputs.queryUserOneInput),
                },
                data: {
                    type: GraphQLNonNull(inputs.dateUpdateUserInput),
                },
            },
            type: User,
            resolve: resolvers.updateUser,
        },
        deleteUser: {
            args: {
                query: {
                    type: GraphQLNonNull(inputs.queryUserOneInput),
                },
            },
            type: User,
            resolve: resolvers.deleteUser,
        }
    }
})