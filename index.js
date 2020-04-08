/*var firstLi = document.querySelector("#first");
var secondLi = document.querySelector("#second");
var thirdLi = document.querySelector("#third");

firstLi.addEventListener("mouseover", function(){
    firstLi.style.color = "green";
})
firstLi.addEventListener("mouseout", function(){
    firstLi.style.color = "black";
})

secondLi.addEventListener("mouseover", function(){
    secondLi.style.color = "green";
})
secondLi.addEventListener("mouseout", function(){
    second.style.color = "black";
})

third.addEventListener("mouseover", function(){
    thirdLi.style.color = "green";
})
third.addEventListener("mouseout", function(){
    thirdLi.style.color = "black";
})
*/

var lis = document.querySelectorAll("li");

for (var i = 0; i < lis.length ; i++) {
    lis[i].addEventListener("mouseover", function() {
        this.classList.add("selected")
    });
    lis[i].addEventListener("mouseout", function() {
        this.classList.remove("selected")
    });
    lis[i].addEventListener("click", function() {
        this.classList.toggle("done")
    });
}


