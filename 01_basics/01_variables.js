const accNumber=1234;
var accId= "ha@yahoo.com";
let accBranch = "raipur";
let accStatus;

// reassigning
// accNumber =1222;//not allowed
console.log(accNumber);
// TypeError: Assignment to constant variable.
accId ="hf@yahoo.com";
accBranch = "Delhi"

console.table([accBranch,accNumber,accId,accStatus]);