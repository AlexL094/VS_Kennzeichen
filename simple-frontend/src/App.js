import React from "react";
import { fetchAllOrtskennung } from "./RestClient";
class App extends React.Component {
  // constructor initializes component state data
  // and binds methods
  constructor(props) {
    super(props);
    this.state = {
      ortskennung: [],
    };
    this.fetchDisplayData = this.fetchDisplayData.bind(this);
  }

  // requests and waits for data by calling RestClient's
  // fetchAllOrtskennung. as soon as the data is there it is set
  // as a state
  async fetchDisplayData() {
    let data = await fetchAllOrtskennung();
    this.setState({ ortskennung: data });
  }

  // this is displayed on the screen
  render() {
    return (
      <div>
        <div id="title">Ortskennung </div>
        <button id="fetcher" onClick={this.fetchDisplayData}>
          Anzeigen der Ortskennungen
        </button>
        <div className="data">
          {/* generates a div for every entry */}
          {this.state.ortskennung.map((ortskennung, key) => (
            <div key={key}>
               "{ortskennung.ortskürzel}" gehört zu {ortskennung.landkreis} und liegt {ortskennung.bundesland}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
