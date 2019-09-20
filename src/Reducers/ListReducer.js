import uuid from 'uuid/v4'

export const ListReducer = (state, action) => {
    
    switch(action.type){
        case 'Add_List':
            return ([...state, {title: action.list.title, date: action.list.date,dateLeft: action.list.dateLeft, completedBool: action.list.completed ,id: uuid()}]);
        case 'Remove_List':
            return (state.filter(list => list.id !== action.id)) //state.filter(list => list.id !== action.id)
        default:
            return state
    }
}
