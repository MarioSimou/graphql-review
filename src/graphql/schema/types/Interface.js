import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInterfaceType } from 'graphql'
export const Node = new GraphQLInterfaceType({
    name: 'Node',
    fields: {
        id: { type: GraphQLID }
    }
})

export const Timestamp = new GraphQLInterfaceType({
    name: 'Timestamp',
    fields: {
        createdAt: { type: GraphQLString },
        updatedAt: { type: GraphQLString }
    }
})