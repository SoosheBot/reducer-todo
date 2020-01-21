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
      return state.map(todoComplete => {
        if (todoComplete.id === action.payload) {
          return {
            ...todoComplete,
            completed: !todoComplete.completed
          };
        } else {
          return todoComplete;
        }
      });
    case "DELETE_COMPLETED":
      return state.filter(deleteComplete => !deleteComplete.completed);

    default:
      return state;
  }
};
