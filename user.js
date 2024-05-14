let array = [
    {
      img:"https://picsum.photos/id/1020/600/400"
    }, 
    {
      img:"https://picsum.photos/id/777/600/400"
    },
    {
      img: "https://picsum.photos/id/648/600/400"
    },
    {
      img: "https://picsum.photos/id/543/600/400"
    },
    {
      img: "https://picsum.photos/id/212/600/400"
    },
    {
      img: "https://picsum.photos/id/256/600/400"
    },
    {
      img: "https://picsum.photos/id/739/600/400"
    },
    {
      img: "https://picsum.photos/id/316/600/400"
    },
    {
      img: "https://picsum.photos/id/755/600/400"
    },
    {
      img: "https://picsum.photos/id/453/600/400"
    }
    ]
    
    let son = 0 
    
    let left = document.querySelector(".left")
    array.forEach((element,index) => {
      let img = document.createElement("img")
      img.src = element.img
      img.alt = "img"
      left.appendChild(img)
    });
    
    let right = document.querySelector(".right")
    
    array.forEach((element, index) => {
      
      
      let img = document.createElement("img")
      img.src = element.img
      img.alt = "img"
      
      img.addEventListener("click", ()=> {
          let array1 = right.childNodes
        console.log(array1);
        array1.forEach(item => {
          item.style.transform = "translateX(0px)"
        })
        left.style.transform = "translateY(-"+ index * 500 + "px)"
        right.style.transform = "translateY(-"+index * 100 + "px)"
        img.style.transform = "translateX(-100px)"
      })
      son = 0
      right.appendChild(img)
    }) 