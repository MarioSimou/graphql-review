import { GraphQLInputObjectType, GraphQLString, GraphQLID, GraphQLNonNull, GraphQLList } from 'graphql'

export default new GraphQLInputObjectType({
    name: 'dataUpdateUserInput',
    fields: {
        fName: { type: GraphQLString},
        lName: {type: GraphQLString},
        job: { type: GraphQLString},
        country: {  type: GraphQLString},
        phone: { type: GraphQLString},
        products: {
            type: GraphQLList(GraphQLString),
        }
    }
})