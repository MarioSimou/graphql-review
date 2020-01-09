import { GraphQLScalarType, GraphQLString } from 'graphql'
import {GraphQLError} from 'graphql/error'
import {Kind} from 'graphql/language'

const isValidEmail = email => /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i.test(email)

export default new GraphQLScalarType({
    name: 'Email',
    description: 'The email address of a user',
    // methods that runs when the value of the type is sent to the client as a response
    serialize: value => {
        return value
    },
    // method that runs when the parameters are passed as variables
    parseValue: value => {
        if(typeof value === 'String'){
            throw new GraphQLError('Query error: Can only parse strings got a: ', ast.kind, [ast])
        }
        if(!isValidEmail(value)){
            throw new GraphQLError('Query error: Invalid user email: ', ast.value, [ast])
        }
        return value
    },
    // method that runs when inline parameters are passed to query/mutation. An AST(Abstract Syntax Tree) is created
    parseLiteral: ast => {
        if(ast.kind !== Kind.STRING){
            throw new GraphQLError('Query error: Can only parse strings got a: ', ast.kind, [ast])
        }
        if(!isValidEmail(ast.value)){
            throw new GraphQLError('Query error: Invalid user email: ', ast.value, [ast])
        }
        return ast.value
    }

})