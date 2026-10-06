const searchInput = document.getElementById("searchInput");
const tasks = document.querySelectorAll("#taskList li");

searchInput.addEventListener("keyup", function() {
  const filter = searchInput.value.toLowerCase();
  tasks.forEach(task => {
    task.style.display = task.textContent.toLowerCase().includes(filter) ? "" : "none";
  });
});
// Search functionality
function searchTasks() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    // Note: Agar aapke task ka class name alag hai (jaise .task-item), toh usay yahan badal lein
    let tasks = document.querySelectorAll('.task-card'); 

    tasks.forEach(function(task) {
        let taskText = task.textContent.toLowerCase();
        if (taskText.includes(input)) {
            task.style.display = ""; // Task dikhao
        } else {
            task.style.display = "none"; // Task chhupao
        }
    });
}
