function findLongestWordLength(str) {
  let a=str.split(" ")
  let q=a[0].length
  for(let i=0;i<a.length;i++) {
    if(q<a[i].length) {
      q=a[i].length
    }
  }
  return q;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");