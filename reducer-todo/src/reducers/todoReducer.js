export const initialState = [
  {
    item: "Learn about reducers and stuff",
    completed: false,
    id: 3892987589
  },
  {
      item: 'Break everything',
      completed: false,
      id: 3892982527 
  }
];

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          item: action.payload,
          completed: false,
          id: Date.now()
        }
      ];
    case "TOGGLE_COMPLETED":
      return state.map(todo => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed
          };
        } else {
          return todo;
        }
      });
    case "DELETE_COMPLETED":
      return state.filter(todo => !todo.completed);

    default:
      return state;
  }
};
