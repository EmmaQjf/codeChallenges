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
