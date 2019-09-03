import React, { Component } from "react";
import { EntryComponent } from "./EntryComponent";
import axios from "axios";

class ViewEntriesComponent extends Component {
  constructor(props) {
    super(props);
    // console.log("ViewEntriesComponentsss: " + JSON.stringify(this.props));
    this.state = { entries: this.props.entries };
  }

  componentWillReceiveProps(nextProps) {
    // console.log("ViewEntriesComponentsss: " + JSON.stringify(nextProps));
    this.setState({ entries: nextProps.entries });
  }

  render() {
    return (
      <div>
        <h3> Current Entries </h3>
        {this.state.entries.map(props => {
          return <EntryComponent {...props}></EntryComponent>;
        })}
      </div>
    );
  }
}

export default ViewEntriesComponent;
