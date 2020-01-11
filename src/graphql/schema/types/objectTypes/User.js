import {GraphQLObjectType, GraphQLID, GraphQLNonNull, GraphQLString, GraphQLList} from 'graphql'
import ProductType from './Product'
import Node from '../interfaces/Node'
import Email from '../scalars/Email'
import Time from '../scalars/Time'
import models from '../../../../models'

export function User({id,fName,lName,email,dob,job,country,phone,products}){
    this.id = id
    this.fName = fName
    this.lName = lName
    this.email = email
    this.job = job
    this.dob = dob
    this.country = country
    this.phone = phone
    this.products = products || []
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
            type: GraphQLNonNull(GraphQLList(ProductType)),
            description: 'A list of ids that match those users that bought the product',
            resolve: async ({products:productsId},_,{pgClient}) => {
                if(!productsId.length) return productsId

                const {rows:products} = await pgClient.query(
                    ...models.Product
                    .select(
                        models.Product.columns.id,
                        models.Product.columns.name,
                        models.Product.columns.price,
                        models.Product.columns.material,
                    )
                    .from()
                    .where(
                        models.Product.columns.id.in(...productsId)
                    )
                    .end
                ) 
                return products
            }
        },
    }),
})