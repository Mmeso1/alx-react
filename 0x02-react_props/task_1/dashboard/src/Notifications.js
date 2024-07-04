import React from "react";
import "./Notifications.css";
import NotificationItem from "./Notifications/NotificationItem.js";
import { getLatestNotification } from "./utils.js";

export default function Notification() {
  function handleClick() {
    console.log("Close button has been clicked");
  }

  return (
    <div
      data-notification-type="default"
      className="container"
      style={{ position: "relative" }}
    >
      Here is the list of notifications
      <button
        aria-label="close"
        style={{ position: "absolute", right: 0, top: 0, display: "inline" }}
        onClick={handleClick}
      >
        <img src={close_btn} alt="close" style={{ width: "10px" }} />
      </button>
      <ul>
        <NotificationItem type="default" value="test" />
        <NotificationItem type="urgent" value="Urgent notification here" />
        <NotificationItem
          type="urgent"
          html={{ __html: getLatestNotification() }}
        />
      </ul>
    </div>
  );
}
