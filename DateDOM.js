console.log(new Date())
let a=new Date()
//time in sec
/*console.log(a.getTime());
console.log(a.getFullYear());
console.log(a.getDay());
console.log(a.getMinutes());
console.log(a.getHours());
console.log(a.getTime());
console.log(a.getMonth());*/
//DOM MANIPULATION
let e=document.getElementById('click');
console.log(e)
let ec=document.getElementsByClassName("container")
console.log(ec)
ec[0].classList.add("bg-primary")
ec[0].classList.add("text-success")
console.log(e.innerHTML)
console.log(e.innerText)
console.log(ec[0].innerHTML)
console.log(ec[0].innerText)
createdElements=document.createdElements('p');
createdElements.innerText="PArik"
tn[0].appendChild(createdElements);


//events in java script
