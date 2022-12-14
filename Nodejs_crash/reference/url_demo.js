const url = require("url");

const myUrl = new URL("http://mywebsite.com/hello.html?id=100&status=active");

// Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

// Host Root Domain
console.log(myUrl.host);

// Host Name (does not get port)
console.log(myUrl.hostname);

// Path name
console.log(myUrl.pathname);

// Serialized querry
console.log(myUrl.search);

// Params object
console.log(myUrl.searchParams);

// Add params
myUrl.searchParams.append("abc", "123");
console.log(myUrl.searchParams);

// Loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
console.log(myUrl.searchParams);
