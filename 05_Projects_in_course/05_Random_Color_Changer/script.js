    const randomColor = function(){
        const hex = "0123456789ABCDEF";
        let color = "#"

        for(let i=0;i<6; i++)
        {
            color += hex[Math.floor(Math.random()*16)];
        }
        return color;
    }

    const start = document.getElementById('start');
    const stop = document.getElementById('stop');

    function changeBg(){
    document.body.style.backgroundColor=randomColor();

    }

let intervalId;    
const colorize = function(){
    if(!intervalId)
     intervalId = setInterval(changeBg, 1000);
}

const decolor = function(){
    clearInterval(intervalId);
    intervalId = null;
}

    

    start.addEventListener('click', colorize);
    stop.addEventListener('click',decolor);