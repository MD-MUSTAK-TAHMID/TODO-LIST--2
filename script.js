let input = document.querySelector(".container input")
let listContainer = document.querySelector(".listContainer")
let error = document.querySelector(".error")
let btn = document.querySelector(".container button")

btn.addEventListener("click" , function(){
    if(input.value == ""){
        error.style.display = "block"
    }else{
        error.style.display = "none"
        let li = document.createElement("li")
        li.innerHTML = input.value
        listContainer.appendChild(li)
        let span = document.createElement("span")
        li.appendChild(span)
        let i = document.createElement("i")
        i.classList.add("fa-solid" ,"fa-trash-can")
        li.appendChild(i)
    }
    input.value = ""
    saveData()
})
listContainer.addEventListener("click" , function(el){
    if(el.target.tagName == "LI"){
        let li = document.querySelector("li")
        li.classList.toggle("List_item")
        saveData()
    }else if(el.target.tagName == "SPAN"){
        let li = document.querySelector("li")
        li.classList.toggle("List_item")
        saveData()
    }else if(el.target.tagName == "I"){
        let li = document.querySelector("li")
        li.remove()
        saveData()
    }
})

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML )
}

function show(){
    listContainer.innerHTML = localStorage.getItem("data")
}
show()