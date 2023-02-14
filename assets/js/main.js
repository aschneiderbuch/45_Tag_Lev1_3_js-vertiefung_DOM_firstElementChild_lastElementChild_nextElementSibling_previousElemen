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

const button = document.querySelector("button");
console.log(button)       // erster button   <button># firstElementChild </button>

const buttonAll = document.querySelectorAll("button")
console.log(buttonAll)      // NodeList (4) fake Array

const liste = document.querySelector("#myList")
console.log(liste)

const outputField = document.querySelector("h1")



/************************************************************************************************
 * 
 *     Ende Variablen
 * 
 *********************************/



//  click  
/* btnFirstChild.addEventListener("click", (e) => {
    console.log(e)
    console.log(btnFirstChild)
    console.log(e.target.value)
    console.log(e.target.innerHTML)

    // function aufrufen
    textHolenFunction___FirstChild(e);

}) */


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

    output = liste.firstElementChild;
    console.log(output) // <li> ::marker "Super Mario World"  </li>
    output = liste.firstElementChild.innerHTML    // output = Super Mario World
    outputField.innerHTML = output
    console.log(output)    // Super Mario World
    outputField.innerHTML += output;     // wird in HTML in H1 geschrieben
    // output = Super Mario World

    console.log(typeof (liste.children))
    console.log(Array.isArray(liste.children))

    console.log(liste)

    /*      /// ??? wieso gehts nicht mit concat  
        //??? soll dynamische ausgabe werden 
        output = liste.concat(text)   // !!! geht nicht, da list kein String ist 
                                        // !!! deshalb kommt Fehler not a function
        console.log(output)
     */


}



console.log(buttonAll)  // fake Array  NodeList (4) [0] [1]

const buttonAllArray = Array.from(buttonAll)
console.log(buttonAllArray) // (4) richtiges Array [0] [1]
console.log(buttonAllArray[0]) // <button># firstElementChild </button>

/* 
// !!! geht nicht
buttonAllArray[0].addEventListener((e) => {
    console.log(e)

    console.log("in event Listener buttonAllArray")

}) */

const btn2 = document.querySelectorAll("button")[1]   // zweite durch [1]
console.log(btn2)

btn2.addEventListener("click", (e) => {
    console.log(e)
    console.log("in event Listener btn2");
    outputField.innerHTML = `${e.target.innerHTML} <br>`;
    console.log(e.target.innerHTML) // text des buttons
    outputField.innerHTML += liste.lastElementChild.innerHTML
    console.log(liste.lastElementChild)    // <li> ::marker "text"  </li>
    console.log(liste.lastElementChild.innerHTML)    //   nur  der    text

});

const btn3 = document.querySelectorAll("button")[2]   // dritte durch 
console.log(btn3)
btn3.addEventListener("click", (e) => {
    outputField.innerHTML = liste.firstElementChild.nextElementSibling.innerHTML
});


const btn4 = document.querySelectorAll("button")[3]   // vierte durch 
console.log(btn4)   
btn4.addEventListener("click", () => {
    outputField.innerHTML = liste.lastElementChild.previousElementSibling.innerHTML
});