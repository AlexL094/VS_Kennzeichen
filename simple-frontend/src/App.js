import React from "react";
import { fetchAllBooks } from "./RestClient";
class App extends React.Component {
  // constructor initializes component state data
  // and binds methods
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
    this.fetchDisplayData = this.fetchDisplayData.bind(this);
  }

  // requests and waits for data by calling RestClient's
  // fetchAllBooks. as soon as the data is there it is set
  // as a state
  async fetchDisplayData() {
    let data = await fetchAllBooks();
    this.setState({ books: data });
  }

  // this is displayed on the screen
  render() {
    return (
      <div>
        <div id="title">Kennzeichen 📚📚 </div>
        <button id="fetcher" onClick={this.fetchDisplayData}>
          Check out what's in the Database
        </button>
        <div className="data">
          {/* generates a div for every entry */}
          {this.state.books.map((ortskennung, key) => (
            <div key={key}>
               {ortskennung.ortskürzel} gehört zu {ortskennung.landkreis} und liegt {ortskennung.bundesland}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
