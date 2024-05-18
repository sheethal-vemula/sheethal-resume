import React from "react";

const ProgressBar = ({ bgColor, progress }) => {
  const containerStyles = {
    height: 7,
    width: "100%",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    marginBottom: 20,
    marginTop: 10,
  };

  const fillerStyles = {
    height: "100%",
    width: `${progress}%`,
    backgroundColor: bgColor,
    borderRadius: "inherit",
    textAlign: "right",
  };

  return (
    <div className="progress-bar" style={containerStyles}>
      <div style={fillerStyles}></div>
    </div>
  );
};

export default ProgressBar;
