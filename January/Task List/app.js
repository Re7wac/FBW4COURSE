// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');
// Load all event listeners
loadEventListeners();
// Load all event listeners
function loadEventListeners() {
    //Dom Load event
    document.addEventListener('DOMContentLoaded',getTasks)
    // Add task event
    form.addEventListener('submit', addTask);
    //Remove Task Event
    taskList.addEventListener('click', removeTask)
    //Clear Tasks Event 
    clearBtn.addEventListener('click', clearTasks)
    //Filter Tasks Event
    filter.addEventListener('keyup', filterTasks)

}

//get Tasks from LS

function getTasks() {
    let makeLi;
    if (localStorage.getItem('tasks') === null) {
        makeLi = []
    } else {
        makeLi = JSON.parse(localStorage.getItem('tasks'))
    }
    let item = ''
    for (let j = 0; j < makeLi.length; j++) {
        item = makeLi[j]
        let li = document.createElement('li')
        li.className = 'collection-item'
        let liT = document.createTextNode(item)
        let a = document.createElement('a')
        a.className = 'delete-item secondary-content'
        let i = document.createElement('i')
        i.className = 'fa fa-remove'
        li.appendChild(a)
        a.appendChild(i)
        li.appendChild(liT)
        taskList.appendChild(li)
        //intitialize task
        //check if there is any tasks in LS
        //if tasks === null then tasks = []
        //else tasks = the array from LS
        //loop in tasks array
        //for every item create list item
        //the text is the task
    }
}

// Add Task event Handler
function addTask(e) {
    if (taskInput.value === '') {
        alert('Add a task');
    }
    // Create li element
    const li = document.createElement('li');
    // Add class
    li.className = 'collection-item';
    // Create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    // Create new link element
    const link = document.createElement('a');
    // Add class
    link.className = 'delete-item secondary-content';
    link.addEventListener('click', removeTask)
    // Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append the link to li
    li.appendChild(link);
    // Append li to ul
    taskList.appendChild(li);
    //Store in Ls
    storeTaskInLocalStorage(taskInput.value);

    ////   another way to JSON ////
    // localStorage.setItem('taskList', Array.from(JSON.stringify(taskList.textContent)))

    // Clear input
    taskInput.value = '';
    e.preventDefault();
}
//Store Task
function storeTaskInLocalStorage(task) {
    //Initialize the Tasks Array
    let tasks;
    //Getting the Tasks Array from Ls 
    if (localStorage.getItem('tasks') === null) {
        //Check if there is no Tasks yet, Define it as 'Empty Array
        tasks = []
    } //Else Take it ready and assign it to tasks Array
    else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    } //Push the task  to it
    tasks.push(task)
    //Save it back to the Local Storage
    localStorage.setItem('tasks', JSON.stringify(tasks))

}
// Add remove event Handler
function removeTask(e) {


    if (confirm('Are you sure')) {
        e.target.parentElement.parentElement.remove()


        //Remove from Ls
        removeTaskFromLocalStorage(e.target.parentElement.parentElement)
    }

    // tasks.forEach(function (item, index) {
    //     if (e.target.closest("li").innerText == item) {
    //         tasks.splice(index, 1)

    //     }

    // })
    //.log(e.target.parentElement.parentElement)
}
//Remove from Ls
function removeTaskFromLocalStorage(taskItem) {
    // //Initialize the Tasks Array
    // let tasks;
    // //Check if there is any tasks in the ls
    // if (localStorage.getItem('tasks') === null)
    //     //if there is no tasks : then Tasks =[]
    //     tasks = [];
    // //else Tasks = the current array im LS
    // else {
    //     tasks = JSON.parse(localStorage.getItem('tasks'))
    // }
    // //Loop inside the tasks array
    // for (i = 0; i < tasks.length; i++) {
    //     //if the tasks in the task item matches with amy tasl them remove ot form the tasks array
    //     if (tasks[i] == taskItem.textContent) {
    //         tasks.splice(i, 1)
    //     }
    // }
    // //After the loop fivish are set the tasks array to the LS
    // localStorage.setItem('tasks', JSON.stringify(tasks))

    // let deletTasks;

    // if (localStorage.getItem('deletTasks') === null) {
    //     deletTasks = []
    // }

    // else {
    //     deletTasks = JSON.parse(localStorage.getItem('deletTasks'))
    // }

    // deletTasks.push(taskItem.textContent);


    // localStorage.setItem('deletTasks'.JSON.stringify(deletTasks));
    // localStorage.setItem('tasks', JSON.stringify(tasks))

    let addd;
    let arr = JSON.parse(localStorage.getItem('tasks'))
    for (i = 0; i < arr.length; i++) {
        if (arr[i] == taskItem.textContent) {
            arr.splice(i, 1)
        }
    }
    if (JSON.parse(localStorage.getItem('task2') === null)) {
        addd = []
    } else {
        addd = JSON.parse(localStorage.getItem('task2'))
    }
    addd.push(taskItem.textContent)
    localStorage.setItem('tasks', JSON.stringify(arr))
    localStorage.setItem('task2', JSON.stringify(addd))
}
// clear Task event Handler
function clearTasks(e) {

    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild)
    }

    localStorage.clear()

    // Array.from(e.target.parentElement.children[2].children).forEach(function (item) {

    //     item.remove()
    // })
    //// Another Sloution //////
    //taskList.textContent = ''



    //     e.target.parentElement.children[2].innerHTML=''
    //     console.log(e.target.parentElement.children[2])
}
// Add filter event Handler
function filterTasks() {
    let result = filter.value.toLowerCase()
    document.querySelectorAll(".collection-item").forEach(function (item) { //NodeList
        if (item.innerText.toLowerCase().includes(result)) {
            item.style.display = "block"
        } else {
            item.style.display = "none"
        }
    })
    /*
    Array.from(taskList.children).forEach(function(item){
        item.style.display = (item.textContent.toLowerCase().includes(e.target.value.toLowerCase())? "block" : "none")
    })
    */
}