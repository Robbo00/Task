let tasks = []
let completed = []
let header = document.getElementById('header')
let curr = 'All'
let add = ' <input id="tHead" type="text" placeholder="Task"> <input id="tRemind" type="text" placeholder="Reminder"> <input id="tDate" type="date"> <button onclick="app()">Add Task</button> '
let display = document.getElementById('disp')
let cont = document.getElementById('cont')
let cree = 0

// try{
//     tasks = localStorage.getItem('tasks')
//     completed = localStorage.getItem('completed')
// }
// catch{
//     console.log('whoosh')
// }

function change(title){
        clear()
        document.getElementById(curr).style.borderBottom = 'none'
    if(title == 'All Tasks'){
            header.innerHTML = 'All Tasks'
            curr = 'All'
            create()
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
        fresh.innerHTML = add
       display.appendChild(fresh)
            header.innerHTML = 'Add a Task'
            curr = 'Create'
    }

    document.getElementById(curr).style.borderBottom ='solid .3vh white'
}

function clear(){
    for (let i = 0; i < display.children.length; i++) {
        if(display.children[i].localName == 'div'){
                if(display.children[i].getAttribute('id') == 'cont'){
                    display.children[i].style.display = 'none'
                    continue}
                display.children[i].outerHTML = ''
        }
    }
    for (let i = 0; i < cont.children.length; i++) {
        cont.children[i].outerHTML = ''        
    }
}

function app(){
    let top = document.getElementById('tHead').value
    let middle = document.getElementById('tRemind').value
    let bottom = document.getElementById('tDate').value   
    console.log(tasks)
    tasks.push({task: top, reminder: middle, date:bottom, status:'open'})
    console.log(tasks)

    let int = setInterval(function () {
    let now = new Date();
    let diff = date - now;
    
    if (diff <= 0) {
      clearInterval(int);
      timerSpan.innerHTML = "🎉 HAppy Holidays!";
    } else {
      let days = Math.floor(diff / (1000 * 60 * 60 * 24));
      let hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      let minutes = Math.floor((diff / (1000 * 60)) % 60);
      let seconds = Math.floor((diff / 1000) % 60);
      timerSpan.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
    
  }, 1000);
  
}

function create(){
    cont.style.display = 'initial'
    for (let i = 0; i < tasks.length; i++) {
        console.log('ran')
        let t = tasks[i].task
        let r = tasks[i].reminder
        let d = tasks[i].date
        let v = document.createElement('div')
        v.setAttribute('class', 'task b')
        v.innerHTML = `<h1  style="color: black;">${t}</h1> <h4 >${r}</h4> <p id="${cree}">${d}</p> `
        cont.appendChild(v)
}
}

