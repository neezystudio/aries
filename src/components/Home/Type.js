import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Mobile and Web App Developer",
          "Project manager",
          "Deep Learning Engineer",
          "MERN Stack Developer",
          "Open Source Contributor",
          "Quality Assuarance Engineer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
