// 1. Search Functionality
const searchInput = document.getElementById("searchInput");
if (searchInput) {
  searchInput.addEventListener("keyup", function () {
    const filter = searchInput.value.toLowerCase();
    // Note: Yaqeen karein ke aapke task items ka class 'task-card' ho
    const tasks = document.querySelectorAll(".task-card"); 

    tasks.forEach((task) => {
      const taskText = task.textContent.toLowerCase();
      if (taskText.includes(filter)) {
        task.style.display = "";
      } else {
        task.style.display = "none";
      }
    });
  });
}

// 2. Mark Task as Completed (Checklist)
document.addEventListener("change", function (e) {
  if (e.target.classList.contains("complete-checkbox")) {
    // Parent task card dhoondein
    const task = e.target.closest(".task-card");
    if (task) {
      if (e.target.checked) {
        task.classList.add("completed");
      } else {
        task.classList.remove("completed");
      }
    }
  }
});

// 3. Delete Task Functionality
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-btn")) {
    // Parent task card dhoondein
    const task = e.target.closest(".task-card");
    if (task) {
      task.remove(); // Task ko DOM se hata dein
    }
  }
});