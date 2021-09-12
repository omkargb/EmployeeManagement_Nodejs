//Calculating Wages for a Month assuming 20 Working Days
const IS_PART_TIME = 1;      const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;   const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const WORKING_DAYS=20;
let empHrs=0;

for(let day = 0; day < WORKING_DAYS; day++){
let empCheck=Math.floor(Math.random() * 10) % 3;  //gives 0,1 or 2
empHrs=empHrs + GetEmpWorkingHours(empCheck);   //function call
}

let empWage = empHrs * WAGE_PER_HOUR;   //calculate from returned value
console.log("Total hours : "+empHrs+" | Employee Wage : "+empWage);

function GetEmpWorkingHours(empCheck)
{
    switch(empCheck)
    {
        case IS_PART_TIME:
            return PART_TIME_HOURS;   //4
            break;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;   //8
            break;
        default:
            return 0;
    }
}