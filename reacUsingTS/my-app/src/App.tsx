import React from "react";
import "./Hello.css";

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}
interface State {
  currentEnthusiasm: number;
}
class Hello extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { currentEnthusiasm: props.enthusiasmLevel || 1 };
  }
  onIncrement = () => this.updateEnthusiasm(this.state.currentEnthusiasm + 1);
  onDecrement = () => this.updateEnthusiasm(this.state.currentEnthusiasm - 1);

  render() {
    const { name, enthusiasmLevel = 1 } = this.props;
    if (enthusiasmLevel <= 0) {
      throw new Error("You could be a little more enthusiastic.");
    }
    return (
      <div className="hello">
        <div className="greeting">
          Hello {name + getExclamationMarks(this.state.currentEnthusiasm)}
        </div>
        <div className="button_collection">

        <button className="btn" onClick={this.onIncrement}>+</button>
        <button className="btn" onClick={this.onDecrement}>--</button>
        </div>

      </div>
     
    );
  }
  updateEnthusiasm(currentEnthusiasm: number) {
    this.setState({ currentEnthusiasm });
  }
}

export default Hello;

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join("!");
}
