const IsAbsent=0;  //fix value, can't reassign

//UC1-Ability to Check Employee is present or Absent
//genrate random value - 0 or 1
let randomValue = Math.floor(Math.random() *10)%2; 
if(randomValue==IsAbsent)
{
    console.log(" Employee is absent.")
}
else
{
    console.log(" Employee is present.")
}
