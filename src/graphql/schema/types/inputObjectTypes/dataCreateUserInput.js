import { GraphQLInputObjectType, GraphQLString, GraphQLID, GraphQLNonNull, GraphQLList } from 'graphql'

export default new GraphQLInputObjectType({
    name: 'dataCreateUserInput',
    fields: {
        fName: { type: GraphQLNonNull(GraphQLString)},
        lName: {type: GraphQLNonNull(GraphQLString)},
        job: { type: GraphQLString},
        country: {  type: GraphQLNonNull(GraphQLString)},
        phone: { type: GraphQLNonNull(GraphQLString)},
    }
})
