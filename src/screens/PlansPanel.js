import React from "react";
import "./PlansPanel.scss";

export default class PlansPanel extends React.Component {
  render() {
    return (
      <div className="panel__conatainer">
        <div className="panel__heading">Plans</div>
        <div className="panel__main__plans"></div>
      </div>
    );
  }
}