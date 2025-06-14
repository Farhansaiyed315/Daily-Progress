//! Declare an array with more than 5 number of elements

let arr = [1, 2, 3, 4, 5];
console.log(arr);

//! Get the first item, the middle item and the last item of the array

console.log("Lenght:", arr.length);

console.log("First item :", arr[0]);

console.log("Middle item :", arr[Math.floor(arr.length / 2)]);

console.log("Last item :", arr[arr.length - 1]);

//! Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5

let mixedDataTypes = [
  "Farhan",
  22,
  true,
  null,
  undefined,
  {
    city: "Mumbai",
  },
  "js",
  "Html",
];

console.log("Array:", mixedDataTypes.length); // lenght of the array.
console.log("Lenght of mixedDataTypes", mixedDataTypes.length);

//! Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon

let itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  " IBM",
  " Oracle",
  "Amazon",
];

console.log(itCompanies);

//! Print the number of companies in the array

console.log("The number of it companies are ", itCompanies.length);

//!  Print the first company, middle and last company.

console.log("The first company is ", itCompanies[0]);

let middlecompany = itCompanies[Math.floor(itCompanies.length / 2)];

console.log("Middle it company is ", middlecompany);

let lastcompany = itCompanies.length - 1;

console.log("The last company is ", itCompanies[lastcompany]);

//!  Print out each company

itCompanies.forEach(function (company) {
  console.log(company);
});

//!  Change each company name to uppercase one by one and print them out

itCompanies.forEach(function (company) {
  console.log(company.toUpperCase());
});

//!  Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.

let sentence = itCompanies.join(",") + " are big it companies ";
console.log(sentence);

//! Check if a certain company exists in the itCompanies array. If it exists, return the company else return a message saying company is not found

let CompanyToSearch = "Google";

if (itCompanies.includes(CompanyToSearch)) {
  console.log(CompanyToSearch + " is present in the array.");
} else {
  console.log(CompanyToSearch + " is not present in the array."); // declaratin mein spaceing aur yaha bhi spacing ka dhiyan rakhna hai
}




