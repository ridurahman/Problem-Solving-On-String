function shuffleString(s, indices) {
  if (s.length == indices.length) {
    let n = s.length;   
    let newString = [];
    for (let i = 0; i < n; i++) {
      newString[indices[i]] = s[i];
    }
    return newString.join("");
  }
}

console.log(shuffleString("mamacode", [4, 5, 6, 7, 0, 1, 2, 3]));
console.log(shuffleString("dosta", [4,0,1,2,3]));
console.log(shuffleString("abc", [1,0,2]));

// Time Complexity: O(n)
// Space Complexity:O(n)