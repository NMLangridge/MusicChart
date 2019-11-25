import React, {Component} from 'react';
import EntrySelector from '../components/EntrySelector.js';
import EntryDetail from '../components/EntryDetail.js';

class EntryContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [],
      currentEntry: null
    };
    this.handleEntrySelected = this.handleEntrySelected.bind(this);
  }

  componentDidMount() {
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json'

    fetch(url)
      .then(res => res.json())
      .then(entries => this.setState({ entries: entries.feed.entry }))
      .catch(err => console.error);
  }

  handleEntrySelected(index) {
    const selectedEntry = this.state.entries[index];
    this.setState({ currentEntry: selectedEntry })
  }

  render() {
    return (
      <div>
        <h2>Top 20 Music Songs</h2>
        <EntrySelector entries={this.state.entries} onEntrySelected={this.handleEntrySelected} />
        <EntryDetail entry={this.state.currentEntry} />
        </div>
    );
  }

}

export default EntryContainer;
