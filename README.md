## Day 1: 
Today's Progress: completed the alternate, compareTriplet and minimumPassword challenges. <br />
**#1** compareTriplet: compare the value of two arrays and determine the comparison points.<br />

**#2** minimumPassword: find the minumum of the characters to add to make sure the passport meets criteria. <br />

Thoughts:  This challenges reminds me to reveiw the regular expression and syntaxes. 1)use conditions to figure out how many kinds of criteras current password met. 2) calculate the length of current password and have conditions to check whether the current length meets and minumum length requirement. <br />


**#3** Alternate: remove the letters of a string and find the longest string that contains only two alternating letters.<br />

Thoughts: 
#3 I struggled on this one and it took a while. I learned about the functions of regular expression, like match().replace().Also use new RegExp to write regular expression variables, like new RegExp(`[^${letters[i]}${letters[j]}]`, 'g').<br />


## Day 2:
Today's Progress: completed the staircase and DiagonalDifference.<br />
**#4** Staircase: <br />
Thought: Avoided using O(N^2) time complexity. Learned using repeat function.<br />
**#5** DiagonalDifference:Given a square matrix, calculate the absolute difference between the sums of its diagonals.<br />
thoughts: learned the squareMatrix and how to represent each square with arr[i][j]. <br />


## Day 3: 
Today's Progress: completed the DiagonalDifference.<br />
 #6 DiagonalDifference:Given a rectangle or square matrix, calculate the absolute difference between the sums of its diagonals. <br />
thoughts: This is very challenging, but the key is to find the condition when squares are in the diaognals.<br />

## Day 4: 
Today's Progress: completed the CaesarCipher <br />
#7 CaesarCipher: shifts each letter by a number of letters.

thoughts: This is very challenging and code in my first try was not DRY. I found it is helpful to write a seperate function to deal some logics to make the code clean. Did not use  O(N^2) time complexity which is a success.  

## Day 5:
Today's Progress: completed the superReducedString & camelcase & marsExploration<br />
#8 superReducedString : Reduce a string of lowercase characters in range ascii[‘a’..’z’]by doing a series of operations. In each operation, select a pair of adjacent letters that match, and delete them.

Delete as many characters as possible using this method and return the resulting string. If the final string is empty, return Empty String

thoughts: This took me a while to solve the problem. I stuck on the case that if the letter is not the same to the adjacent one and is also different from the newString, I need to remove the letter from newString if they are the same. I get better understanding of concat, slice and simplied my code. </br>

#9 camelcase : Given s , determine the number of words in s .
thoughts: very simple, a good review of filter function. </br>

#10 marsExploration : Given the signal received by Earth as a string, , determine how many letters of the SOS message have been changed by radiation.
thoughts: very simple, a good review of if conditions </br>

#11 hackerrankInString : check whether given string contains the word hackerrank 
thoughts: very simple, a good review of .*? respresents random characters in regular expression </br>

#12 pangrams : A pangram is a string that contains every letter of the alphabet. Given a sentence determine whether it is a pangram in the English alphabet. Ignore case. Return either pangram or not pangram as appropriate.
thoughts: very simple, a good review of map function </br>


## Day 6:
Today's Progress: completed the weightedUniformStrings && separateNumbers<br />
#13 weightedUniformStrings 
thoughts:I used the frequency counter to check the continous letters and it is not efficient. Used the logic to check the current char and previous char and update the weight is better. Also I learned new Set()to generate an array and charCodeAt(0) </br>
#14 separateNumbers
thoughts: This one is very challenging and it took me a while to figure out the logic. 
Instead of checking whether the number == 10** n -1 (99 means next number has one extra digit), check the length of (currentNum + 1) and check whether currentNum + 1 equals to the s.slice(j, j + next.length). Also I learned what BigInt is. This values represent numeric values which are too large to be represented by the number primitive. </br>

#15 funnyString
thoughts: This one is simple. </br>


#16 gemstones
thoughts: Need to consider edge cases and my solution is not efficient.  </br>


## Day 7:
Today's Progress: completed the alternatingCharacters <br />
#17 alternatingCharacters: find the minimum number of required deletions and change it into a string such that there are no matching adjacent characters. 
thoughts:simple and I defines the variables and made the code easy to read. </br>


## Day 8:
Today's Progress: completed the beautifulBinaryString <br />
#18 beautifulBinaryString: Alice has a binary string. She thinks a binary string is beautiful if and only if it doesn't contain the substring .

In one step, Alice can change a  to a  or vice versa. Count and print the minimum number of steps needed to make Alice see the string as beautiful.
thoughts:simple and key point is check whether the next 3 chars follows the pattern of '010' and if it is yes, skip to the i +2.  </br>

## Day 9:
Today's Progress: completed the theLoveLetterMystery <br />
#19 theLoveLetterMystery: Find the minimum number of operations required to convert a given string into a palindrome.

thoughts:simple and key point is check the difference of charCodeAt between the letter at s[i] and s[s.length -1 -i] position and loop only Math.floor(s.length -1)times   </br>


## Day 10:
Today's Progress: completed the highestValuePalindrome <br />
#20 highestValuePalindrome: Given a string representing the starting number, and a maximum number of changes allowed, create the largest palindromic string of digits possible or the string '-1' if it is not possible to create a palindrome under the contstraints.

thoughts:challenging and key point is check the conditions of how many numbers are not pairs. k < NotPair and k == NotPair are very simple and it is difficult to make the logics clear for the case when k is bigger than NotPair. I also need to consider whether the number is 9 and see whether to change it. So far my code passes most of tests but there are still bugs.   </br>

