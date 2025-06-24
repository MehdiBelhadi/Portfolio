import React from "react";
import PropTypes from "prop-types";
import "./Snowflake.scss";

function Snowflake({ size, left, duration, delay }) {
  return (
    <div
      className="snowflake"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        left: `${left}px`,
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`,
      }}
    ></div>
  );
}

Snowflake.propTypes = {
  size: PropTypes.number.isRequired,
  left: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  delay: PropTypes.number.isRequired,
};

export default Snowflake;