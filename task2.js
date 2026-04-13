const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("taskList");
addBtn.addEventListener("click", () => {
  if (input.value === "") return;
  const li = document.createElement("li");
  li.textContent = input.value;
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });
  const delBtn = document.createElement("button");
  delBtn.textContent = "X";
  delBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // prevents triggering complete
    li.remove();
  });
  li.appendChild(delBtn);
  list.appendChild(li);
  input.value = "";
});
