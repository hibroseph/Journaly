import React from "react";

export const EntryComponent = props => {
  //   console.log("ENTRY COMPONENT " + JSON.stringify(props));
  return (
    <div>
      <h2>{props.entry_title}</h2>
      <h4>{props.entry_date}</h4>
      <h3>{props.entry_content}</h3>
    </div>
  );
};
