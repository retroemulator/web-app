import React from 'react';
import Grid from '../../components/grid';

import './App.css';

const CONSOLES = [
  {
    name: 'GBA',
    key: 'gba',
  },
  {
    name: 'NES',
    key: 'nes',
  },
  {
    name: 'SNES',
    key: 'snes',
  },
  {
    name: 'N64',
    key: 'n64',
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedConsoleIndex: 0
    };

    this.selectConsole = this.selectConsole.bind(this);
  }

  selectConsole(index) {
    this.setState({ selectedConsoleIndex: index });
  }

  render() {
    return (
      <div>
        <div className="App-console-col">
          <div className="App-header">Consoles</div>
          {CONSOLES.map((item, index) => {
            return (
              <div
                key={index}
                className={`App-console-col-item ${this.state.selectedConsoleIndex === index && 'App-console-col-item-selected'}`}
                onClick={() => this.selectConsole(index)}>
                <div className="App-console-col-item-text">
                {item.name}
                </div>
              </div>
            )
          })}
        </div>
        <div className="App-console-grid">
          <Grid consoleInfo={CONSOLES[this.state.selectedConsoleIndex]} />
        </div>
      </div>
    );
  }
}

export default App;
