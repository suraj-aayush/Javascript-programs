
const url = 'https://api.github.com/users/suraj-aayush'
const xhr = new XMLHttpRequest();
xhr.open('GET',url);
xhr.onreadystatechange = function(){
    console.log(xhr.readyState);
}
// console.log(xhr.readyState);
xhr.send();