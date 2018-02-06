import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.previousDay = this.previousDay.bind(this);
    this.nextDay = this.nextDay.bind(this);
    this.state = {
      activeDay: 0,
      events: [
        {
          day: 0,
          time: 9,
          description: 'work',
        },
        {
          day: 0,
          time: 20,
          description: 'party',
        },
        {
          day: 1,
          time: 9,
          description: 'work',
        },
        {
          day: 2,
          time: 17,
          description: 'football',
        }
      ]
    };
  }

  render() {
    return (
      <div id="container">
        <h1>Calendar</h1>
        <div id="calendar">
          {
            this.getEventsByDay(this.state.activeDay).map(
              function(event) {
                return (
                  <div style={ {
                      position: 'absolute',
                      top: event.time*10,
                    } }>
                    {event.time}:00 -&nbsp;
                    {event.description}
                  </div>
                );
              }
            )
          }
        </div>
        <button onClick={this.previousDay}>previous day</button>&nbsp;
        <button onClick={this.nextDay}>next day</button>


        <h1>raw data (for debugging)</h1>
        { JSON.stringify(this.state.events) }
      </div>
    );
  }

  getEventsByDay(day) {
    let results = [];
    for (let event of this.state.events) {
      if (day === event.day) {
        results.push(event);
      }
    }
    return results;
  }

  nextDay() {
    this.setState(
      {
        activeDay: this.state.activeDay + 1,
      }
    );
  }

  previousDay() {
    this.setState(
      {
        activeDay: this.state.activeDay - 1
      }
    )
  }
}

export default App;
