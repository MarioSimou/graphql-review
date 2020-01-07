import { GraphQLInputObjectType, GraphQLString, GraphQLID, GraphQLNonNull, GraphQLList } from 'graphql'

export default new GraphQLInputObjectType({
    name: 'queryUserAllInput',
    fields: {
        id: {type: GraphQLID },
        fName: {type: GraphQLString},
        lName: {type: GraphQLString},
        job: {type: GraphQLString},
        country: {type: GraphQLString},
        phone: {type: GraphQLString} 
    }
})