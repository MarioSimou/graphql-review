import {GraphQLObjectType, GraphQLID, GraphQLNonNull, GraphQLString, GraphQLList} from 'graphql'
import Product from './Product'

export default new GraphQLObjectType({
    name: 'User',
    description: 'A user entity in the system',
    fields: {
        id: {
            type: GraphQLNonNull(GraphQLID),
            description: 'A unique identifier of a user'
        },
        fName: {
            type: GraphQLNonNull(GraphQLString),
            description: 'The first name of a user',
        },
        lName: {
            type: GraphQLNonNull(GraphQLString),
            description: 'The last name of a user',
        },
        job: {
            type: GraphQLString,
            description: 'The job title of a user'
        },
        country: {
            type: GraphQLNonNull(GraphQLString),
            description: 'The country of origin of a user'
        },
        phone: {
            type: GraphQLNonNull(GraphQLString),
            description: 'The phone number of a user'
        },
        products: {
            type: GraphQLNonNull(GraphQLList(Product)),
            description: 'A list of ids that match those users that bought the product'
        }
    },
})