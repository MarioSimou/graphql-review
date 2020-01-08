import { GraphQLInputObjectType, GraphQLString, GraphQLFloat, GraphQLList } from 'graphql'

export default new GraphQLInputObjectType({
    name: 'dataUpdateProductInput',
    fields: {
        name: { type: GraphQLString },
        price: { type: GraphQLFloat },
        material: { type: GraphQLString },
        users: { type: GraphQLList(GraphQLString) },
    }
})