import { GraphQLScalarType } from 'graphql'
import {GraphQLError} from 'graphql/error'
import {Kind} from 'graphql/language'

export default new GraphQLScalarType({
    name: 'Time',
    description: 'A representation of time',
    serialize: t => {
        // returned in ISOString
        return new Date(t).toISOString()
    },
    // runs when inline arguments are passed to the operation and an AST Is created
    parseLiteral: ast => {
        if(ast.kind !== Kind.STRING){
            throw new GraphQLError('Query error: Can only parse strings got a: ', ast.kind, [ast])
        }
        if((typeof new Date(ast.value).valueOf()) !== 'number'){
            throw new GraphQLError('Query Error: Invalid date', [ast])
        }
        return ast.value
    },
    // runs when the arguments are passed as a variables
    parseValue: t => {
        if((typeof new Date(t).valueOf()) !== 'number'){
            throw new GraphQLError('Query Error: Invalid date', t)
        }
        return t
    }
})