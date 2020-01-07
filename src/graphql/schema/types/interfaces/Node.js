import  { GraphQLInterfaceType, GraphQLID } from 'graphql'

export default new GraphQLInterfaceType({
    name: 'Node',
    fields: {
        id: {
            type: GraphQLID,
            description: 'A unique identifier that is enforces to the object that implements it'
        }
    }
})