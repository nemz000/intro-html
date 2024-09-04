console.log("connected")

const btnElem = document.getElementById("hero-btn");
console.log(btnElem);

 function onHover() {
    btnElem.style.backgroundColor = 'blue'
    // btnElem.style.createText = 'login'
 }

 btnElem.addEventListener("mouseover", onHover())

 //remBtn = document.createElement("hero-btn")
 //remBtn.className


 btnElem.addEventListener('mouseout', () => {
    btnElem.style.backgroundColor = "orange"
 })

 btnElem.addEventListener('mouseover', () => {
      btnElem.innerText = 'login'
 })
 btnElem.addEventListener('mouseout', () => {
    btnElem.outerText = 'Get Started'
 })
