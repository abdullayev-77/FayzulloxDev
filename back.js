let btn1 = document.querySelector("#btn1")
let btn2 = document.querySelector("#btn2")
let main = document.querySelector(".main")
let text1 = document.querySelector(".text1")
let text2 = document.querySelector(".text2")
let text3 = document.querySelector(".text3")
let text4 = document.querySelector(".text4")
let text5 = document.querySelector(".text5")
let active = false

let tx1 = document.querySelector(".tx1")
let tx2 = document.querySelector(".tx2")
let tx3 = document.querySelector(".tx3")
let tx4 = document.querySelector(".tx4")


btn1.addEventListener("click", () => {
  btn1.classList.add("hidden")
  btn2.classList.remove("hidden")
  main.style.background = "#282c35"
  text1.style.color = "white"
  text2.style.color = "white"
  text3.style.color = "white"
  text4.style.color = "white"
  text5.style.color = "white"
  tx1.style.color = "#ffa7c5"
  tx2.style.color = "#ffa7c5"
  tx3.style.color = "#ffa7c5"
  tx4.style.color = "#ffa7c5"
})

btn2.addEventListener("click", () => {
  btn1.classList.remove("hidden")
  btn2.classList.add("hidden")
  main.style.background = "white"
  text1.style.color = "black "
  text2.style.color = "black"
  text3.style.color = "black"
  text4.style.color = "black"
  text5.style.color = "black"
  tx1.style.color = "#bd3f68"
  tx2.style.color = "#bd3f68"
  tx3.style.color = "#bd3f68"
  tx4.style.color = "#bd3f68"

})