
export const customState = {
    basket:[],
    user:null
}

export const AppReducer = (state = customState,action) => {
    switch(action.type){
        case "SET_USER":
            return{
                ...state,
                user:action.user
            }
        case "ADD_TO_BASKET":
            return{
                ...state, 
                basket:action.item
            }
        default:
            return state;
    }
}
