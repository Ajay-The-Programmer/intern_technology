import React from "react";
import "./Hello.css";

export interface Props {
  name: string;
  default_exclamation?: number;
}
interface State {
  current_exclamation_mark: number;
}
class Hello extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { 
      current_exclamation_mark: props.default_exclamation || 1
     };
  }
  onIncrement = () => this.updateExclamation(this.state.current_exclamation_mark + 1);
  onDecrement = () => this.updateExclamation(this.state.current_exclamation_mark - 1);

  render() {
    const { name, default_exclamation = 1 } = this.props;
    if (default_exclamation <= 0) {
      throw new Error("You could be a little more enthusiastic.");
    }
    return (
      <div className="hello">
        <div className="greeting">
          Hello {name + getExclamationMarks(this.state.current_exclamation_mark)}
        </div>
        <div className="button_collection">

        <button className="btn" onClick={this.onIncrement}>+</button>
        <button className="btn" onClick={this.onDecrement}>--</button>
        </div>

      </div>
     
    );
  }
  updateExclamation(current_exclamation_mark: number) {
    this.setState({ current_exclamation_mark });
  }
}

export default Hello;

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join("!");
}
