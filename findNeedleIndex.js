function needleIndex(haystack, needle) {
  if (haystack.length > needle.length) {
    let needleHash = 0;
    let haystackHash = 0;
    //let subString = "";
    for (let i = 0; i < needle.length; i++) {
      needleHash += needle.charCodeAt(i);
      // console.log("🚀 ~ file: findNeedleIndex.js:6 ~ needleIndex ~ haystack[i].charCodeAt()*i:", needle[i].charCodeAt()*(i+1))
    }
    // return needleHash;
    for (let i = 0; i < needle.length; i++) {
      haystackHash += haystack.charCodeAt(i);
    }
    for (let i = 0, j = needle.length; j <= haystack.length; i++, j++) {
      if (haystackHash == needleHash) {
        if (needle === haystack.substring(i, j)) {
          return i;
        }
      } else {
        haystackHash =
          haystackHash - haystack.charCodeAt(i) + haystack.charCodeAt(j);
      }
    }
    return -1;
  } else {
    return -1;
  }
}

console.log(needleIndex("sadbutsad", "sad"));
console.log(needleIndex("codemama", "ostad"));

// Time Complexity: O(n*m) where n is the length of haystack and m is the length of needle
// Space Complexity:O(1)
