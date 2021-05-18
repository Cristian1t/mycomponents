import React from "react";
import Typist from "react-typist";

function TypistAnimation() {
  return (
    <Typist cursor={{ show: false }} avgTypingDelay={100}>
      <h1 style={{ textAlign: "center", color: "rebeccapurple" }}>Hello,</h1>
      <h2 style={{ textAlign: "center", color: "rebeccapurple" }}>
        Welcome to my website.
      </h2>
    </Typist>
  );
}

export default TypistAnimation;
