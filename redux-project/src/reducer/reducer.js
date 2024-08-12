const inistialState={
    tasks:[]
}

 export const todoReducer=(state=inistialState,action)=>{

    switch (action.type) {
        case"add":return {
            ...state,
            tasks: [...state.tasks, action.payload]
        }
    case "edit" : return {
       
        ...state,
        tasks:state.tasks.map((el)=>el.id===action.payload.id?{...el,name:action.payload.text}:el)
    }

    case "delete":return {

        tasks:state.tasks.filter((el)=>el.id!==action.id)
    }
        default:
            return state;
    }
}