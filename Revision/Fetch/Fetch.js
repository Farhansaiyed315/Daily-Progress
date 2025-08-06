

//! 1. What is `fetch()` in JavaScript?

// fetch() is a built in function in JavaScript used to make https request (GET, POST,etc). 

// it returns a Promise and works asynchronously. 

fetch(link)
.then(res => res.json())
.then(data => console.log('Geet data:', data));

// Remember first .then converts the raw data into json format 

// and the second .then logs the json data as simple as that. 






//! 2. What are the advantages of using `fetch()` over `XMLHttpRequest`?


// - Simpler and cleaner syntax
// - Uses Promises, so better for async operations
// - Supports async/await
// - More modern and easier to read




//! 3. How do you handle errors with `fetch()`?

fetch(link)
.then (res => {
    if (!res.ok) throw new Error ('Something went wrong');
    return res.json();
})
.then(data => console.log(data))
.catch(error => console.error('Error hadled:', error));




//! 4. How do you make a POST request using `fetch()`?


