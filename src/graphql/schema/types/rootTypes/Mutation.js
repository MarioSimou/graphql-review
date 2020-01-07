import { GraphQLObjectType, GraphQLNonNull } from 'graphql'
import User from '../objectTypes/User'
import * as resolvers from '../../resolvers/Mutation'
import dataCreateUserInput from '../inputObjectTypes/dataCreateUserInput'
import dateUpdateUserInput from '../inputObjectTypes/dateUpdateUserInput'
import queryUserOneInput from '../inputObjectTypes/queryUserOneInput'

export default new GraphQLObjectType({
    name: 'Mutation',
    description: 'Describes all mutations allowed in the system',
    fields: {
        createUser: {
            args: {
                data: {
                    type: GraphQLNonNull(dataCreateUserInput),
                }
            },
            type: User(),
            resolve: resolvers.createUser,
        },
        updateUser: {
            args: {
                query: {
                    type: GraphQLNonNull(queryUserOneInput),
                },
                data: {
                    type: GraphQLNonNull(dateUpdateUserInput),
                },
            },
            type: User(),
            resolve: resolvers.updateUser,
        },
        deleteUser: {
            args: {
                query: {
                    type: GraphQLNonNull(queryUserOneInput),
                },
            },
            type: User(),
            resolve: resolvers.deleteUser,
        }
    }
})