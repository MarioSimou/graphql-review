import { GraphQLUnionType, GraphQLList } from 'graphql'
import User from './User'

export const Un = new GraphQLUnionType({
    name: 'Response',
    description: 'A set of objectTypes possible to return from the service',
    types: [ User ]
})