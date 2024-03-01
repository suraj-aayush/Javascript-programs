const url = 'https://api.github.com/users/suraj-aayush'
const xhr = new XMLHttpRequest();
xhr.open('GET', url);
let data;
xhr.onreadystatechange = function(){
    console.log(xhr.readyState);
    data = JSON.parse(this.responseText);
    console.log(data);
    // console.log(`user`);

} 


xhr.send();
