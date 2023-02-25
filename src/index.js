// document.addEventListener("DOMContentLoaded", () => {
//   // your code here

// });

const input = document.getElementById("new-task-description");

const lists = document.getElementById("list")

const form = document.getElementById("create-task-form")

const tasks = document.getElementById("tasks")

const deleteButton = document.createElement("button")

form.addEventListener("submit", (e) => {
  e.preventDefault()

  let listItem = document.createElement('li');
  listItem.appendChild(document.createTextNode(input.value));
  document.querySelector('ul').appendChild(listItem);
  document.querySelector('li').appendChild(deleteButton);
  form.reset()
})



  // deleteButton.className = "delete-bttn";
  // deleteButton.textContent = "X";
  // deleteButton.addEventListener("click", () => {
  // tasks.remove()
// })