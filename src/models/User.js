import {Table} from 'pg-sql-syntax'

export default new Table({
    table: 'users',
    schema: 'public',
    columns: [
        {from: 'id', to: 'id' },
        {from: 'fName', to: 'first_name'},
        {from: 'lName', to: 'last_name'},
        {from: 'email', to: 'email'},
        {from: 'dob', to: 'date_of_birth'},
        {from: 'job', to: 'job'},
        {from: 'country', to: 'country'},
        {from: 'phone', to: 'phone'},
    ]
})