import React from "react";
import PropTypes from "prop-types";

// @emotion/css
import { css } from "@emotion/css";

// fortawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

// components
import TimerButton from "../TimerButton";

export default function RadialTimerButton({ position, action, icon }) {
  return (
    <TimerButton
      position={position}
      action={action}
      color="white"
      className="rounded-circle p-1 w-9 h-9 flex items-center justify-center transition hover:bg-secondary hover:text-primary"
    >
      <FontAwesomeIcon
        className={css({ transform: "rotateY(-180deg)" })}
        icon={icon}
      />
    </TimerButton>
  );
}

RadialTimerButton.defaultProps = {
  icon: faHome,
};

RadialTimerButton.propTypes = {
  position: PropTypes.shape({ x: PropTypes.number, y: PropTypes.number })
    .isRequired,
  action: PropTypes.func.isRequired,
  icon: PropTypes.node,
};
