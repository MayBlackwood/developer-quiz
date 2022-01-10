// (*) FIRST problem is that code below is asynchronous. That why 'forEach' method will not work:
// there will be error because variable server_echo is UNDEFINED (forEach works with arrays).
// At first code before and after server request with fetch will work and only then request itself.

// (**) SECOND problem is that I think fetch body format is wrong - should be an object - here is a string format

// (***) THIRD problem - in first "then" block we cannot twice call response.json() method - there will be error during
// first 'then' block execution. In my opinion, we should return response.json() in first 'then' block and only in second 'then' block set variable with next value
// server_echo = result.echo

var server_echo; //  (*)

var json = {
  json: JSON.stringify({
    a: 1,
    b: 2,
  }),
  delay: 3,
};

fetch('/echo/', {
  method: 'post',
  headers: {
    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'application/json',
  },
  // (**)
  body:
    'json=' +
    encodeURIComponent(JSON.stringify(json.json)) +
    '&delay=' +
    json.delay,
})
  .then(function (response) {
    server_echo = response.json().echo; // (***)
    return response.json(); // (***)
  })
  .then(function (result) {
    // (***)
    alert(result);
  })
  .catch(function (error) {
    console.log('Request failed', error);
  });

server_echo.forEach((element) => console.log(element)); // (*)
