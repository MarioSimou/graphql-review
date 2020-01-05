import { GraphQLInputObjectType, GraphQLString, GraphQLNonNull, GraphQLInt } from 'graphql'

export const query = new GraphQLInputObjectType({
    name: 'query',
    description: 'A set of parameters used to determine a user in the system',
    fields: {
        id: { type: GraphQLString },
        username: { type: GraphQLString },
        email: {type: GraphQLString},
    },
})

export const creatUserDataInput = new GraphQLInputObjectType({
    name: 'createUserDataInput',
    fields: {
        id : { type: GraphQLNonNull(GraphQLInt)},
        username : {type: GraphQLNonNull(GraphQLString)},
        email : {type: GraphQLNonNull(GraphQLString)},
    },
})

export const updatUserDataInput = new GraphQLInputObjectType({
    name: 'updateUserDataInput',
    fields: {
        usernanme : { type: GraphQLString },
        email: { type: GraphQLString },
    }
})