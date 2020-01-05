import utils, {findItem} from '../../utils'

export const createUser = (parent,{data},{mock}) => {
    const user = {...data, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString()}
    mock.data.push(user)
    return new utils.classes.Response({status:200, success: true, user: user}).resolve()
}

export const updateUser = (_,{query,data},{mock}) => {
    const user = findItem(query,...mock.data)
    if(!user){
        return new utils.classes.Response({status:404,success: false, message: 'User not found'})
    }
    const nUser = {...user,...data, updatedAt: new Date().toISOString()}
    mock.data = [...mock.data.filter(u => u.email != user.email), nUser]

    return new utils.classes.Response({status: 200, success:true, user: nUser}).resolve()
}

export const deleteuser = (_,{query},{mock}) => {
    const user = findItem(query,...mock.data)
    if(!user){
        return new utils.classes.Response({status:404,success: false, message: 'User not found'})
    }    
    mock.data = mock.data.filter(u => u.email != user.email)
    return new utils.classes.Response({status: 200, success:true, user: user}).resolve()
}