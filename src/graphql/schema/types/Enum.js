import { GraphQLEnumType } from 'graphql'

export const Currency = new GraphQLEnumType({
    name: 'Currency',
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