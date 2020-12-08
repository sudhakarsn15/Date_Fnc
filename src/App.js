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
  decreaseDateFnc = () => {
    const { displayStartDate, displayEndDate } = this.state;
    var decreasedStartDate = new Date(
      displayStartDate.setDate(displayStartDate.getDate() - 7)
    );
    var decreasedEndDate = new Date(
      displayEndDate.setDate(displayEndDate.getDate() - 7)
    );
    this.setState({
      dispalyStartDate: decreasedStartDate,
      dispalyEndDate: decreasedEndDate
    });
  };
  increaseDateFnc = () => {
    const { displayStartDate, displayEndDate } = this.state;
    var increaseStartDate = new Date(
      displayStartDate.setDate(displayStartDate.getDate() + 7)
    );
    var increaseEndDate = new Date(
      displayEndDate.setDate(displayEndDate.getDate() + 7)
    );
    this.setState({
      dispalyStartDate: increaseStartDate,
      dispalyEndDate: increaseEndDate
    });
  };
  onLoadDisplayDateFnc = () => {
    const currentDate = new Date("2020-12-31");
    var first = currentDate.getDate() - currentDate.getDay();
    var last = currentDate.getDate() - currentDate.getDay() + 6;
    var firstday = new Date(currentDate.setDate(first));
    var lastday = new Date(currentDate.setDate(last));
    console.log(firstday, lastday);
    this.setState({
      displayStartDate: firstday,
      displayEndDate: lastday
    });
  };
  componentDidMount() {
    this.onLoadDisplayDateFnc();
  }
  render() {
    const { displayStartDate, displayEndDate } = this.state;
    return (
      <div className="App">
        <h1>Date Function</h1>
        <h4>The main intention is to find start and end date of the week</h4>
        <p>
          By clicking on "Dec" and "Inc" user can navigate to previous and next
          week
        </p>
        <button onClick={this.decreaseDateFnc}>Dec</button>
        <input value={displayStartDate} readOnly></input>
        <input value={displayEndDate} readOnly></input>
        <button onClick={this.increaseDateFnc}>Inc</button>
      </div>
    );
  }
}
