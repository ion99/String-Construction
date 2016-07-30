# String-Construction

Alice has a "string" of lowercase letters that she wants to copy into a new string "p". She can perform the following operations any number of times to construct string "p". Append a character to the end of string  at a cost of  dollar. Choose any substring of "p" and append it to the end of "p" at no charge.
Given an array of strings, find and print the minimum cost of copying each string to "p" on a new line.

### Sample Input:

["abcd", "abab"]

### Sample Output:

4

2

## Explanation

Query 0: We start with string = "abcd" and p = "".

Append character 'a' to "p" at a cost of 1 dollar, p = "a".

Append character 'b' to "p" at a cost of 1 dollar, p = "ab".

Append character 'c' to "p" at a cost of 1 dollar, p = "abc".

Append character 'd' to "p" at a cost of 1 dollar, p = "abcd".

Because the total cost of all operations is 1 + 1 + 1 + 1 = 4 dollars, we print 4 on a new line.

Query 1: We start with string = "abab" and p = "".

Append character 'a' to "p" at a cost of 1 dollar, p = "a".

Append character 'b' to "p" at a cost of 1 dollar, p = "ab".

Append substring 'ab' to "p" at no cost, p = "abab".

Because the total cost of all operations is 1 + 1 = 2 dollars, we print 2 on a new line.


## Note

Challenge from World CodeSprint5
