let tasks = []
let completed = []
let header = document.getElementById('header')
let curr = 'All'
let add = ' <input id="tHead" type="text" placeholder="Task"> <input id="tRemind type="text" placeholder="Reminder"> <input id="tDate" type="date"> <button onclick="app()">Add Task</button> '
let display = document.getElementById('disp')

try{
    tasks = localStorage.getItem('tasks')
    completed = localStorage.getItem('completed')
}
catch{
    console.log('whoosh')
}

function change(title){
        clear()
        document.getElementById(curr).style.borderBottom = 'none'
    if(title == 'All Tasks'){
            header.innerHTML = 'All Tasks'
            curr = 'All'
    }

    if(title == 'Open'){
            header.innerHTML = 'Open'
            curr = 'Open'
    }

    if(title == 'Completed'){
            header.innerHTML = 'Completed Tasks'
            curr = 'Completed'
    }

    if(title == 'Create'){
        let fresh = document.createElement('div')
        fresh.setAttribute('id', 'task')
        fresh.setAttribute('class', 'task')
b        display.appendChild(fresh)
            header.innerHTML = 'Add a Task'
            curr = 'Create'
    }

    document.getElementById(curr).style.borderBottom ='solid .3vh white'
}

function clear(){
        
    for (let i = 0; i < display.children.length; i++) {
        if(display.children[i].localName == 'div'){
                console.log('ran')
                display.children[i].outerHTML = ''
        }
    }
}

function app(){

}