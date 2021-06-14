import React from "react";
import "bootstrap";

const TextRight = (props) => {
  return (
    <div>
      <h3>{props.textH3}</h3>
      <p>{props.textP}</p>
      {/* <Button color="primary" size="xs">
        Check Now
      </Button> */}
    </div>
  );
};

export default TextRight;
