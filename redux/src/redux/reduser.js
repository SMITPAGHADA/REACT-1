 const IntianlState={
    count:0
 }

export const reducer=(state=IntianlState,action)=>{
    switch(action.type){
        case 'increment':
            return{
                ...state,
                count:state.count+1
            }
        case 'decrement':
            return{
                ...state, 
                count:state.count-1
            }
        default:
            return state;
    }
 }