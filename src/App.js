import React from "react";
import './App.css';
import {KeyboardConnect, KeyboardShortcut} from "./Keypress";
import RightComponent from "./RightComponent";
class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      colour: ''
    }
  }

  turnGreen = ()=>{
    this.setState({colour: 'green'});
  }
  turnYellow = ()=>{
    this.setState({colour: 'yellow'});
  }

  render() {
    const {colour} = this.state
    return (
        <div className="App">
          <div className="parent">
            <div className="child left" style={{backgroundColor: colour}}>
              <KeyboardShortcut combo="shift g" callback={this.turnGreen} description="Turn green"/>
              <KeyboardShortcut combo="shift y" callback={this.turnYellow} description="Turn yellow"/>
              Press <b>shift + y</b> to turn background yellow and <b>shift + g</b> to green
            </div>
            <div className="child right">
              <div>
                <div className="title">Shortcuts From HOC</div>
                {this.props.activeShortCuts.map((e, index)=>(
                    <div className="desc" key={index}>{index+1}. {JSON.stringify(e)}</div>
                ))}
              </div>
                <RightComponent />
            </div>
          </div>
        </div>
    );
  }
}

export default KeyboardConnect(App)
