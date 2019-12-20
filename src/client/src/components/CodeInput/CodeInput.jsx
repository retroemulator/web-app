import React from 'react';
import './CodeInput.css';

export default class CodeInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cellValues: {}
    };
    this.cellRef = {};
    this.handleCellChange = this.handleCellChange.bind(this);
    this.checkCellValues = this.checkCellValues.bind(this);
  }

  componentDidMount() {
    if (this.cellRef && this.cellRef[0]) {
      this.cellRef[0].focus();
    }
    this.props.onIncomplete && this.props.onIncomplete();
  }

  checkCellValues(cellValues) {
    let filled = true;
    const entries = [];
    for (let i = 0; i < this.props.length; i++) {
      if (cellValues[i] === undefined || cellValues[i].length === 0) {
        filled = false;
        break;
      }
      entries.push(cellValues[i]);
    }

    if (filled) {
      this.props.onComplete && this.props.onComplete(entries.join(''));
    } else {
      this.props.onIncomplete && this.props.onIncomplete();
    }
  }

  handleCellChange(event, index) {
    const re = /^[0-9a-zA-Z\b]+$/;
    if (event.target.value !== '' && !re.test(event.target.value)) {
      return;
    }

    const cellValues = {
      ...this.state.cellValues,
      [index]: event.target.value,
    };
    this.setState({ cellValues });
    this.checkCellValues(cellValues);

    if (index === this.props.length - 1) return;
    if (event.target.value !== '') {
      this.cellRef[index + 1].focus();
    }
  }

  render() {
    return (
      <React.Fragment>
        {this.props.length > 0 &&
          [...Array(this.props.length).keys()].map(i => {
            return (
              <input
                key={i}
                ref={x => { this.cellRef[i] = x; }}
                className="CodeInput-cell"
                maxLength="1"
                type="text"
                value={this.state.cellValues[i] || ''}
                onChange={e => this.handleCellChange(e, i)}
              />
            );
          })
        }
      </React.Fragment>
    );
  }
}
