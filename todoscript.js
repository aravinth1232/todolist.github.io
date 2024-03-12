let button = document.getElementById("add");
let todolist = document.getElementById("todoList");
let input =  document.getElementById("input");

window.onload=()=>{
   todos= JSON.parse(localStorage.getItem('todos')) || [];
   todos.forEach(todo=> addtodo(todo))
}


let todos =[]
button.addEventListener('click',()=>{
    
    todos.push(input.value);
    localStorage.setItem('todos',JSON.stringify(todos))
    addtodo(input.value);
    input.value=""
})

function addtodo(todo){

    let p = document.createElement('p');  
    p.innerText =todo;
    todolist.appendChild(p)
   
    p.addEventListener('click',()=>{
        p.style.textDecoration="line-through"
        todolist.removeChild(p)
        remove(todo)
        
    })

    p.addEventListener('dblclick',()=>{
     
    })

}


function remove(todo){
    
    let index= todos.indexOf(todo)
   
    if(index>-1){
    todos.splice(index,1)
           
    }
    localStorage.setItem('todos',JSON.stringify(todos))
}