
# --------------------------------------
# Variables and Datatypes
# --------------------------------------
name = "Farhan"
age = 21
is_student = True

# Typecasting
age_str = str(age)
pi = float(3)

# User Input
user_name = input("Enter your name: ")

# f-string
print(f"Hello {user_name}, you are {age} years old.")

# --------------------------------------
# if-else Statement
# --------------------------------------
if age < 18:
    print("You are a minor.")
elif age == 18:
    print("You just became an adult!")
else:
    print("You are an adult.")

# --------------------------------------
# Loops
# --------------------------------------
# for loop
for i in range(5):
    print(i)

# while loop
count = 3
while count > 0:
    print(count)
    count -= 1

# --------------------------------------
# Functions
# --------------------------------------
def greet(name):
    return f"Hello, {name}"

print(greet("Farhan"))

# --------------------------------------
# Map, Reduce, Filter
# --------------------------------------
nums = [1, 2, 3, 4, 5]

# map
squares = list(map(lambda x: x * x, nums))

# filter
evens = list(filter(lambda x: x % 2 == 0, nums))

# reduce
from functools import reduce
total = reduce(lambda x, y: x + y, nums)

# --------------------------------------
# Dictionaries
# --------------------------------------
student = {"name": "Farhan", "age": 21}
print(student["name"])
student["grade"] = "A"

# --------------------------------------
# Lists
# --------------------------------------
fruits = ["apple", "banana", "mango"]
fruits.append("grape")

# --------------------------------------
# Tuples
# --------------------------------------
coordinates = (10, 20)

# --------------------------------------
# Sets
# --------------------------------------
unique_vals = {1, 2, 3, 2}

# --------------------------------------
# OOP - Classes and Objects
# --------------------------------------
class Person:
    def __init__(self, name):
        self.name = name

    def say_hello(self):
        print(f"Hi, I'm {self.name}")

p = Person("Farhan")
p.say_hello()

# --------------------------------------
# Class Methods
# --------------------------------------
class Demo:
    count = 0

    @classmethod
    def show_count(cls):
        print(cls.count)

# --------------------------------------
# Static Methods
# --------------------------------------
class Utility:
    @staticmethod
    def add(a, b):
        return a + b

# --------------------------------------
# Method Overriding
# --------------------------------------
class A:
    def speak(self):
        print("A speaking")

class B(A):
    def speak(self):
        print("B speaking")

b = B()
b.speak()

# --------------------------------------
# Getters and Setters
# --------------------------------------
class BankAccount:
    def __init__(self):
        self._balance = 0

    @property
    def balance(self):
        return self._balance

    @balance.setter
    def balance(self, amount):
        if amount >= 0:
            self._balance = amount

# --------------------------------------
# Decorators
# --------------------------------------
def my_decorator(func):
    def wrapper():
        print("Before")
        func()
        print("After")
    return wrapper

@my_decorator
def say_hello():
    print("Hello!")

say_hello()

# --------------------------------------
# Exception Handling
# --------------------------------------
try:
    x = 10 / 0
except ZeroDivisionError:
    print("Can't divide by zero")
finally:
    print("Done")

# --------------------------------------
# File Input/Output
# --------------------------------------
with open("sample.txt", "w") as file:
    file.write("Hello Python!")

# --------------------------------------
# os Module
# --------------------------------------
import os
print(os.getcwd())

# --------------------------------------
# shutil Module
# --------------------------------------
import shutil
# shutil.copy("source.txt", "destination.txt")

# --------------------------------------
# time Module
# --------------------------------------
import time
print(time.ctime())
time.sleep(1)

# --------------------------------------
# Multithreading
# --------------------------------------
from threading import Thread

def thread_task():
    print("Running thread")

t1 = Thread(target=thread_task)
t1.start()

# --------------------------------------
# Multiprocessing
# --------------------------------------
from multiprocessing import Process

def process_task():
    print("Running process")

p1 = Process(target=process_task)
p1.start()

# --------------------------------------
# Asyncio
# --------------------------------------
import asyncio

async def main():
    print("Async Hello")
    await asyncio.sleep(1)

# asyncio.run(main())

# --------------------------------------
# Recursion
# --------------------------------------
def factorial(n):
    if n == 1:
        return 1
    return n * factorial(n - 1)

print(factorial(5))

# --------------------------------------
# Regular Expressions
# --------------------------------------
import re

pattern = r"\d+"
result = re.findall(pattern, "There are 123 apples and 45 bananas")
print(result)

# --------------------------------------
# String Operations
# --------------------------------------
text = "Hello World"
print(text.lower())
print(text.upper())
print(text.replace("World", "Python"))

# --------------------------------------
# Enumerate Function
# --------------------------------------
for index, value in enumerate(["a", "b", "c"]):
    print(index, value)

# --------------------------------------
# Match-case (Python 3.10+)
# --------------------------------------
command = "start"
match command:
    case "start":
        print("Starting")
    case "stop":
        print("Stopping")

# --------------------------------------
# Generators
# --------------------------------------
def count_up():
    yield 1
    yield 2
    yield 3

for num in count_up():
    print(num)

# --------------------------------------
# Virtual Environment (Terminal)
# --------------------------------------
# python -m venv env
# .\env\Scripts\activate  (Windows)
# source env/bin/activate (Mac/Linux)

# --------------------------------------
# Request Module (requires 'requests')
# --------------------------------------
# pip install requests
# import requests
# response = requests.get("https://api.github.com")
# print(response.status_code)

# --------------------------------------
# First Python Program
# --------------------------------------
print("Hello Python!")

# --------------------------------------
# Access Modifiers (convention-based)
# --------------------------------------
class Demo:
    public = "I'm public"
    _protected = "I'm protected"
    __private = "I'm private"

# --------------------------------------
# Instance vs Class Var
# --------------------------------------
class Counter:
    class_count = 0

    def __init__(self):
        self.instance_count = 0
