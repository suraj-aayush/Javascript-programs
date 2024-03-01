
const url = 'https://api.github.com/users/suraj-aayush'
const xhr = new XMLHttpRequest();
xhr.open('GET',url);
xhr.onreadystatechange = function(){
    console.log(xhr.readyState);
    if(xhr.readyState === 4)
    {
        const data = JSON.parse(this.responseText)
        // console.log(this.responseText);
        console.log(data);
        console.log(`Name: ${data.name}, UserName: ${data.login}`);

    }
}
// console.log(xhr.readyState);
xhr.send();