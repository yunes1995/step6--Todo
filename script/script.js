let $ = document;
let AddTask = $.getElementById("addButton");
let input = $.getElementById("itemInput");
let ToDoDiv = $.getElementById("todoList");
let clearAll = $.getElementById("clearButton");

let ArrayForSave = [];



function AddToDo(){
    let inputValue = input.value;
    if(inputValue == ""){
        alert("inter task");
    }else{
    let objTask = {
        // id : todosArray.length + 1,
        content : inputValue,
        complet : false,
    }

    ArrayForSave.push(objTask);

    TodoGenerator(ArrayForSave);
    saveInLocal(ArrayForSave);
    input.value = "";
    input.focus();
}
}
AddTask.addEventListener("click",AddToDo)

function TodoGenerator(Task){
    ToDoDiv.innerHTML = "";

    Task.forEach((todo) => {
        let newTask = $.createElement("li");
    newTask.className = "completed well";

    let newLable = $.createElement("label");
    newLable.innerText = todo.content;

    let completeButton = $.createElement("button");
    completeButton.className ="btnSuccess";
    completeButton.innerText = "Completed"

    let DeleteButton = $.createElement("button");
    DeleteButton.className = "btnDelet";
    DeleteButton.innerText  = "Delete"

    newTask.append(newLable, completeButton,DeleteButton);
    ToDoDiv.append(newTask);
    });
    
}
// save data
function saveInLocal(todo){
    localStorage.setItem("ToDos" , JSON.stringify(todo))
}

function getSaveData(){
    let saveData =  JSON.parse(localStorage.getItem("ToDos"));
     if (saveData){
         ArrayForSave = saveData;
     }else{
         ArrayForSave = [];
     }
     TodoGenerator(ArrayForSave);
 }

 // clear Button 
 clearButton.addEventListener("click" , ()=>{
    ArrayForSave = [];
    TodoGenerator(ArrayForSave);
    localStorage.removeItem("ToDos")
 })
input.addEventListener("keydown" , (button) =>{
    if (button.code ==="Enter"){
        AddToDo();
    }
})
 window.addEventListener("load" , getSaveData)








const test = ()=>{
    console.log(ArrayForSave.content)
}
