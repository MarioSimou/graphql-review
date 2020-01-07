import {GraphQLObjectType, GraphQLID, GraphQLNonNull, GraphQLString, GraphQLList} from 'graphql'
import Product from './Product'
import Node from '../interfaces/Node'

export default new GraphQLObjectType({
    name: 'User',
    interfaces: [Node],
    description: 'A user entity in the system',
    fields: () => ({
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
            description: 'The job title of a user',
            defaultValue: 'N/A'
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
            description: 'A list of ids that match those users that bought the product',
            resolve: (parent,_,{db}) => {
                return parent.products.map(productId => db.products.find(product => product.id === productId))
            }
        }
    })
})