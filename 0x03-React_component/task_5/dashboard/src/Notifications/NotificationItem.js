import React, { PureComponent } from "react";
import "./Notifications.css";
import PropTypes from "prop-types";

class NotificationItem extends PureComponent {
  render() {
    const { type, html, value, markAsRead } = this.props;

    return (
      <>
        {type && value ? (
          <li data-notification-type={type} onClick={() => markAsRead()}>
            {value}
          </li>
        ) : null}
        {html ? (
          <li data-urgent dangerouslySetInnerHTML={{ __html: html }}></li>
        ) : null}
      </>
    );
  }
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
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
