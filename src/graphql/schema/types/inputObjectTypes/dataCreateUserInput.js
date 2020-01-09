import { GraphQLInputObjectType, GraphQLString, GraphQLID, GraphQLNonNull, GraphQLList } from 'graphql'
import Email from '../scalars/Email'
import Time from '../scalars/Time'

export default new GraphQLInputObjectType({
    name: 'dataCreateUserInput',
    fields: {
        fName: { type: GraphQLNonNull(GraphQLString)},
        lName: {type: GraphQLNonNull(GraphQLString)},
        email: { type: GraphQLNonNull(Email)},
        dateOfBirth: { type: GraphQLNonNull(Time)},
        job: { type: GraphQLString},
        country: {  type: GraphQLNonNull(GraphQLString)},
        phone: { type: GraphQLNonNull(GraphQLString)},
    }
})
