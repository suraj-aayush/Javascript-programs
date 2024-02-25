
const url = 'https://api.github.com/users/suraj-aayush'
const xhr = new XMLHttpRequest();
xhr.open('GET',url);
console.log(xhr.readyState);
xhr.send();