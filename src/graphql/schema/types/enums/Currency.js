import { GraphQLEnumType } from 'graphql'

export default new GraphQLEnumType({
    name: 'CurrencyType',
    values: {
        EUR: {
            value: 'eur',
            description: 'Euro'
        },
        USD: {
            value: 'usd',
            description: 'United States Dollar'
        },
        GBR: {
            value: 'gbr',
            description: 'Great Britain Pound'
        }
    }
})