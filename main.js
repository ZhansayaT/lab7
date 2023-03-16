// find elements in the DOM
let h1 = document.getElementById("first");

// change content of the elements
h1.innerText = "Lab7 Assignment";

// change styles of the elements
h1.style.color = "blue";

// create elements
let hr1 = document.createElement("hr");

// add elements
document.body.appendChild(hr1);

let h2 = document.createElement("h2");
h2.innerText = "Task";

h2.style.color = "red";
document.body.appendChild(h2);

let p1 = document.createElement("p");
p1.innerHTML = "In this task you have to reproduce this HTML page as is using <b>only</b> JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:";
document.body.appendChild(p1);

let ul1 = document.createElement("ul");
document.body.appendChild(ul1);

for (let i = 0; i < 6; i++) {
    let li = document.createElement("li");
    if (i % 2 == 0) {

        // change classes of the elements
        li.setAttribute("class", "green");
        li.style.color = "green";

    } 
    else {

        // change attributes of the elements
        li.setAttribute("class", "purple");
        li.style.color = "purple";

    }
    ul1.appendChild(li);
}

let list = document.getElementsByTagName("li");

list[0].innerHTML = "find elements in the DOM (<b>5 points</b>);";
list[1].innerHTML = "create/add/remove elements (<b>5 points</b>);";
list[2].innerHTML = "change content of the elements (<b>5 points</b>);";
list[3].innerHTML = "change styles of the elements (<b>5 points</b>);";
list[4].innerHTML = "change attributes of the elements (<b>5 points</b>);";
list[5].innerHTML = "change classes of the elements (<b>5 points</b>).";

let hr2 = document.createElement("hr");
document.body.appendChild(hr2);

let h22 = document.createElement("h2");
h22.innerText = "Submission";
h22.style.color = "red";
document.body.appendChild(h22);

let p2 = document.createElement("p");
p2.innerText = "To submit your work, follow these instructions:";
document.body.appendChild(p2);

let ul2 = document.createElement('ul');
document.body.appendChild(ul2);

for (let i = 0; i < 8; i++) {
    let li = document.createElement('li');
    if (i % 2 == 0){
        li.setAttribute("class", "green");
        li.style.color = "green";
    } 
    else {
        li.setAttribute("class", "purple");
        li.style.color = "purple";
    }
    li.innerText = "Turaliyeva";
    ul2.appendChild(li);
}

let hr3 = document.createElement("hr");
document.body.appendChild(hr3);

// remove elements
ul2.removeChild(list[13]);

list[6].innerHTML = "Create a new repository on Github, named <b>lab7</b> (<b>1 point</b>).";
list[7].innerHTML = "Clone this repository to your local machine and work inside it.";
list[8].innerHTML = "Create a new HTML file, called <b>index.html</b>, which has only one &lt;h1&gt; tag with \"Hello, World!\" message (<b>1 point</b>).";
list[9].innerHTML = "Create a new JavaScript file, called <b>main.js</b>, which must contain your program (assignment) described above (<b>1 point</b>).";
list[10].innerHTML = "Link this <b>main.js</b> file to your <b>index.html</b> file (Note: place your script at the end of the <b>body</b> section).";
list[11].innerHTML = "Write a JavaScript program in <b>main.js</b> to make your <b>index.html</b> look identical to this HTML file (<b>5 points</b>).";
list[12].innerHTML = "After you finish your work, submit it to the Github (<b>2 points</b>).";
