import { GraphQLInputObjectType, GraphQLString, GraphQLList } from 'graphql'
import Time from '../scalars/Time';

export default new GraphQLInputObjectType({
    name: 'dataUpdateUserInput',
    fields: {
        fName: { type: GraphQLString},
        lName: {type: GraphQLString},
        job: { type: GraphQLString},
        email: {type: GraphQLString},
        dateOfBirth: { type: Time},
        country: {  type: GraphQLString},
        phone: { type: GraphQLString},
        products: {
            type: GraphQLList(GraphQLString),
        }
    }
})