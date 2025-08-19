const initialState = {
    todos:[],
}

function reducer(state, action){
    switch (action.type) {
        case "ADD_TODO" :
            const { name, description } = action.payload;
            if(!name?.trim()) return state;
            const newTodo = {
                id: Date.now(),
                name: name.trim(),
                description: (description || "").trim(),
                isComplete: false,
            };
            return {...state, todos: [newTodo, ...state.todos]};

            default:
                return state;
    }
}