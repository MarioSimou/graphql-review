import {Table} from 'pg-sql-syntax'

export default new Table({
    table: 'products',
    schema: 'public',
    columns: [
        {from: 'id', to: 'id'},
        {from: 'name', to: 'name'},
        {from: 'price', to: 'price'},
        {from: 'material', to:'material'},
    ]
})