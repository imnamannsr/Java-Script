let score = 33
console.log(typeof score) //Will print number

let age = "19"
console.log(typeof age) //Will print string

let integerAge = Number(age)
console.log(typeof integerAge) //This will give number only

let age2 = "20abc"
let integerAge2 = Number(age2) //It will convert the age2 to number but value will be NaN
console.log(typeof integerAge2) //number
console.log(integerAge2) //NaN

//"33" => 33
//"33abc" => NaN
//null => 0
//boolean 0/1 (depends)
//