import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class DatePickerProvider extends Component {
    state = {
        startDate: new Date(),
      }
    handleChange = date => {
        this.setState({
          startDate: date
        });
      };
    render() { 
        return (
            <div className = 'date-picker'>
                <DatePicker 
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                    placeholderText = 'Due Date'/>
            </div>
          );
    }
}
 
export default DatePickerProvider;