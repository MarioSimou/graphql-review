import {GraphQLSchema} from 'graphql'
import Query from './types/rootTypes/Query'
import Mutation from './types/rootTypes/Mutation'

export default new GraphQLSchema({
    query: Query,
    mutation: Mutation,
})