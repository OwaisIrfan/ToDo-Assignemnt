
var list = document.getElementById("list")



function addTodo(){
    var todo_item = document.getElementById("todo-item")

    // create li tag with text node
    var div = document.createElement("div")
    div.setAttribute("class", "div-of-li")
    var li = document.createElement('li')
    li.setAttribute("class", "listofli")
    var liText = document.createTextNode(todo_item.value)
    div.appendChild(liText)
    li.appendChild(liText)



    // create delbtn button
    var delBtn = document.createElement("button")
    delBtn.setAttribute("class", "plus-btn dlte gnfgn")
    delBtn.setAttribute("onclick", "deleteItem(this)")
    var delText = document.createElement("i")
    delText.setAttribute("class", "far fa-minus-circle")
    delBtn.appendChild(delText)


    // create editbtn button
    var editBtn = document.createElement("button")
    editBtn.setAttribute("class", "plus-btn dlte")
    editBtn.setAttribute("onclick", "editItem(this)")
    var editText = document.createElement("i")
    editText.setAttribute("class", "far fa-edit")
    editBtn.appendChild(editText)
    


    li.appendChild(delBtn)
    li.appendChild(editBtn)


    list.appendChild(li)


    todo_item.value = ""
    
}

function deleteItem(e){

    e.parentNode.remove()
}

function editItem(e){
    var val = e.parentNode.firstChild.nodeValue;
    var editValue = prompt("Enter edit value", val)
    e.parentNode.firstChild.nodeValue = editValue
    
}

function deleteAll(){
    list.innerHTML = ""
}














