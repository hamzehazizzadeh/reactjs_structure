export const setLoadingTrueAction = () => {
  return async (dispatch) => {
    await dispatch({ type: "SET_LOADING_TRUE" });
  };
};

export const setLoadingFalseAction = () => {
  return async (dispatch) => {
    await dispatch({ type: "SET_LOADING_FALSE" });
  };
};
