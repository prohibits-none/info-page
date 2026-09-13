// DOM (document object model)
// dom = body
// jab web pe kuch krne se kuch hota h use dom manipulation khte h 

// let sher = document.getElementsByClassName("df");
// console.log(sher)

// let abcd=document.querySelector("h1");
// console.dir(abcd)

// let h1 = document.querySelector("h1");
// h1.innerHTML = " <i> hello</>"
// let a = document.querySelector("a");
// // a.href = "https://chess.com "
// a.setAttribute ("href","https://google.com")
// console.dir(a)


// let h1 = document.createElement("h1")
// h1.textContent = "sher";
// document.body.prepend(h1)

// let h1 =  document.querySelector("h1");
// h1.remove();

// let h1= document.createElement("h1");
// h1.textContent="Shher"
// //document.body.append(h1)
// let a = document.querySelector("div").append(h1);
// // a.appendChild(h1)


// let h1 = document.querySelector("h1");
// // h1.style.color = "red";
// // h1.style.textTransform = "capitalize"

// h1.classList.toggle ("hulu");
// console.dir(h1)

// let a = document.getElementsByClassName("fg")
// console.log(a)

// let a = document.querySelectorAll("li");
// for(let i = 0;i<a.length;i++){
//     console.log(a[i].textContent)
// }

// let h1 = document.querySelector("h1")
// h1.textContent = "dsgdfg"

// let a = document.querySelector("ul");
// let b = document.createElement("li");
// b.textContent = "sher34535";
// a.append(b)


document.body.style.marginLeft = '20px';
document.body.style.marginTop = '10px';
// let a = document.querySelectorAll("ul li:nth-child(2n)")
// a.forEach(function(val){
//     val.classList.add("highlight")
// })

// bta =prompt("Tell the colour jo dbl click pe aayega")
// bta2 = prompt("Tell the colour jo single click pe aayega")
// bta3 = prompt("Tell the colour jo mouse rkhne pe aayega")
// bta4 = prompt("Tell the colour jo mouse htane pe aayega")

// let a = document.querySelector("h1");
// a.addEventListener("mouseover",function(){
//     a.style.color = bta3;
// })
// a.addEventListener("mouseout",function(){
//     a.style.color = bta4;
// })
// a.addEventListener("click",function(){
//     a.style.color = bta2;
// })
// a.addEventListener("dblclick",yellow)

// function yellow(){
//     a.style.color = bta
// }
// // a.removeEventListener("dblclick",yellow)

// let a = document.querySelector("input");
// a.addEventListener("mouseover",function(){
//     a.placeholder = "Ladle naam likh";
//     a.style.border = '4px outset blue'
//     a.style.height = '100px'
//     a.style.width = '300px'
//     a.style.fontSize = '30px'
// } 
// )
// a.addEventListener("mouseout",function(){
//     a.placeholder = "abe haggu hta kyu rha h";
//     a.style.border = '1px solid black' 
// } 
// )
// a.addEventListener("input",function(){
//     console.log('sherrrr')
// } 
// )

// let a = document.querySelector("input");
// total = "";
// a.addEventListener("input",function(s){
//     if(s.data!==null){
//         total+=s.data
//     }
// });

// let a = document.querySelector("select");
// let b = document.querySelector("#er");
// a.addEventListener("change",function(val){
//     console.log(val);
//     b.textContent = `Device Selected is ${val.target.value}`
// });

// textotal = ""
// let h1 = document.querySelector("h1")
// let k = window.addEventListener("keydown",function(a){
//     textotal+=a.key
//     h1.textContent = a.key
//     if(a.key==="Pause"){
//         textotal = textotal.replace(/Pause$/,"");
//         console.log(textotal)   
//     }
//     else if(a.key==="`"){
//         textotal=""
//     }
//     else if(textotal == "ALT+A"){
//         console.log('df')
//     }
// })

// let a = document.querySelector("#btn");
// let b = document.querySelector("#kutta");
// a.addEventListener("click",function(){
//     kutta.click();
// })
// b.addEventListener("change",function(val){
//     a.textContent = (val.target.files[0].name)
// })

let form = document.querySelector("form")
let inputs = document.querySelectorAll("input")
let main = document.querySelector("#main")
form.addEventListener("submit",function(val){
    val.preventDefault();  
    // console.log(inputs[0].value)
    let card = document.createElement("div");
    card.classList.add("card")
    let profile = document.createElement("div");
    profile.classList.add('profile');
    // card.appendChild(profile)
    let img = document.createElement("img");
    let img2 = inputs[0].value
    img.setAttribute("src",img2)

    let h3 = document.createElement("h3");
    h3.textContent = inputs[1].value
    let h5 = document.createElement("h5");
    h5.textContent = inputs[2].value
    let p = document.createElement("p");
    p.textContent = inputs[3].value
    profile.appendChild(img);
    card.appendChild(profile);
    card.appendChild(h3)
    card.appendChild(h5)
    card.appendChild(p)
    main.appendChild(card)
})


