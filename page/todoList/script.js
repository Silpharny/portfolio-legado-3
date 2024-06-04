const ipt = document.querySelector("#txt");
const btn = document.querySelector(".addTaskButton");
const completeList = document.querySelector(".task-list");

let taskList = [];


let addTask = () => {
    taskList.push({
        task: ipt.value, 
        finish: false
    })
    showTask()

    ipt.value = ''
    ipt.focus()
};


let showTask = () => {
    
    let newLi = "";

    taskList.forEach((item, index) => {
        newLi += `
            <li class="task ${item.finish && "done"}">
                <img id="img" src="img/icons8-checked-60.png" alt="Add" onclick="completeTask(${index})">
                <h4 class="taskText">${item.task}</h4>
                <img src="img/icons8-trash-60.png" alt="trash" onclick="deteleTask(${index})">
            </li> 
        `;
    });

    completeList.innerHTML = newLi
    console.log(taskList);
}


let deteleTask = (index) => {

    delete taskList[index]

    showTask()
}

let completeTask = (index) => {

    taskList[index].finish = !taskList[index].finish

    showTask()
}



btn.addEventListener("click", addTask);
