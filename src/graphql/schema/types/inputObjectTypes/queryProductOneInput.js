import { GraphQLInputObjectType, GraphQLString } from 'graphql'

export default new GraphQLInputObjectType({
    name: 'queryProductOneInput',
    fields: {
        id: { type: GraphQLString },
        name: { type: GraphQLString }
    },
})