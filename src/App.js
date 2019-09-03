import React, { Component } from "react";
import CreateEntryComponent from "./CreateEntryComponent";
import ViewEntriesComponent from "./ViewEntriesComponent";
import axios from "axios";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { entries: [] };
  }

  componentDidMount() {
    this.getNewEntries();
  }

  getNewEntries() {
    console.log("Getting new entries");
    axios.get("http://localhost:4000/entries").then(res => {
      console.log("GET REQUEST: " + JSON.stringify(res.data));
      this.setState({ entries: res.data });
      console.log("state: " + JSON.stringify(this.state.entries));
    });
  }

  render() {
    console.log("App.js: " + JSON.stringify(this.state.entries));
    return (
      <div>
        <h3>Welcome To Journaly</h3>
        <CreateEntryComponent
          newEntry={() => {
            console.log("There is a new entry");
            this.getNewEntries();
          }}
        ></CreateEntryComponent>
        <ViewEntriesComponent
          entries={this.state.entries}
        ></ViewEntriesComponent>
      </div>
    );
  }
}

export default App;
