
const tasks = [];
console.log(tasks);



printTasks();




document.getElementById("addtask").addEventListener("click",function(){
   addtask();
});

function addtask(){
    let taskName = document.getElementById("txtNewTask").value;
    let taskResponisble = document.getElementById("txtResponsible").value;
    let task = {name:taskName, responsible:taskResponisble, isDone:false};
    tasks.push(task);
    printTasks();
}

function printTasks(){
    document.getElementById("taskList").innerHTML = getHTMLTasks();
}
function markTask(element){
    let index = element.attributes["data-index"].value;
    let isChecked = element.checked;

    tasks[index].isDone = isChecked;
    printTasks(); 
}
function getHTMLTasks(){
    let html = "";
    let index = 0;

    tasks.forEach(element => { 
        let checked="";
        if (element.isDone){
             checked ="checked";
        }
        html += "<li><input onClick='markTask(this)' name='checkbox' data-index='" + index + "' type=checkbox " + checked + "/>" + element.responsible + "-" + element.name + "-" + index + "</li>";
        index++;
    });
    return html;    
}

function test(){
    alert("test");
}