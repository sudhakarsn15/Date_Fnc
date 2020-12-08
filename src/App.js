import React from "react";
import "./styles.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayStartDate: new Date(),
      displayEndDate: new Date()
    };
  }
  onLoadDisplayDateFnc = () => {
    const currentDate = new Date("2020-12-31");
    // console.log(currentDate.getDate());
    var first = currentDate.getDate() - currentDate.getDay();
    // var last = first + 7;
    var last = currentDate.getDate() - currentDate.getDay() + 6;
    var firstday = new Date(currentDate.setDate(first));
    // var lastday = new Date(currentDate.setDate(last)).toUTCString();
    var lastday = new Date(currentDate.setDate(last));
    console.log(firstday, lastday);
    this.setState({
      displayStartDate: firstday,
      displayEndDate: lastday
    });
    // if (displayStartDate.getMonth() === displayEndDate.getMonth()) {
    //   console.log("months are equal");
    //   //   console.log(displayStartDate, displayEndDate);
    // } else {
    //   console.log("months are not equal");
    // }
  };
  componentDidMount() {
    this.onLoadDisplayDateFnc();
  }
  render() {
    const { displayStartDate, displayEndDate } = this.state;
    return (
      <div className="App">
        <h1>Date Function</h1>
        <button>Dec</button>
        <input value={displayStartDate}></input>
        <input value={displayEndDate}></input>
        <button>Inc</button>
      </div>
    );
  }
}
