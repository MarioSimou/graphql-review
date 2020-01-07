import { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLFloat, GraphQLList, GraphQLID } from 'graphql'
import Node from '../interfaces/Node'
import Currency from '../enums/Currency'
import {convertTo} from '../../../utils'

const Product = new GraphQLObjectType({
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
        users: {
            type:  GraphQLNonNull(GraphQLList(GraphQLString)),
        }
    }  
})

export default () => Product