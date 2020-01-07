import { GraphQLInputObjectType, GraphQLString, GraphQLID, GraphQLNonNull, GraphQLList } from 'graphql'

export const queryUserManyInput = new GraphQLInputObjectType({
    name: 'queryUserAllInput',
    fields: {
        id: {type: GraphQLID },
        fName: {type: GraphQLString},
        lName: {type: GraphQLString},
        job: {type: GraphQLString},
        country: {type: GraphQLString},
        phone: {type: GraphQLString} 
    }
})

export const queryUserOneInput = new GraphQLInputObjectType({
    name: 'queryUserInput',
    fields: {
        id: {type: GraphQLString},
        phone: {type: GraphQLString},
    }
})

export const dataCreateUserInput = new GraphQLInputObjectType({
    name: 'dataCreateUserInput',
    fields: {
        fName: { type: GraphQLNonNull(GraphQLString)},
        lName: {type: GraphQLNonNull(GraphQLString)},
        job: { type: GraphQLString},
        country: {  type: GraphQLNonNull(GraphQLString)},
        phone: { type: GraphQLNonNull(GraphQLString)},
    }
})

export const dateUpdateUserInput = new GraphQLInputObjectType({
    name: 'dataUpdateUserInput',
    fields: {
        fName: { type: GraphQLString},
        lName: {type: GraphQLString},
        job: { type: GraphQLString},
        country: {  type: GraphQLString},
        phone: { type: GraphQLString},
        products: {
            type: GraphQLList(GraphQLString),
        }
    }
})