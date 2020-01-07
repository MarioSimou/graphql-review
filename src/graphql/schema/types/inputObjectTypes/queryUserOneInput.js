import { GraphQLInputObjectType, GraphQLString, GraphQLID, GraphQLNonNull, GraphQLList } from 'graphql'

export default new GraphQLInputObjectType({
    name: 'queryUserInput',
    fields: {
        id: {type: GraphQLString},
        phone: {type: GraphQLString},
    }
})