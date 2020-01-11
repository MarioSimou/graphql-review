import { GraphQLObjectType, GraphQLNonNull } from 'graphql'
import * as resolvers from '../../resolvers/Mutation'
import dataCreateUserInput from '../inputObjectTypes/dataCreateUserInput'
import dateUpdateUserInput from '../inputObjectTypes/dateUpdateUserInput'
import queryUserOneInput from '../inputObjectTypes/queryUserOneInput'
import dataCreateProductInput from '../inputObjectTypes/dataCreateProductInput'
import Response from '../objectTypes/Response'

export default new GraphQLObjectType({
    name: 'MutationRootType',
    description: 'Describes all mutations allowed in the system',
    fields: {
        createUser: {
            args: {
                data: {
                    type: GraphQLNonNull(dataCreateUserInput),
                }
            },
            type: GraphQLNonNull(Response),
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
            type: GraphQLNonNull(Response),
            resolve: resolvers.updateUser,
        },
        deleteUser: {
            args: {
                query: {
                    type: GraphQLNonNull(queryUserOneInput),
                },
            },
            type:GraphQLNonNull(Response),
            resolve: resolvers.deleteUser,
        },
        createProduct: {
            args: {
                data: {
                    type: GraphQLNonNull(dataCreateProductInput),
                }
            },
            type: GraphQLNonNull(Response),
            resolve: resolvers.createProduct,
        },
    }
})