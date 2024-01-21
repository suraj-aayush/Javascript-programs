/*
    ALL DOM SELECTORS

    1. geElemenetById() 
    2. getElementByClassName() -> reutrns a HTML Collection
    3. querySelector()         -> returns the first matched elment
    4. querySelectorAll()      -> returns the whole matched element in nodeList         
*/


/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    
    <title>DOM sikhenge</title>

    <style>
        body{background-color: aquamarine;}
    </style>

</head>
<body>
    
<div>
    <h1 id="title" class ="test"> 
        This is a basic DOM interactive session
    </h1>
</div>

<ul>
    <li>one</li>
    <li>two</li>
    <li>three</li>
</ul>

<h2 id ="h2_heading" >
    Lorem ipsum dolor sit amet. This needs to be in black
</h2>

<ol>
    <li>day1</li>
    <li>day2</li>
    <li>day3</li>
    <li>day4</li>
</ol>

<ol>
    <li>mon</li>
    <li>tue</li>
    <li>wed</li>
    <li>thu</li>
</ol>

</body>
</html>
*/

// TESTING ON THIS HTML CODE


// USE THIS IN CONSOLE EDITOR

1. document.getElementById("heading")

2. document.getElementsByClassName("test")


3 ->  document.querySelector("ul")  -> selects the first unordered list from the page




let title = document.getElementById("title")
undefined

title.style.accentColor="red"
'red'

title.style.backgroundColor = "red"
'red'

title.style.padding="10px"
'10px'

title.style.borderRadius="10px"
'10px'

const myul = document.querySelector("ul")
undefined

myul.style.color="green"
'green'

myul.style.color="orange"
'orange'

myul.style.backgroundColor="black"
'black'
myul.style.padding="15px"
'15px'

myul.style.borderRadius="10px"
'10px'

let myol = document.querySelector("ol")
undefined

let firstLI = myol.querySelector("li")
undefined

firstLI.style.color = "white"
'white'

firstLI.style.backgroundColor = "green"
'green'

irstLI.innerText="My day 1"         // CHANGING TEXT OF THE ITEM
'My day 1'

//////////////  querySelector -> reutrns the first elemnet only 
/////////////   querySelectorAll -> reutrns the nodelist of all the matched element set


/*
    suppose we have multiple ol lists and we want to select
     2nd ol -> 2nd li 

     then use querySelectorAll('ol') -> to select all ol elements
     then select the 2nd one using array index... AllOL[1]
     now we have the 2nd ol

     now to select the 2nd listed item 
     we use ->  secondOL.querySelectorAll('li')[1]
*/

const AllOl = document.querySelectorAll('ol')
undefined
const secondOL = AllOl[1]
undefined
const FirstLine = secondOL.querySelectorAll('li')[0]
undefined
const SecondLine = secondOL.querySelectorAll('li')[1]
undefined