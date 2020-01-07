import { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLFloat, GraphQLList, GraphQLID } from 'graphql'
import {Node} from './Interface'
import {Currency} from './Enum'
import User from './User'
import {convertTo} from '../../utils'

export default new GraphQLObjectType({
    name: 'Product',
    interfaces: [Node],
    fields: {
        id: {
            type: GraphQLNonNull(GraphQLID)
        },
        name: {
            type: GraphQLNonNull(GraphQLString)
        },
        price: {
            type: GraphQLNonNull(GraphQLFloat),
            args: {
                currency: {
                    type: Currency,
                    defaultValue: 'gbr',
                }
            },
            resolve: ({price},{currency}) => convertTo(price,currency)
        },
        material: {
            type: GraphQLString
        },
    }  
})