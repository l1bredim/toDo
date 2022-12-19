const dom = {
    new: document.getElementById('new'),
    add: document.getElementById('add'),
    tasks: document.getElementById('tasks')
}

const tasks = []

dom.add.onclick = () => {
    const newTaskText = dom.new.value
    if(newTaskText && isNotHaveTask(newTaskText, tasks)) {
        addTask(newTaskText, tasks)
        dom.new.value = ''
        tasksRender(tasks)
    }
}

function addTask(text, list) {
    let currentTime = Date.now()
    const task = {
        id: currentTime,
        text,
        isComplete: false
    }
    list.push(task)

}

function isNotHaveTask(text, list) {
    let isNotHaveTask = true

    list.forEach((task) => {
        if (task.text === text) {
            alert('Task already use')
            isNotHaveTask = false
        }
    })
    return isNotHaveTask
}

function tasksRender(list) {
    let htmlList = ''

    list.forEach(task => {
        const cls = task.isComplete 
        ? 'todo__task todo__task_complete'
        : 'todo__task'
        const checked = task.isComplete ? 'checked' : ''
        const taskHtml = `
        <div id="${task.id}" class="${cls}">
                <label class="todo__checkbox" >
                    <input type="checkbox" ${checked}">
                    <div class="todo__checkbox-div"></div>
                </label>
                    <div class="todo__task-title">${task.text}</div>
                <div class="todo__task-del">Delete</div>
            </div>
        `
        htmlList = htmlList + taskHtml
    })

    dom.tasks.innerHTML = htmlList
}

dom.tasks.onclick = (event) => {
    const target = event.target
    if (target.classList.contains('todo__checkbox-div')) {
        console.log(target.previousElementSibling)
    }
}