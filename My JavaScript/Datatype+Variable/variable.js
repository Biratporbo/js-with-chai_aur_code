const accountId = 231001102151
let accountEmail = "biratdey200311@gmail.com"
var accountPassword = "birat2151"
let accountState;

accountCity = "Kolkata"
// accountId = 2

accountEmail = "birat231001102151@technoindiaeducation.com"
accountPassword = "birat@2151"
accountCity = "Bengaluru"
accountState = "West Bengal"

/*
NOTE:-
Prefer not to use 'var'
because of issues in block scope and functional scope
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
