import React from "react";

import "./Options.css";

const Options = (props) => {
  const options = [
    { text: "Customer Care",handler: props.actionProvider.cc,id:3},
    { text: "Order Supplies", handler: props.actionProvider.os, id: 2 },
    { text: "Golang", handler: () => {}, id: 3 },
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;
