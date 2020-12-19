export function buildQueryString(oldQueryString,options){

    let params = new URLSearchParams(oldQueryString);

    Object.keys(options).forEach((key)=>{
        if (options[key]){
        params.set(key,options[key])
        }
        else{
            params.delete(key)
        }
    })
     return "?" + params.toString();
}