function largestOfFour(arr) {
  let q=[]
  for(let i=0;i<arr.length;i++) {
    let a = arr[i][0]
    for(let j=0;j<arr[i].length;j++) {
      if(a<arr[i][j])
      a=arr[i][j]
    }
    q[i]=a
  }
  return q;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);