function countOnline(usersObj) {
  // Only change code below this line
  let num=0
  for (let user in usersObj) {
    if(usersObj[user].online === true) {
      num++
    }
  }
  return num
  // Only change code above this line
}