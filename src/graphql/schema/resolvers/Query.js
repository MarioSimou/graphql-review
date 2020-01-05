import {findItem} from '../../utils'
import u from '../../utils'

export const getUsers = (_,__,{mock}) => new u.classes.Response({status:200,success:true, users: mock.data}).resolve()
export const getUser = (_,{query},{mock}) => new u.classes.Response({status:200, success:true, user: findItem(query, ...mock.data)}).resolve()