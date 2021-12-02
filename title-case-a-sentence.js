function titleCase(str) {
  let a=str.split(" ")
  for(let i=0;i<a.length;i++) {
    let c=a[i]
    c=c[0].toUpperCase()+c.substring(1).toLowerCase()
    a[i]=c
  }
  return a.join(" ")
}

titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");