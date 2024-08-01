
function createEmployeeRecord(array) {
    let [firstName, familyName, title, payPerHour] = array;
     return {
     firstName,
     familyName,
     title,
     payPerHour,
     timeInEvents: [],
     timeOutEvents: [],
     };
  
    }

  function createEmployeeRecords(arrays){
      return arrays.map(createEmployeeRecord)
  }
  function createTimeInEvent(dateTime){
      let [date, hour] = dateTime.split(' ');
      this.timeInEvents.push({
        type: 'TimeIn',
        hour: parseInt(hour, 10),      
        date: date,
      });
      return this
  
  }
  function createTimeOutEvent(clockOut){
      let [date, hour] = clockOut.split(' ');
      this.timeOutEvents.push({
        type: 'TimeOut',
        hour: parseInt (hour, 10),      
        date: date,
      });
      return this
  
  }
  function hoursWorkedOnDate(dateWorked){
      let timeIn = this.timeInEvents.find(event => event.date === dateWorked);
      let timeOut = this.timeOutEvents.find(event => event.date === dateWorked);
      return (timeOut.hour - timeIn.hour) / 100;
  }
  function wagesEarnedOnDate(dateWorked){
      return hoursWorkedOnDate.call(this, dateWorked) * this.payPerHour
  
  }
  

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}


function findEmployeeByFirstName(arrays, firstName){
    return arrays.find(record => record.firstName === firstName);

}

function calculatePayroll(employees) {
    return employees.reduce((memo,employee) => memo + allWagesFor.call(employee), 0);
}

