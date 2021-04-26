import React from "react";
import "./UsersManagerPanel.scss";

export default class UsersManagerPanel extends React.Component {
  render() {
    return (
      <div className="panel__conatainer">
        <div className="panel__heading">Users Manager</div>
        <div className="panel__main__users__manager"></div>
      </div>
    );
  }
}