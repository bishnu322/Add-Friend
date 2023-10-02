
let member = document.getElementById("member");
let button = document.getElementsByTagName("button")
let span = document.getElementById("span")
let click = false

function addAndRemoveFriend() {
    if(click == 0){
        member.style.color = "green";
        member.innerHTML = "Friend";
        span.innerHTML = "Remove Friend";
        
        click = true
    }else{
        member.style.color = "red";
        member.innerHTML = "Stranger";
        span.innerHTML = "Add Friend";
        click = false
    }

}
/** 
var a ={};
b = {key: 'b'};
c = {key: 'c'}

a[b] = 123;
a[c] = 456;
console.log(a[b])

*/