import React from "react";
import "./Notifications.css";
import close_btn from "./close_btn.png";
import { getLatestNotification } from "./utils.js";

export function Notification() {
  function handleClick() {
    console.log("Close button has been clicked");
  }

  return (
    <div
      data-notification-type="default"
      className="container"
      style={{ position: "relative" }}
    >
      Here is the notification
      <button
        aria-label="close"
        style={{ position: "absolute", right: 0, top: 0, display: "inline" }}
        onClick={handleClick}
      >
        <img src={close_btn} alt="close" style={{ width: "10px" }} />
      </button>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li
          dangerouslySetInnerHTML={{
            __html: getLatestNotification(),
          }}
        ></li>
      </ul>
    </div>
  );
}
