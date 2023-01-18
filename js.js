function test(){
    console.log(getTextToAdd.value)

}
/*----------------------clock ---------------------*/
function show_time() {
    var d = new Date();
    var hours = d.getHours();
    var minutes = d.getMinutes();
    var second = d.getSeconds();
    var years = d.getFullYear();
    var month = d.getMonth();
    var days = d.getDay();

    if (hours < 10) { hours = "0" + hours };
    if (minutes < 10) { minutes = "0" + minutes };
    if (second < 10) { second = "0" + second };
    if (month < 10) { month = "0" + month };
    if (days < 10) { days = "0" + days }
    document.getElementById("show_time").innerText = hours + ":" + minutes + ":" + second;
    document.getElementById("show_date").innerText = years + "-" + month + "-" + days;
    setTimeout(show_time, 1000);
}
show_time();
/*----------------------chose day for active ---------------------*/
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let whichDaysActive = new Date();
let todayName = weekday[whichDaysActive.getDay()];

let today = document.getElementById("spanDaysShow")
today.innerText = todayName;


/*----------------------add new task ---------------------*/
let counter = 0;
const btnAdd = document.getElementById("BtnAddTask");
const getTextToAdd = document.getElementById("textInput");

btnAdd.addEventListener("click", AddTaskToApp);

let satCounter = 0;
let sunCounter = 0;
let monCounter = 0;
let tueCounter = 0;
let wedCounter = 0;
let thurCounter = 0;
let firCounter = 0;
let flagForDone = false;

let saveTask = [];
function AddTaskToApp() {

    let whichDays = document.getElementById("selectDay");
    let choseDay = document.getElementById(`${whichDays.value}`);

    if (getTextToAdd.value == "") {
        alert("Insert The New Task")
    }
    else {

        if (whichDays.value == "saturday") {
            satCounter++;
            addToDo(satCounter);
        }
        if (whichDays.value == "sunday") {
            sunCounter++;
            addToDo(sunCounter);
        }
        if (whichDays.value == "monday") {
            monCounter++;
            addToDo(monCounter);
        }
        if (whichDays.value == "tuesday") {
            tueCounter++;
            addToDo(tueCounter);
        }
        if (whichDays.value == "wednesday") {
            wedCounter++;
            addToDo(wedCounter);
        }
        if (whichDays.value == "thursday") {
            thurCounter++;
            addToDo(thurCounter);
        }
        if (whichDays.value == "friday") {
            firCounter++;
            addToDo(firCounter);
        }
    }
    function addToDo(counterBeforTask) {
        counter++;
      
        let creatnewP = document.createElement("p");
        creatnewP.style.color = "red";
        creatnewP.className = "pTask";
        
        creatnewP.innerText = `  ${getTextToAdd.value}`
        choseDay.appendChild(creatnewP);
       
        // add check box 
        let ceratcheck = document.createElement("input");
        ceratcheck.setAttribute("type", "checkbox");
        creatnewP.appendChild(ceratcheck);
        // check for checked ?
        ceratcheck.addEventListener("change", () => {
            if (!ceratcheck.checked) {
                let test = ceratcheck.parentNode;
                test.style.color = "red";
                test.classList.remove("done");
            }
            if (ceratcheck.checked) {
                let test = ceratcheck.parentNode;
                test.style.color = "green";
                test.classList.add("done");
            }
        });
        // add button delete 
        let creatBtn = document.createElement("button");
        creatBtn.className = "BtnDelete";
        creatBtn.innerText = "delete";
        creatnewP.appendChild(creatBtn);
        /*new*/
        let EditBtn = document.createElement("button");
        EditBtn.innerText = "Edit";
        EditBtn.className ="BtnEdit";
        creatnewP.appendChild(EditBtn);
        
        EditBtn.addEventListener("click" , EditTask);
        function EditTask(){
            creatnewP.contentEditable = true;
            EditBtn.style.display = "none";
            DoneEdit.style.display = "inline";
        }

        let DoneEdit = document.createElement("button");
        DoneEdit.innerText = "ok";
        DoneEdit.className ="DoneEdit";
        DoneEdit.style.display = "none";
        creatnewP.appendChild(DoneEdit);

        DoneEdit.addEventListener("click" , DoneEditFunc);
        function DoneEditFunc(){
            creatnewP.contentEditable = false;
            EditBtn.style.display = "inline"
            DoneEdit.style.display = "none"
        }
        
        /*new*/
        creatBtn.addEventListener("click", deleteTask)
        function deleteTask() {
            creatBtn.parentNode.remove();

            if (whichDays.value == "saturday") {
                satCounter--;
            }
            if (whichDays.value == "sunday") {
                sunCounter--;
            }
            if (whichDays.value == "monday") {
                monCounter--;
            }
            if (whichDays.value == "tuesday") {
                tueCounter--;
            }
            if (whichDays.value == "wednesday") {
                wedCounter--;
            }
            if (whichDays.value == "thursday") {
                thurCounter--;
            }
            if (whichDays.value == "friday") {
                firCounter--;
            }

        }
    }

    /*local history*/
    
    let valueOfTask = getTextToAdd.value;

    let taskObj = 
    {
    
        content : valueOfTask,
    }
    saveTask.push(taskObj);

    localStorage.setItem("contentTask" , JSON.stringify(saveTask));
    
    getTextToAdd.value = "";
}

