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

export const notificationAction = (anecdote) => {
  return {
    type: "NOTIFICATION",
    data: `You have Voted.. ${anecdote}`,
  };
};

export const removeNotificationAction = (anecdote) => {
  return {
    type: "REMOVE_NOTIFICATION",
    data: "",
  };
};

export default notificationReducer;
