const inistialState={
    tasks: []
}

export const TodoReducer=(state=inistialState,action)=>{

    switch (action.type) {
        case "add":
            return{
                ...state,
                tasks:[...state.tasks,action.payload]
            }
            
           
    
        default:
            break;
    }
}