const AccountID = 69
let AccountName = "namannsr"
var AccountPassword = "Naman@12345"
accountType = "Public"
let AccountState //(Will print undefined)


AccountName = "namansr" //(Mutable)
AccountPassword = "Naman@123" //(Mutable)
//AccountID = 67 (const are non mutable)
accountType = "Private" //(Mutable)

// console.log(AccountID);
console.table([AccountID,AccountName,AccountPassword,accountType])

/*
Prefer not to use var because of issue in block scope and functional scope
*/

