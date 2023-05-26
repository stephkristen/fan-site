import React from "react";
import errorBackground from "../images/walker.jpg";

export default function Errors() {
  const errorStyle = {
    backgroundImage: `url(${errorBackground})`,
    color: "red",
    textAlign: "center",
    padding: "50px",
    backgroundSize: "cover",
  };

  return (
    <section style={errorStyle}>
      <h2>Error</h2>
      <p>
        Oops! The Night King stole our page! Seems like White Walkers prefer
        chilling in the cold instead of serving web pages. Winter might be
        coming, but our developers are on their way to defeat the error. Please
        try again later or send a raven for support.
      </p>
    </section>
  );
}
