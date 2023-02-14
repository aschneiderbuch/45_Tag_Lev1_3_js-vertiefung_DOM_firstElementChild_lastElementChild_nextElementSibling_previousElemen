console.log("test");

/* 
firstElementChild
lastElementChild
nextElementSibling
previousElementSibling
innerHTML
querySelectorAll
querySelector
addEventListener


*/

// last  - Element Child anzeigen


const btnFirstChild = document.querySelector(".unten")
console.log(btnFirstChild)

const liste = document.querySelector("#myList")
console.log(liste)
/************************************************************************************************
 * 
 *     Ende Variablen
 * 
 *********************************/



//  click  
btnFirstChild.addEventListener("click", (e) => {
    console.log(e)
    console.log(btnFirstChild)
    console.log(e.target.value)
    console.log(e.target.innerHTML)

    // function aufrufen
    textHolenFunction___FirstChild(e);

})


// function definieren
// first - Element Child anzeigen
function textHolenFunction___FirstChild(e) {
    console.log("in function")
    console.log(e)
    console.log(btnFirstChild)
    console.log(e.target.value)
    console.log(e.target.innerHTML)


    console.log(liste)
    console.log(Array.from(liste)) // nix leer
    console.log(Array.from(liste.children)) // geht Array    (7) [0] [1] ... [6] 
    console.log(Array.from(liste.childNodes)) // geht Array     (15)   [text] [li] [text]          [li] [text] 
        // div    li_0  text_li_0

console.log(e.target.innerHTML) //
let text = e.target.innerHTML; // # firstElementChild
console.log(text)

 text = text.replace("#", "");  // _ firstElementChild
console.log(text)          

text = text.trimStart()   // firstElementChild
console.log(text)

let output = `${liste}.${text}`
console.log(output)

output = liste.firstElementChild.innerHTML;
console.log(output)

output = liste.concat(text)
console.log(output)


};