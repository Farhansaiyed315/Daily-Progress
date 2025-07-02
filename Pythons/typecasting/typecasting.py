
# !1. What is typecasting in Python? Explain with an example.

# Typecasting in Python means converting one data type into another, like converting a string into an integer, or a float into a string.

x = "123"         # x is a string
y = int(x)        # converted to integer
print(y + 1)     



#! 3. What will be the output of: int(4.7)? Explain why.

# output will be 4
# int() converts a float to an integer by removing the decimal part.
# It does not round off, it just truncates the digits after the decimal.
# int(4.7) → 4
# int(9.999) → 9
# int(2.1) → 2

#! 4. How can you convert the integer 100 into a float and into a string?

num = 100

# Convert to float
float_num = float(num)     # Output: 100.0

# Convert to string
str_num = str(num)         # Output: "100"

print(float_num)
print(str_num)



#! 5. What is the result of int("10") + float("20.5")?

x = int("10")
y = float("20.5")
print(x + y)     

#! 6. What is the output of bool(0), bool(1), bool(""), and bool("Python")?

print(bool(0))         # False
print(bool(1))         # True
print(bool(""))        # False
print(bool("Python"))  # True


#! 7. How do you convert a float like 3.14 into a string and find its length?

x = 3.14
str_x = str(x)        # Convert float to string → "3.14"
length = len(str_x)   # Find length → 4
print(length)


# 8. What happens when you try to convert the string "abc" to an integer?

#! It will throw a ValueError because "abc" is not a number.

# x = "abc"
# y = int(x)   # ❌ This will cause an error

#! 9. Write a function that takes a string and returns it as int, float, or original string based on the content.

def smart_cast(value):
    # Try converting to int
    try:
        return int(value)
    except ValueError:
        pass

    # Try converting to float
    try:
        return float(value)
    except ValueError:
        pass

    # If both fail, return the original string
    return value

# Test cases
print(smart_cast("123"))     # Output: 123 (int)
print(smart_cast("45.67"))   # Output: 45.67 (float)
print(smart_cast("hello"))   # Output: "hello" (string)


#! 10. How do you convert the list [1, 2, 3] to a tuple and a set in Python?

my_list = [1, 2, 3]

# Convert to tuple
my_tuple = tuple(my_list)

# Convert to set
my_set = set(my_list)

print(my_tuple)   # Output: (1, 2, 3)
print(my_set)     # Output: {1, 2, 3}









