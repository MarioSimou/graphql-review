import {Table} from 'pg-sql-syntax'

export default new Table({
    table: 'users_products',
    schema: 'public',
    columns: [
        {from: 'id', to: 'id'},
        {from: 'userId', to: 'user_id'},
        {from: 'productId', to: 'product_id'},
    ]
})