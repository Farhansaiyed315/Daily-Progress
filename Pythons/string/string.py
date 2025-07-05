# Remember string is immutable. 

# #  Methods of string. 

name = "Farhan"

print("uppercase",name.upper())   
print("Lowercase",name.lower())
print("Lenght",name.__len__())
print("Removes extra spaces",name.strip())
print("old string updates with new one instead of farhan now its-> ",name.replace("Farhan","kadim"))
print("Break string into list",name.split())
print("Find index of substring",name.find("F"))
print("count how many times a substing is ocurred",name.count("a"))



# Accessing the string and substring. 

word = "Farhan"

print("Access the first substing of a string",word[0])
print("Access the substing from 0 index to 3rd index of a string",word[0:3])
print("Access the substing after the 2nd index of a string",word[2:])
print("Access the first theree index  of a string or substring",word[:3])


print("Reverse string ",word[::-1])



# Check if String is Numeric/Alpha

s1 = "123"
s2 = "abc123"
print(s1.isdigit())  
print(s2.isalnum())  
print(s2.isalpha())  



name5 = "Farhan"
age = 21
print(f"My name is {name5}, I am {age}")



s = "hello"
s.upper()   # Returns new string, original not changed as string is immutable
print(s)    # hello