## Day 11:
Today's Progress: completed the PalindromeIndex <br />
#21 PalindromeIndex: Given a string of lowercase letters in the range ascii[a-z], determine the index of a character that can be removed to make the string a palindrome. There may be more than one solution, but any will do. If the word is already a palindrome or there is no solution, return -1. Otherwise, return the index of a character to remove.</br>

thoughts:challenging and there are still bugs.  My main logics works as to check whether the string is palindrome first and if yes, return -1. Then find the removedIndex and check whether the altered string is a palindrome.   </br>

## Day 12:
Today's Progress: completed the reverseInt <br />
#21 reverseInt

thoughts:very simple   </br>


## Day 13:
Today's Progress: completed the bigSorting & revisedBigSorting <br />
#22 bigSorting:Sort the array's elements in non-decreasing, or ascending order of their integer values and return the sorted array.
#23 insertionSort1: 

thoughts:very simple but I made mistake of not reading the requirement first. Also in a loop , when to use break and where to use return  </br>


## Day 14:
Today's Progress: completed the birthday  <br />
#24 birthday:Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it.

Lily decides to share a contiguous segment of the bar selected such that:

The length of the segment matches Ron's birth month, and,
The sum of the integers on the squares is equal to his birth day.
Determine how many ways she can divide the chocolate.

thoughts:a good review to use sliding window </br>


## Day 15:
Today's Progress: completed the maxSubarraySum <br />
#25 maxSubarraySum:
thoughts:a good review to use reduce </br>


## Day 16:
Today's Progress: completed the divisibleSumPairs & migratoryBirds<br />
#26 divisibleSumPairs:
thoughts:used the filter to avoid big 0 n2. </br>
#27 migratoryBirds:
thoughts:frequency counter </br>


## Day 17:
Today's Progress: completed the minimaxSum & birthdayCandles &timeConversion<br />
#28 minimaxSum
thoughts:good review for assorting array and using reduce function </br>
#29 birthdayCandles
thoughts:good review of frequency counter  </br>
#30 timeConversion
thoughts:easy, good review of if conditions  </br>

## Day 18:
Today's Progress: completed the is Valid<br />
#31 Sherlock considers a string to be valid if all characters of the string appear the same number of times. It is also valid if he can remove just  character at  index in the string, and the remaining characters will occur the same number of times. Given a string , determine if it is valid. If so, return YES, otherwise return NO.
thoughts:frequency counter but it failed two test. 'aaaabbcc'case </br>

## Day 19:
Today's Progress: completed the circularArrayRotation && permutationEquation<br />
#32 For each array, perform a number of right circular rotations and return the values of the elements at the given indices.
thoughts:fairly simple, learned new Array(a.length).fill(0) feature </br>
#33 permutationEquation:Given a sequence of  integers,  where each element is distinct and satisfies . For each  where , that is  increments from  to , find any integer  such that  and keep a history of the values of  in a return array.
thoughts:fairly simple, review the while loop and indexOf </br>


## Day 19:
Today's Progress: completed isValid<br />
#32 isValid: Sherlock considers a string to be valid if all characters of the string appear the same number of times. It is also valid if he can remove just  character at  index in the string, and the remaining characters will occur the same number of times. Given a string , determine if it is valid. If so, return YES, otherwise return NO.
thoughts:fixed the bug. It was not too difficult but I need to think through and figure out the edge cases when the string is valid and it took a while to figure out the logic</br>


## Day 20:
Today's Progress: completed icecreamParlor<br />
#33 iceCreamParlor:
thoughts:simple but need to make it more efficient/br>

## Day 21:
Today's Progress: completed knightlOnAChessboard and missingNumbers<br />
#34 iceCreamParlor:What is the minimum number of KnightL(a,b) moves it takes for  to get from position(0,0) to position(n-1,n-1) ? If it's not possible for the Knight to reach that destination, the answer is -1 instead.
thoughts:</br>
#35 missingNumbers:Given two arrays of integers, find which elements in the second array are missing from the first array.
thoughts:use frequency counter</br>

#36 pairs:Given an array of integers and a target value, determine the number of pairs of array elements that have a difference equal to the target value.
thoughts:two pointer</br>

## Day 22:
Today's Progress: completed balancedSum<br />
#37 balancedSu:Watson gives Sherlock an array of integers. His challenge is to find an element of the array such that the sum of all elements to the left is equal to the sum of all elements to the right.
thoughts:Tried to use the two-pointer but the code is overly too complicated. Use single loop to increase the leftSum and decrese the rightSum</br>
## Day 23:
Today's Progress: completed Maximum Subarray Sum<br />
#37 Maximum Subarray Sum:Given an  element array of integers, , and an integer, , determine the maximum value of the sum of any of its subarrays modulo .
thoughts:Tried to make the code efficient and run faster</br>

## Day 24:
Today's Progress: understand the code Maximum Subarray Sum && connectedCell<br />
#37 Maximum Subarray Sum:Given an  element array of integers, , and an integer, , determine the maximum value of the sum of any of its subarrays modulo .
thoughts:read the resolution and understood how to make overall time complexity of the function to be O(n)</br>

#38 connectedCell:Given an  matrix, find and print the number of cells in the largest region in the matrix. 
thoughts:challenging but learned what Depth-First-Search algorithm is and how to use it to find the whether there is a path between two nodes. There is still a bug in the code</br>

## Day 25:
Today's Progress:complete pageCount<br />
#37 pageCount:Given n and p, find and print the minimum number of pages that must be turned in order to arrive at page .</br>

thoughts:simple</br>