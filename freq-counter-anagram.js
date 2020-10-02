/**
 * USing frequecy counter
 * Given two strings,write a function to determine if the second string is an anagram of first.
 * An anagram is a word,phrase or name formed by rearranging the letters of another.
 * such as cinema, formed form iceman
 *
 * validAnagram('','') returns true
 * validAnagram('aaz','zza') returns false
 * validAnagram('anagram','nagaram') returns true
 * validAnagram('rat','car') returns false
 * validAnagram('awesome','awesom') returns false
 * validAnagram('qwerty','qeywrt') returns true
 * validAnagram('texttwisttime','timetwisttext') returns true
 */

validAnagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  let str1freq = {};
  let str2freq = {};
  for (let i = 0; i < str1.length; i++) {
    console.log("before", str1freq[str1[i]], str1freq[str1[i]] + 1);
    str1freq[str1[i]] = str1freq[str1[i]] ? str1freq[str1[i]] + 1 : 1;
  }

  for (let i = 0; i < str2.length; i++) {
    str2freq[str2[i]] = str2freq[str2[i]] ? str2freq[str2[i]] + 1 : 1;
  }

  for (let key in str1freq) {
    if (str1freq[key] && str2freq[key] && str1freq[key] === str2freq[key]) {
      delete str2freq[str2freq[key]];
      continue;
    }
    return false;
  }
  console.log(str1freq, str2freq);
  return true;
};

//course
function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  console.log(lookup);

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

console.log(validAnagram("rat", "car"));
