import { GraphQLInputObjectType, GraphQLString} from 'graphql'
import Email from '../scalars/Email'

export default new GraphQLInputObjectType({
    name: 'queryUserInput',
    fields: {
        id: {type: GraphQLString},
        email: {type: Email},
    }
})