const inistialState={
    tasks:[]
}


export  const Reducer =( state=inistialState,action)=>{

    switch(action.type){

        case "delete": return{
            tasks:state.tasks.filter((el)=>el.id!==action.id)
        }
        default : return state
    }  
    
}