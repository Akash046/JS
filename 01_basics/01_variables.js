const accountId = 12322
let accountEmail = "akash@google.com"
var accountPassword = "12344"
accountCity = "Varanasi"

// accountId = 2 // not allowed

accountEmail = "hdfc@yah.com"
accountPassword = "21324"
accountCity = "Benglore"

console.log(accountId)

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity])