import React, { memo, useCallback } from "react";

import db from "../../db/db.json";

// @fortawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";

// styles
import "./styles.css";

// utils
import { parseImageKit } from "../../utils/parser";

const actionIcons = {
  next: faArrowCircleRight,
};

const emptyImage = parseImageKit(
  "https://ik.imagekit.io/lgqp0wffgtp/Beyon_the_world/Athens_Gal/logo_Z6mtwfeT8.jfif?updatedAt=1682261687287",
  "80",
  "110",
  "110"
);

function Dialog({ unit, message, action }) {
  const getUserAlt = useCallback(() => {
    if (unit.nation && unit.type && unit.name) {
      if (
        db[unit.nation] &&
        db[unit.nation][unit.type] &&
        db[unit.nation][unit.type][unit.id] &&
        db[unit.nation][unit.type][unit.id].name
      )
        return db[unit.nation][unit.type][unit.id].name.toLowerCase();
      return "unit-portrait";
    }
  }, [unit, db]);

  const getUserPortrait = useCallback(() => {
    if (
      db[unit.nation] &&
      db[unit.nation][unit.type] &&
      db[unit.nation][unit.type][unit.id] &&
      db[unit.nation][unit.type][unit.id].portrait
    )
      return parseImageKit(
        db[unit.nation][unit.type][unit.id].portrait,
        "80",
        "110",
        "110"
      );
    return emptyImage;
  }, [unit, db]);

  return (
    <div className="dialog message">
      <div className="diag-content">
        {unit && unit !== null ? (
          <div className="diag-portrait">
            <img src={getUserPortrait()} alt={getUserAlt()} />
          </div>
        ) : null}
        {message ? (
          <div className="content">
            <p>{message}</p>
          </div>
        ) : null}
        {action ? (
          <div className="actions">
            <button
              onClick={action.event}
              className="text-xl hover:text-white transition"
            >
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

const DialogMemo = memo((props) => <Dialog {...props} />, arePropsEqual);

function arePropsEqual(oldProps, newProps) {
  return (
    oldProps.unit === oldProps.unit &&
    oldProps.message === newProps.message &&
    oldProps.action === newProps.action
  );
}

export default DialogMemo;
