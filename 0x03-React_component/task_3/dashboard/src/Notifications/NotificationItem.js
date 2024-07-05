import React from "react";
import "./Notifications.css";
import PropTypes from "prop-types";

function NotificationItem({ type, html, value, markAsRead }) {
  return (
    <>
      {type && value ? (
        <li data-notification-type={type} onClick={() => markAsRead(id)}>
          {value}
        </li>
      ) : null}
      {html ? (
        <li data-urgent dangerouslySetInnerHTML={{ __html: html }}></li>
      ) : null}
    </>
  );
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  __html: PropTypes.shape({
    html: PropTypes.string,
  }),
  markAsRead: PropTypes.func,
};

NotificationItem.defaultProps = {
  type: "default",
  value: "",
  html: null,
  markAsRead: () => {},
};

export default NotificationItem;
