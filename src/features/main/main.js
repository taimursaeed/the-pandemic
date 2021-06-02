import React from "react";
import AppContext from "./../../context";
import CountrySummary from "./countrySummary";
export default function Main() {
  return (
    <AppContext.Consumer>
      {(value) => <CountrySummary {...value} />}
    </AppContext.Consumer>
  );
}
