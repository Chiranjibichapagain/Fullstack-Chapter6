import React from "react";
import { useSelector } from "react-redux";

const Notification = () => {
  const notification = useSelector((state) => state.notification);
  const style = () => {
    if (!notification) {
      return null;
    } else {
      return {
        border: "solid",
        padding: 10,
        borderWidth: 1,
        margin:"0px 0px 20px 0px"
      };
    }
  };

  return <div style={style()}>{notification}</div>;
};

export default Notification;
