

                  //! Get element by id 


// let heading = document.getElementById("header");
// console.log(heading);
// console.dir(heading);











                     //! Accessing by class name
                     
                     
// Html collection is similar to array but not an array.
let classs = document.getElementsByClassName("mericlass")
console.log(classs);
 













                    //! Accessing by tagname. 

let tag = document.getElementsByTagName("p")
console.log(tag)
console.dir(tag)















                  //! Accessing by query selector. 

// let query = document.querySelector("h4");  // returns matching first element
// console.dir(query)




// let query = document.querySelectorAll("h4");   // for all matching
// console.dir(query)

















                        //! Properties 

// TagName :  returns tag for element nodes. 

// innerText: returns the text content of the element and all its children


// innerHtml : returns the plain text or HTML contents in the element 

// textContent: returns textual content even hidden elements. 














//! parent child siblings  Important mind mein hai 

//! first child last child children padho jaan kr rakho. 


// Attributes..

// getting an attribute value. 

// let div = document.querySelector("div")
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id)


// let name =   div.getAttribute("name");
// console.log(name);

// let para = document.querySelector("p")
// console.log(para.getAttribute("class"))















                  //!  Setting an attribut. 


// let name =   div.getAttribute("name");
// console.log(name);

// let para = document.querySelector("p")
// console.log(para.setAttribute("class", "kaisa hai" ))





//    //!   Styles

//   para.style.backgroundColor = "green";

//   para.innerText = "ha bhai change ho gaya";



//!  Create an Element. 
let newBtn = document.createElement("button");
newBtn.innerText = 'click me here'; 

console.log(newBtn);

let div = document.querySelector("div");
div.append(newBtn); 


  //! Insert Element

//   node.append(el) = adds at the end of node (inside)


//   node.prepend(el) = adds at the start of node (inside)


//   node.before(el) = adds before the node (outside)


//   node.after(el) = adds after the node (outside)



//!        Delete an Element.

// node.remove()  = Removes the node



