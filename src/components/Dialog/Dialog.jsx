import React from "react";

// @fortawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faNext } from "@fortawesome/free-solid-svg-icons";

// styles
import "./styles.css";

const actionIcons = {
  // next: faNext,
};

function Dialog({ unit, message, action }) {
  return (
    <div className="dialog message">
      <div className="diag-content">
        {unit ? <div className="portrait"></div> : null}
        {message ? (
          <div className="content">
            <p>{message}</p>
          </div>
        ) : null}
        {action ? (
          <div className="actions">
            <button onClick={action.event}>
              {actionIcons[action.icon] ? (
                <FontAwesomeIcon icon={actionIcons[action.icon]} />
              ) : (
                "Button"
              )}
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Dialog;
