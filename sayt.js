let btn = document.querySelector("#btn")
let int1 = document.querySelector(".int1")
let int2 = document.querySelector(".int2")
let int3 = document.querySelector(".int3")

btn.addEventListener("click", () => {
    if (int1.value == "" || int2.value == "" 
    ) {
        alert("Please fill in completely")
    } else {
        alert("Your information is saved")
    }
    int1.value = ""
    int2.value = ""
    int3.checked = false
})