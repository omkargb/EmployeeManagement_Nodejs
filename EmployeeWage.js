//Calculate Daily Employee Wage
const IS_PART_TIME = 1;      const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;   const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
let empHrs=0;
let empCheck=Math.floor(Math.random() * 10) % 3;  //gives 0,1 or 2

empHrs=GetEmpWorkingHours(empCheck);   //function call
let empWage = empHrs * WAGE_PER_HOUR;   //calculate from returned value
console.log("Employee Wage for a day : "+empWage);

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