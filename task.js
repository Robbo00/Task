let tasks = []
let completed = []
let header = document.getElementById('header')
let curr = 'All'

try{
    tasks = localStorage.getItem('tasks')
    completed = localStorage.getItem('completed')
}
catch{
    console.log('whoosh')
}

function change(title){
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
            header.innerHTML = 'Add a Task'
            curr = 'Create'
    }
    document.getElementById(curr).style.borderBottom ='solid .3vh white'
}