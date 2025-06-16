//! Get the first item, the middle item and the last item of the array------

let itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  " IBM",
  " Oracle",
  "Amazon",
];

console.log(itCompanies[0])

lastcompany = (itCompanies.length - 1);

console.log("The last Company name is ",itCompanies[lastcompany])


let middlecompany = itCompanies[Math.floor(itCompanies.length/2)];

console.log("The Middle Company is ",middlecompany);

//! 5. Declare an array called mixedDataTypes, put different data types in the 
//! array and find the length of the array. The array size should be greater than 5 ------

mixedDataTypes = [
    "Farhan",
    22,
 true,
 null,
 undefined,
 {
    city:"Mumbai",
 },
 "js",
 "Html",

];
console.log(mixedDataTypes);

//! Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon are big IT companies.--------

 let sentence = itCompanies.join(", ");
 console.log(sentence);

