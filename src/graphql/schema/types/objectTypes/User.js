import {GraphQLObjectType, GraphQLID, GraphQLNonNull, GraphQLString, GraphQLList} from 'graphql'
import Product from './Product'
import Node from '../interfaces/Node'
import Email from '../scalars/Email'
import Time from '../scalars/Time'

export function User({id,fName,lName,email,dob,job,country,phone,products}){
    console.log('ID: ', id)
    this.id = id
    this.fName = fName
    this.lName = lName
    this.email = email
    this.job = job
    this.dob = dob
    this.country = country
    this.phone = phone
    this.products = products
}

export default new GraphQLObjectType({
    name: 'UserType',
    interfaces: [Node],
    description: 'A user entity in the system',
    fields: () => ({
        id: {
            type: GraphQLNonNull(GraphQLID),
            description: 'A unique identifier of a user'
        },
        fName: {
            type: GraphQLNonNull(GraphQLString),
            description: 'The first name of a user',
        },
        lName: {
            type: GraphQLNonNull(GraphQLString),
            description: 'The last name of a user',
        },
        email: {
            type: GraphQLNonNull(Email),
            description: 'The email address of a user',
        },
        dob: {
            type: GraphQLNonNull(Time),
            description: 'The time of creation of a user expressed in milliseconds since 1970'
        },
        job: {
            type: GraphQLString,
            description: 'The job title of a user',
            defaultValue: 'N/A'
        },
        country: {
            type: GraphQLNonNull(GraphQLString),
            description: 'The country of origin of a user'
        },
        phone: {
            type: GraphQLNonNull(GraphQLString),
            description: 'The phone number of a user'
        },
        products: {
            type: GraphQLNonNull(GraphQLList(Product)),
            description: 'A list of ids that match those users that bought the product',
            resolve: (parent,_,{db}) => {
                return parent.products.map(productId => db.products.find(product => product.id === productId))
            }
        },
    }),
    isTypeOf: value => value instanceof User
})