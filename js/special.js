let myInterval = setInterval(change,20)
let fName = document.getElementById("name");
let lName = document.getElementById("lname");
const fnamesplit = fName.innerHTML.split("");
const lnamesplit = lName.innerHTML.split("");

letters = 0;
function change(){
const fNameRand =["0","1","2","3","4","5","6","7","8","9"]
const name2 = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o"];

 fnamesplit[fNameRand[Math.floor(Math.random() * 7)]] = name2[Math.floor(Math.random() * 15)];
 lnamesplit[fNameRand[Math.floor(Math.random() * 6)]] = name2[Math.floor(Math.random() * 15)];
fName.innerHTML = fnamesplit;
lName.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + lnamesplit;
letters++;
if(letters == 30){
clearInterval(myInterval);
fName.innerHTML = "Quinton";
lName.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Taylor";
}
}


