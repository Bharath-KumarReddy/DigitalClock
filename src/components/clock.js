
import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: this.getTime(),
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(this.updateTime, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  updateTime = () => {
    this.setState({ time: this.getTime() });
  };

  getTime = () => {
    const d = new Date();
    let hour = d.getHours();
    let minute = d.getMinutes();
    let second = d.getSeconds();
    let amorpm = "AM";

    if (hour >= 12) {
      amorpm = "PM";
    }

    if (hour > 12) {
      hour = hour - 12;
    }

    if (hour < 10) {
      hour = "0" + hour;
    }

    if (minute < 10) {
      minute = "0" + minute;
    }

    if (second < 10) {
      second = "0" + second;
    }

    return hour + ":" + minute + ":" + second + " " + amorpm;
  };

  render() {
    return (
      <div id="clock" className="clock">
        {this.state.time}
      </div>
    );
  }
}

export default Clock;
