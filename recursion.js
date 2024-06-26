/** product: calculate the product of an array of numbers. */

function product(nums, idx = 0) {
  if (idx === nums.length) return 1;
  return nums[idx] * product(nums, idx + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, idx = 0, longestCount = 0) {
  if (idx === words.length) return longestCount;
  longestCount = Math.max(words[idx].length, longestCount);
  return longest(words, idx + 1, longestCount);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, idx = 0, everySecond = "") {
  if (idx === str.length) return everySecond;
  everySecond += str[idx];
  return everyOther(str, idx + 2, everySecond);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, idx = 0) {
  let leftIndy = idx;
  let rightIndy = str.length - idx - 1;
  if (leftIndy >= rightIndy) return true;
  if (str[leftIndy] !== str[rightIndy]) return false;
  return isPalindrome(str, idx + 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
  if (idx > arr.length) return -1;
  if (arr[idx] === val) return idx;
  return findIndex(arr, val, idx + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, idx = str.length - 1, newString = "") {
  if (idx < 0) return newString;
  newString += str[idx];
  return revString(str, idx - 1, newString);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let stringArr = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") stringArr.push(obj[key]);
    if (typeof obj[key] === "object")
      stringArr.push(...gatherStrings(obj[key]));
  }
  return stringArr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, leftInd = 0, rightInd = arr.length) {
  if (leftInd > rightInd) return -1;
  let middle = Math.floor((leftInd + rightInd) / 2);

  if (arr[middle] === val) return middle;
  if (arr[middle] > val) {
    return binarySearch(arr, val, leftInd, middle - 1);
  }
  return binarySearch(arr, val, middle + 1, rightInd);
}
