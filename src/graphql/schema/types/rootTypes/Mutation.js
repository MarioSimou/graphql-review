import { GraphQLObjectType, GraphQLNonNull } from 'graphql'
import User from '../objectTypes/User'
import * as resolvers from '../../resolvers/Mutation'
import dataCreateUserInput from '../inputObjectTypes/dataCreateUserInput'
import dateUpdateUserInput from '../inputObjectTypes/dateUpdateUserInput'
import queryUserOneInput from '../inputObjectTypes/queryUserOneInput'
import dataCreateProductInput from '../inputObjectTypes/dataCreateProductInput'
import dataUpdateProductInput from '../inputObjectTypes/dataUpdateProductInput'
import queryProductOneInput from '../inputObjectTypes/queryProductOneInput'
import Product from '../objectTypes/Product'

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
            type: User,
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
            type: User,
            resolve: resolvers.updateUser,
        },
        deleteUser: {
            args: {
                query: {
                    type: GraphQLNonNull(queryUserOneInput),
                },
            },
            type: User,
            resolve: resolvers.deleteUser,
        },
        createProduct: {
            args: {
                data: {
                    type: GraphQLNonNull(dataCreateProductInput),
                }
            },
            type: Product,
            resolve: resolvers.createProduct,
        },
        updateProduct: {
            args:{
                query: {
                    type: GraphQLNonNull(queryProductOneInput)
                },
                data: {
                    type: GraphQLNonNull(dataUpdateProductInput)
                }
            },
            type: Product,
            resolve: resolvers.updateProduct
        },
        deleteProduct: {
            args: {
                query: { 
                    type: GraphQLNonNull(queryProductOneInput)
                }
            },
            type: Product,
            resolve: resolvers.deleteProduct,
        },
    }
})