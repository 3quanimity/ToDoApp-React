import { ADD_TODO, DELETE_TODO } from "../constants/action-types";

// intial state
const initialState = [
  {
    id: 1,
    content: "Finish the todo app"
  },
  {
    id: 2,
    content: "Conquer the world"
  }
];

// root reducer
function toDoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: Math.random(),
          content: action.payload
        }
      ];
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.id);

    default:
      return state;
  }
}

export default toDoReducer;