const getAddNewTaskBox = document.querySelector(".addNewTask");

getAddNewTaskBox.addEventListener("mouseover", () => {
    getAddNewTaskBox.style.backgroundColor = "rgb(107 189 176 / 82%)";
});
getAddNewTaskBox.addEventListener("mouseout", () => {
    getAddNewTaskBox.style.backgroundColor = "rgb(107 189 176 / 10%)";
})

/*--------------------performance----------------------*/

const btnAsseg = document.getElementById("arzyabi");
const spanForShowResult = document.getElementById("resultShow");

btnAsseg.addEventListener("click", Assessment);

function Assessment() {
    let x = + prompt("What percentage of the work did you do? (0-100)");
    let y = + prompt("How much progress did you make compared to last week? (0-100)");
    let z = + prompt("What percentage were you satisfied with yourself this week? (0-100)");
    let result = (x + y + z)/3;

    if (result > 300) {
        alert("The entered numbers are incorrect");
    }
    else {
        spanForShowResult.innerText = `Your score is ${parseInt(result)} of 100`;
    }

}
let forTest = () => {
    console.log(satCounter)
}


// add new fautur

let getAllTaskLink = document.getElementById("AllTask");
let getActiveLink = document.getElementById("ActiveLink");
let getCompletedTaskLink = document.getElementById("CompletedTask");
function AllTask(){
  
    getAllTaskLink.style.color = "yellow";
    getActiveLink.style.color = "#818181";
    getCompletedTaskLink.style.color = "#818181";
    const getPtask = document.querySelectorAll(".pTask");
    getPtask.forEach(task =>{
        task.style.display = "block";
    });
}
function ActiveTask(){
    
    getAllTaskLink.style.color = "#818181";
    getActiveLink.style.color = "red";
    getCompletedTaskLink.style.color = "#818181";

    const getPtask = document.querySelectorAll(".pTask");
    getPtask.forEach(task =>{
        task.style.display = "block";
        if(task.classList.contains("done")){
            task.style.display = "none";
        }
    });

}
function DoneTask(){

    
    getAllTaskLink.style.color = "#818181";
    getActiveLink.style.color = "#818181";
    getCompletedTaskLink.style.color = "green";
    const getPtask = document.querySelectorAll(".pTask");
    getPtask.forEach(task =>{
        task.style.display = "none";
        if(task.classList.contains("done")){
            task.style.display = "block";
        }
    });

}
/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }