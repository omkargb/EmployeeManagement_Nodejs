//Calculate Daily Employee Wage
const IS_PART_TIME =1;  const IS_FULL_TIME =2;
const PART_TIME_HOURS =4;
const FULL_TIME_HOURS =8;
const WAGE_PER_HOUR =20;
let empHrs=0;
let empCheck=Math.floor(Math.random()*10) % 3;  //gives 0,1 or 2

switch(empCheck)
{
    case IS_PART_TIME:
        empHrs = PART_TIME_HOURS;   //4
        break;
    case IS_FULL_TIME:
        empHrs = FULL_TIME_HOURS;   //8
        break;
    default:
        empHrs=0;
}

let empWage = empHrs*WAGE_PER_HOUR;
console.log("Employee Wage for a day : "+empWage);
