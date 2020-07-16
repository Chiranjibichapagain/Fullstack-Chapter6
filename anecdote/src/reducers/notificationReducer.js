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

export const notificationAction = (anecdote, time) => {
  return async (dispatch) => {
    dispatch({
      type: "NOTIFICATION",
      data: `You have Voted.. ${anecdote.content}`,
    });

    setTimeout(() => {
      dispatch({
        type: "NOTIFICATION",
        data: "",
      });
    }, time * 1000);

  };
};

export default notificationReducer;
