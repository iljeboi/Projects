import React, {Component} from 'react';
import './App.css';
import ButtonLayout from './calc/ButtonLayout';
class App extends Component {
  constructor(props){
      super(props);

      this.state = {
        current: "",
        previous: [],
        nextIsReset: false,
      }
  }

  reset = () => {
    this.setState({current: '', previous: [], nextIsReset: false});
  }

  addToCurrent = (symbol) => {
    if(["/", "-", "+", "*"].indexOf(symbol) > -1){
      let {previous} = this.state;
      previous.push(this.state.current + symbol)
      this.setState({previous, current: ""});
    }else{
      if((this.state.current === "0" && symbol !== ".") || this.nextIsReset){
        this.setState({current: symbol, nextIsReset: false})
      }else{
        this.setState({current: this.state.current + symbol});
      }
    }
  }

  calculate = (symbol) => {
      let {current, previous, nextIsReset} = this.state;
      if (previous.length > 0){
        current = eval(String(previous[previous.length - 1] + current));
        this.setState({current, previous:[], nextIsReset: true});
      }
  }


  render() {
    const buttons = [
      {symbol: 'C', cols: 3, action: this.reset},
      {symbol: '/', cols: 1, action: this.addToCurrent},
      {symbol: '7', cols: 1, action: this.addToCurrent},
      {symbol: '8', cols: 1, action: this.addToCurrent},
      {symbol: '9', cols: 1, action: this.addToCurrent},
      {symbol: '*', cols: 1, action: this.addToCurrent},
      {symbol: '4', cols: 1, action: this.addToCurrent},
      {symbol: '5', cols: 1, action: this.addToCurrent},
      {symbol: '6', cols: 1, action: this.addToCurrent},
      {symbol: '-', cols: 1, action: this.addToCurrent},
      {symbol: '1', cols: 1, action: this.addToCurrent},
      {symbol: '2', cols: 1, action: this.addToCurrent},
      {symbol: '3', cols: 1, action: this.addToCurrent},
      {symbol: '+', cols: 1, action: this.addToCurrent},
      {symbol: '0', cols: 2, action: this.addToCurrent},
      {symbol: '.', cols: 1, action: this.addToCurrent},
      {symbol: '=', cols: 1, action: this.calculate}
    ]

    return (
      <div className="calculator">
        {this.state.previous.length > 0 ?
          <div className="float-prev">
            <span className="prev-text">
              {this.state.previous[this.state.previous.length - 1]}  
            </span>
          </div>
          : null
        }
        <input disabled="disabled" className="result" type="text" value={this.state.current} placeholder="0"></input>
        {buttons.map((btn, i) => {
          return <ButtonLayout key={i} symbol={btn.symbol} cols={btn.cols} action={(symbol) => btn.action(symbol)} />
        })}
        <div className="bottom"></div>
      </div>
    );
  }

}

export default App;
