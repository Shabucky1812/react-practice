import React from "react";

class StatefulGreetingWithPrevState extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello",
            buttonText: "Exit",
            count: 0,
        };
    }

    handleClick() {
        this.setState((prevState, prevProps) => {
            return {
                introduction: prevState.introduction === "Hello" ? "Goodbye" : "Hello",
                buttonText: prevState.buttonText === "Exit" ? "Enter" : "Exit",
            }
        });
    }

    incrementCount() {
        this.setState((prevState, prevProps) => {
            console.log(prevState)
            console.log(prevProps)
            return {
                count: prevState.count + 1
            }
        });
    }

    incrementFive() {
        this.incrementCount()
        this.incrementCount()
        this.incrementCount()
        this.incrementCount()
        this.incrementCount()
    }

    render() {
        return (
            <div>
                <h1>{this.state.introduction}, {this.props.name}! {this.props.greeting}</h1>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
                <h2>Times button clicked: {this.state.count}</h2>
                <button onClick={() => this.incrementCount()}>Click to count!</button>
            </div>
        )
    }
}

export default StatefulGreetingWithPrevState;