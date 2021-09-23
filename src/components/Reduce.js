

var stating = {
    name:""
}

export function Reduce( state=stating , action ) {
   switch(action.type){
case "change":
    return{
        ...state,
        name : action.payLoad
        }
    default :
    return{
        ...state,
        name:state.name
    }

   }
}


var last = {
    name:""
}

export function Last( state=last , action ) {
   switch(action.type){
case "lik":
    return{
        ...state,
        name : action.payLoad
        }
    default :
    return{
        ...state,
        name:state.name
    }

   }
}


var head = {
    name:""
}

export function Head( state=head , action ) {
   switch(action.type){
case "head":
    return{
        ...state,
        name : action.payLoad
        }
    default :
    return{
        ...state,
        name:state.name
    }

   }
}


var text = {
    name:""
}

export function Text( state=text , action ) {
   switch(action.type){
case "text":
    return{
        ...state,
        name : action.payLoad
        }
    default :
    return{
        ...state,
        name:state.name
    }

   }
}


