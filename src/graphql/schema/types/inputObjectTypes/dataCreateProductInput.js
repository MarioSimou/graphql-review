import { GraphQLInputObjectType, GraphQLNonNull, GraphQLInt, GraphQLString, GraphQLFloat } from 'graphql'

export default new GraphQLInputObjectType({
    name: 'dataCreateProductInput',
    fields: {
        name: { type: GraphQLNonNull(GraphQLString)},
        price: { type: GraphQLNonNull(GraphQLFloat)},
        material: { type: GraphQLString },
    }
})