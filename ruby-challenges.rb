# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.



num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'

# PSEUDOCODE:
# Create a method named even_odd
# INPUT: Integer
# OUTPUT: String containing Integer
# PROCESS: Create a parameter "val" that takes the num variable as an argument 
# Use a conditional statement
# Calculate using modulo to determine even or odd value of the integer
# Use string interpolation to output the result
# Call the method
def even_odd val
  if val % 2 == 0
    p "#{val} is even"
  else
    p "#{val} is odd"
  end
end
# even_odd(num1) 
# output: "7 is odd"
# even_odd(num2)
# output: "42 is even"
# even_odd(num3)
# output: "221 is odd"

# REFACTOR:
# I remembered that Ruby doesn't require parentheses.
even_odd num1
# output: "7 is odd"
even_odd num2
# output: "42 is even"
even_odd num3
# output: "221 is odd"

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

# PSEUDOCODE
# Create a method named v_gone
# INPUT: String
# OUTPUT: String sans vowels
# PROCESS: .delete is a built-in method that will work on each variable individually. Create a method named v_gone that takes the beatles_album variables as arguments for the .delete method to act on. The parameter establishing the argument is called "title"

# p beatles_album1.delete'AEIOUaeiou'
# output: "Rbbr Sl"
# p beatles_album2.delete'AEIOUaeiou'
# output: "Sgt Pppr"
# p beatles_album3.delete'AEIOUaeiou'
# output: "bby Rd"

def v_gone title
  title.delete 'AEIOUaeiou'
end

p v_gone beatles_album1
# output: "Rbbr Sl"
p v_gone beatles_album2
# output: "Sgt Pppr"
p v_gone beatles_album3
# output: "bby Rd"

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

# PSEUDOCODE: 
# INPUT: String
# OUTPUT: String '#{word} is a palindrome'
# PROCESS: Create a method named palindrome_checker using the conditional if/else
# Establish exact character case using .upcase method and use .reverse method to verify character matching equality with ==
# Use string interpolation in the conditional for the output

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

def palindrome_checker word
  if word.upcase == word.upcase.reverse
    p "#{word} is a palindrome"
  else
    p "#{word} is not a palindrome"
  end
end

palindrome_checker palindrome_tester1
# output: "Racecar is a palindrome"
palindrome_checker palindrome_tester2
# output: "LEARN is not a palindrome"
palindrome_checker palindrome_tester3
# output: "Rotator is a palindrome"