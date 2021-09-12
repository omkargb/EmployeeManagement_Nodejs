//Calculate Wages till a condition of total working hours of 160 or max days of 20 is reached for a month
const IS_PART_TIME = 1;      const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;   const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const MAX_WORKING_DAYS=20;
const MAX_HRS_IN_MONTH=160;
let totalEmpHrs=0, empWorkingDays=0;

while(totalEmpHrs<=MAX_HRS_IN_MONTH && empWorkingDays<MAX_WORKING_DAYS)
{
    empWorkingDays++;
    let empCheck=Math.floor(Math.random() * 10) % 3;  //gives 0,1 or 2
    totalEmpHrs=totalEmpHrs + GetEmpWorkingHours(empCheck);   //function call
}

let empWage = totalEmpHrs * WAGE_PER_HOUR;   //calculate from returned value
console.log("Total working Days : "+empWorkingDays+" | Total working hours : "+totalEmpHrs+" | Employee Wage : "+empWage);

function GetEmpWorkingHours(empCheck)
{
    switch(empCheck)
    {
        case IS_PART_TIME:
            return PART_TIME_HOURS;   //4
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;   //8
        default:
            return 0;
    }
}