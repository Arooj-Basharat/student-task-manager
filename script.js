const searchInput = document.getElementById("searchInput");
const tasks = document.querySelectorAll("#taskList li");

searchInput.addEventListener("keyup", function() {
  const filter = searchInput.value.toLowerCase();
  tasks.forEach(task => {
    task.style.display = task.textContent.toLowerCase().includes(filter) ? "" : "none";
  });
});
