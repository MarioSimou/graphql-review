import  { GraphQLInterfaceType, GraphQLID, GraphQLNonNull } from 'graphql'

export default new GraphQLInterfaceType({
    name: 'NodeType',
    fields: {
        id: {
            type: GraphQLNonNull(GraphQLID),
            description: 'A unique identifier that is enforces to the object that implements it'
        }
    }
})