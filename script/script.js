let $ = document;
let AddTask = $.getElementById("addButton");
let input = $.getElementById("itemInput");
let ToDoDiv = $.getElementById("todoList");
let ArrayForSave = [];




AddTask.addEventListener("click", ()=>{
    let inputValue = input.value;

    let objTask = {
        // id : todosArray.length + 1,
        content : inputValue,
        complet : false,
    }

    ArrayForSave.push(objTask);

    TodoGenerator(ArrayForSave);
    saveInLocal(ArrayForSave);
    input.value = "";
})

function TodoGenerator(Task){

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

 window.addEventListener("load" , getSaveData)








const test = ()=>{
    console.log(ArrayForSave)
}
