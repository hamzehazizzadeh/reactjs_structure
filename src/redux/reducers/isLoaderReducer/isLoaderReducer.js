export const isLoaderReducer = (state = false, action) => {
  switch (action.type) {
    case "SET_LOADING_TRUE":
      return (state = true);
    case "SET_LOADING_FALSE":
      return (state = false);
    default:
      return state;
  }
};
