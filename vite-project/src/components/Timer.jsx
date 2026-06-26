import React from "react";

class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      seconds: 0,
    };
  }

  componentDidMount() {
    console.log("Mounted");

    this.interval = setInterval(() => {
      this.setState({
        seconds: this.state.seconds + 1,
      });
    }, 1000);
  }

  componentDidUpdate() {
    console.log("Updated");
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    console.log("Unmounted");
  }

  render() {
    return (
      <>
        <h2>Lifecycle Component</h2>

        <p>
          Timer:
          {this.state.seconds}
        </p>
      </>
    );
  }
}

export default Timer;
