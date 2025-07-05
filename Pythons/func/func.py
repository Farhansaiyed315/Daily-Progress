# def greater():
#     number1 = int(input("Enter first number: "))
#     number2 = int(input("Enter second number: "))
    
#     if(number1 > number2):
#         print(number1,"is number is gretest")
#     else:
#         print(number2,"is greatest")
        

    
# greater()



def greatestofall():
    number1 = int(input("Enter first number: "))
    number2 = int(input("Enter second number: "))
    number3 = int(input("Enter third number: "))
    
    if(number1 > number2 and number3):
        print(number1,"is the greatest number")
    elif(number2>number3):
         print(number2,"is the greatest number")
    else:
        print(number3,"is the greatest number")
        
greatestofall()
# # greatestofall()
# # greatestofall()


def baadmein():
    pass             # ye program baad mein likhege so pass kr diye aur kuch nahi

# if any function needs three arguments two is compulsory and one is optional. 


def add(*numbers):
    print(type(numbers))        # means the function can take any number of arguments 
    total = 0                 # boleto infinity arguments bhi le sakte hai or zero bhi le sakte hai samjha kya bhidu
    for num in numbers:
        total += num
    return total

print(add(2, 4, 6))         # yaha arguments kam ya Zyada karke check karlow 


add = lambda a, b: a + b
print(add(5, 3))

square = lambda x: x * x           
print(square(4)) 
                                        # When to Use Lambda?
                                    # When you need a quick function
                                   #  Used with map(), filter(), reduce()
                                  #  You don’t need to reuse the function elsewhere