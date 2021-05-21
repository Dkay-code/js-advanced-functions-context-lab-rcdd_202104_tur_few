/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function createEmployeeRecord ([firstName, familyName, title, payPerHour]) {
    const obj = {
        firstName: `${firstName}`,
        familyName: `${familyName}`,
        title: `${title}`,
        payPerHour: payPerHour,
        timeInEvents: [],
        timeOutEvents: [],
    }
    return obj;
};


function createEmployeeRecords (arrays) {
return arrays.map(element => element = createEmployeeRecord(element))
};


function createTimeInEvent (dateHour){
  this.timeInEvents.push({
    type : "TimeIn",
    hour : parseInt(dateHour.slice(10)),
    date : dateHour.slice(0,10),
  });
  return this;
};

function createTimeOutEvent (dateHour){
  this.timeOutEvents.push({
    type : "TimeOut",
    hour : parseInt(dateHour.slice(10)),
    date : dateHour.slice(0,10),
  });
  return this;
};

function hoursWorkedOnDate(employeeObject, date="YYYY-MM-DD"){
  let timeIn = employeeObject.timeInEvents.filter(checkIn => checkIn.date === date);
  let timeOut = employeeObject.timeOutEvents.filter(checkOut => checkOut.date === date);
  return (parseInt(timeOut[0].hour)-parseInt(timeIn[0].hour))/100;
}

function wagesEarnedOnDate (employeeObject, date="YYYY-MM-DD"){
  let hoursWorked = hoursWorkedOnDate(employeeObject, date);
  let rate  = employeeObject.payPerHour;
  return (parseInt(hoursWorked))*(parseInt(rate));
}


function calculatePayroll(employeeArr) {
  return employeeArr.reduce((acc, payroll) => acc + allWagesFor(payroll),0);
}

function findEmployeeByFirstName (srcArray, firstName){
  return srcArray.find((employee) => employee.firstName === firstName);
}
