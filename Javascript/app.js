const message = document.querySelector(".message")
const form = document.querySelector(".form")
const submitBtn = document.getElementById("task-btn")
const taskContainer = document.querySelector(".list-container")
const listArticle = document.querySelector(".list-article")
const clearItems = document.querySelector(".clear-all")

form.addEventListener("submit", (e) => {
  e.preventDefault()
  addTask()
})

clearItems.addEventListener("click", () => {
  clearAll()
})

function addTask() {
  const taskInput = document.getElementById("task-input")
  let task = taskInput.value
  // task = task.slice(0, 1).toUpperCase() + task.slice(1, task.length) //They do the same thing
  task = task.charAt(0).toUpperCase() + task.slice(1)
  if (task !== "") {
    addNewtask(task)
  }
  task.innerHTML = ""
  taskInput.placeholder = "New Task"
}

function addNewtask(task) {
  const newTask = document.createElement("article")
  newTask.classList.add("new-task")
  newTask.innerHTML = `
        <p class="list">${task}</p>
            <div>
                <figure class="edit-btn">
                    <img src="../Resources/edit.png" alt="">
                </figure>
                <figure class="delete-btn">
                    <img src="../Resources/delete.png" alt="Delete Img">
                </figure>
            </div>
        `

  const editBtn = newTask.querySelector(".edit-btn")
  const deleteBtn = newTask.querySelector(".delete-btn")

  deleteBtn.addEventListener("click", (e) => {
    const listItem = e.currentTarget.parentElement.parentElement
    listArticle.removeChild(listItem)
  })

  listArticle.appendChild(newTask)
}

function clearAll() {
  const tasks = document.querySelectorAll(".new-task")
  if (tasks.length > 0) {
    tasks.forEach((task) => {
      listArticle.removeChild(task)
    })
  }
}
