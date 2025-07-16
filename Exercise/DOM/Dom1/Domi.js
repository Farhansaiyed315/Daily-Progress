// Get element by id 
let heading = document.getElementById("header");
console.log(heading);
console.dir(heading);



// Accessing by class name 
// Html collection is similar to array but not an array.
let classs = document.getElementsByClassName("mericlass")
console.log(classs);
 

// Accessing by tagname. 

let tag = document.getElementsByTagName("p")
console.log(tag)
console.dir(tag)





// Accessing by query selector. 

let query = document.querySelector("h4");  // returns matching first element
console.dir(query)




let query = document.querySelectorAll("h4");   // for all matching
console.dir(query)



//! Properties 

// TagName :  returns tag for element nodes. 

// innerText: returns the text content of the element and all its children


// innerHtml : returns the plain text or HTML contents in the element 

// textContent: returns textual content even hidden elements. 




//! parent child siblings  Important mind mein hai 

//! first child last child children padho jaan kr rakho. 


