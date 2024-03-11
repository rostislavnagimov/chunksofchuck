const initialState = {
  jokes: {
    total: 0,
    result: []
  }
};

const searchReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'FETCH_JOKES':
      return {
        ...state,
        jokes: action.payload
      };
    default:
      return state;
  }
};

export default searchReducer;
