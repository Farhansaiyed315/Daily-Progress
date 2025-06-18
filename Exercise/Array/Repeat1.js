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

//!  14. Filter out companies which have more than one 'o' without using the filter method======

let companiesWithMoreThanOneo = []

for(let i = 0; i< itCompanies.length ; i++){
   let company = itCompanies[i];

   let oCount = company.toLowerCase().split("o").length - 1;

   if (oCount > 1){
      companiesWithMoreThanOneo.push(company);
   }

}

console.log ("Comapnies with more than one o ", companiesWithMoreThanOneo);

//! Slice out the first 3 companies from the array

let FirstThree = itCompanies.slice(0,3)
console.log("The first the companies which were sliced are ", FirstThree)

//! Slice out the last 3 companies from the array

let lastThreecompany = itCompanies.slice(-3);
console.log("The last theree companies which were sliced are ",lastThreecompany);



//! Slice out the middle IT company or companies from the array

let Middle = [];

let MidIndex = Math.floor(itCompanies.length/2)
Middle = itCompanies.slice(MidIndex,MidIndex+1)

console.log("The MIddle company is ", Middle)


//! Remove the first company from the array. 

//?  shift() can only remove the first element — it's not made for removing elements at other positions.

let firstCompanyTORemove = itCompanies.shift(); 
console.log("The first company we removed is ", firstCompanyTORemove) 

//! Remove the last IT company from the array.

itCompanies.pop();
console.log(itCompanies);


//! Remove all IT companies

itCompanies = [];
console.log(itCompanies);




