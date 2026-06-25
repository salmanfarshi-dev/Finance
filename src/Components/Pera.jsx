import React from "react";

function Pera({ text, className }) {
  return <p className={`text-secondary  font-normal ${className}`}>{text}</p>;
}

export default Pera;
