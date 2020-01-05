export const findItem = (query, ...items) => {
    outer:
    for(let item of items){
        for(let [key,value] of Object.entries(query)){
            if(item[key] != value) continue outer
        }
        return item
    }
}

export default {
    classes: {
        Response: (function(){
            function setPropertyGetter(key){
                return Object.defineProperty(this,key, {get: function(){ return this['_'+key]}})
            }
            function Response({status,success,message,user,users}){
                this._status = status
                this._success = success
                this._message = message
                this._user = user
                this._users = users
                this._all = {status,success,message,user,users}
            
                setPropertyGetter.call(this,'status')
                setPropertyGetter.call(this,'success')
                setPropertyGetter.call(this,'message')
                setPropertyGetter.call(this,'user')
                setPropertyGetter.call(this,'users')
            }
            Response.prototype.resolve = function(){
                return {...this._all}
            }
        
            return Response
        })()
    }
}
