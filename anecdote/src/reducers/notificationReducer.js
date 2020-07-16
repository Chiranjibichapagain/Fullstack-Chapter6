const initialNotification = "";

const notificationReducer = (state = initialNotification, action) => {
  switch (action.type) {
    case "NOTIFICATION":
      return (state = action.data);
    case "REMOVE_NOTIFICATION":
      return (state = initialNotification);
    default:
      return state;
  }
};

//action
let timeoutId;
export const notificationAction = (anecdote, time) => {
  return async (dispatch) => {
    dispatch({
      type: "NOTIFICATION",
      data: `You have Voted.. ${anecdote.content}`,
    });

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      dispatch({
        type: "REMOVE_NOTIFICATION",
      });
    }, time * 1000);
  };
};

export default notificationReducer;
